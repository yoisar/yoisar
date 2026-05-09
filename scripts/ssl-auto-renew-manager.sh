#!/bin/bash
# /root/ssl-auto-renew-manager.sh
# Script maestro para gestionar renovación SSL de todos los dominios
# CON VERIFICACIÓN AUTOMÁTICA DE .well-known

set -e

# Configuración
NGINX_CONFIG="/www/server/nginx/conf/nginx.conf"
NGINX_PID="/www/server/nginx/logs/nginx.pid"
CERT_DIR="/etc/letsencrypt/live"
VHOST_CERT_DIR="/www/server/panel/vhost/cert"
LOG_FILE="/var/log/ssl-renewal.log"
EMAIL_ADMIN="admin@yoisar.com"
BACKUP_DIR="/root/nginx-backups"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

check_expiry() {
    local cert_file=$1
    if [ -f "$cert_file" ]; then
        expiry_date=$(openssl x509 -in "$cert_file" -noout -enddate 2>/dev/null | cut -d= -f2)
        if [ -n "$expiry_date" ]; then
            expiry_epoch=$(date -d "$expiry_date" +%s)
            current_epoch=$(date +%s)
            days_left=$(( ($expiry_epoch - $current_epoch) / 86400 ))
            echo $days_left
        else
            echo "0"
        fi
    else
        echo "0"
    fi
}

# Función para verificar si existe el bloque .well-known
check_well_known_exists() {
    local domain=$1
    local config_file=$2

    awk -v domain="$domain" '
    /server[[:space:]]*{/ { in_server=1; server_block="" }
    in_server {
        server_block = server_block $0 "\n"
        if ($0 ~ /server_name.*[[:space:]]+'"$domain"'[[:space:]]*;/) {
            found_domain=1
        }
        if ($0 == "}") {
            if (found_domain) {
                if (server_block ~ /\.well-known\/acme-challenge/) {
                    print "EXISTS"
                } else {
                    print "MISSING"
                }
            }
            in_server=0
            found_domain=0
            server_block=""
        }
    }
    ' "$config_file"
}

# Función para extraer el root del dominio HTTP
extract_webroot_from_http_block() {
    local domain=$1
    local config_file=$2

    awk -v domain="$domain" '
    /server[[:space:]]*{/ { in_server=1; listening_80=0 }
    in_server {
        if ($0 ~ /listen[[:space:]]+80/) {
            listening_80=1
        }
        if ($0 ~ /server_name.*[[:space:]]+'"$domain"'[[:space:]]*;/) {
            found_domain=1
        }
        if (found_domain && listening_80 && $0 ~ /root[[:space:]]+/) {
            match($0, /root[[:space:]]+([^;]+)/, arr)
            print arr[1]
            exit
        }
        if ($0 == "}") {
            in_server=0
            found_domain=0
            listening_80=0
        }
    }
    ' "$config_file"
}

# Función para agregar bloque .well-known a un dominio específico
add_well_known_exception() {
    local domain=$1
    local webroot=$2
    local config_file=$3

    log_message "${YELLOW}Agregando excepción .well-known para $domain${NC}"

    # Crear backup
    mkdir -p "$BACKUP_DIR"
    backup_file="$BACKUP_DIR/nginx.conf.backup.$(date +%Y%m%d_%H%M%S)"
    cp "$config_file" "$backup_file"
    log_message "Backup creado: $backup_file"

    awk -v domain="$domain" -v webroot="$webroot" '
    BEGIN { modified=0; output="" }
    {
        output = output $0 "\n"
        if ($0 ~ /server[[:space:]]*{/ && !modified) {
            block = $0 "\n"
            in_block = 1
            listening_80 = 0
            server_name_match = 0
            block_content = $0 "\n"
        } else if (in_block && !modified) {
            block_content = block_content $0 "\n"
            if ($0 ~ /listen[[:space:]]+80/) {
                listening_80 = 1
            }
            if ($0 ~ /server_name.*[[:space:]]+'"$domain"'/) {
                server_name_match = 1
            }
            if ($0 == "}") {
                if (listening_80 && server_name_match) {
                    lines = split(block_content, arr, "\n")
                    new_block = ""
                    for (i=1; i<lines; i++) {
                        new_block = new_block arr[i] "\n"
                        if (arr[i] ~ /root[[:space:]]+/) {
                            new_block = new_block "    # Excepción para ACME challenge (Let'\''s Encrypt / certbot)\n"
                            new_block = new_block "    location ^~ /.well-known/acme-challenge/ {\n"
                            new_block = new_block "        root " webroot ";\n"
                            new_block = new_block "        allow all;\n"
                            new_block = new_block "    }\n"
                            modified = 1
                        }
                    }
                    new_block = new_block "}"
                    block_content = new_block
                    modified = 1
                }
                output = output block_content "\n"
                in_block = 0
                listening_80 = 0
                server_name_match = 0
                block_content = ""
            }
        } else if (!in_block) {
            # Fuera de bloque, continuar
        }
    }
    END {
        if (modified) {
            print output
        } else {
            system("cat " ENVIRON["CONFIG_FILE"])
        }
    }
    ' "$config_file" > "${config_file}.tmp"

    if ! diff -q "$config_file" "${config_file}.tmp" > /dev/null 2>&1; then
        mv "${config_file}.tmp" "$config_file"
        log_message "${GREEN}✓ Excepción .well-known agregada para $domain${NC}"
        return 0
    else
        rm -f "${config_file}.tmp"
        log_message "${BLUE}ℹ El dominio $domain ya tiene la excepción .well-known o no fue necesario modificarlo${NC}"
        return 1
    fi
}

# Función para verificar y crear directorio .well-known
ensure_well_known_directory() {
    local webroot=$1
    local domain=$2

    local acme_path="$webroot/.well-known/acme-challenge"

    if [ ! -d "$acme_path" ]; then
        log_message "Creando directorio $acme_path"
        mkdir -p "$acme_path"
        chmod 755 "$webroot/.well-known"
        chmod 755 "$acme_path"
    fi

    if [ -d "$acme_path" ]; then
        chmod 755 "$acme_path" 2>/dev/null || true
        log_message "${GREEN}✓ Directorio .well-known/acme-challenge listo para $domain${NC}"
    else
        log_message "${RED}✗ No se pudo crear/verificar $acme_path${NC}"
        return 1
    fi

    return 0
}

# Función para probar configuración y recargar Nginx
test_and_reload_nginx() {
    log_message "Probando configuración de Nginx..."

    if nginx -t 2>&1 | tee -a "$LOG_FILE"; then
        log_message "${GREEN}✓ Configuración de Nginx válida${NC}"

        if [ -f "$NGINX_PID" ]; then
            kill -HUP $(cat "$NGINX_PID") 2>/dev/null || true
        else
            systemctl reload nginx 2>/dev/null || service nginx reload 2>/dev/null || true
        fi

        log_message "${GREEN}✓ Nginx recargado${NC}"
        return 0
    else
        log_message "${RED}✗ Error en configuración de Nginx${NC}"
        return 1
    fi
}

analyze_nginx_config() {
    log_message "${GREEN}=== ANALIZANDO CONFIGURACIÓN DE NGINX ===${NC}"

    if [ ! -f "$NGINX_CONFIG" ]; then
        log_message "${RED}Error: No se encuentra $NGINX_CONFIG${NC}"
        exit 1
    fi

    grep -A20 "listen.*80" "$NGINX_CONFIG" | \
        grep -oP "server_name\s+\K[^;]+" | \
        tr -s ' ' '\n' | \
        grep -v "localhost" | \
        grep -v "_" | \
        grep "\." | \
        sort -u > /tmp/domains_from_nginx.txt

    log_message "Dominios encontrados en HTTP (puerto 80): $(cat /tmp/domains_from_nginx.txt | wc -l)"
    cat /tmp/domains_from_nginx.txt | while read domain; do
        log_message "  - $domain"
    done
}

process_domain_well_known() {
    local domain=$1

    log_message "${BLUE}--- Procesando dominio: $domain ---${NC}"

    webroot=$(extract_webroot_from_http_block "$domain" "$NGINX_CONFIG")

    if [ -z "$webroot" ]; then
        main_domain=$(echo "$domain" | grep -oP '[^.]+\.[^.]+$')
        webroot="/www/wwwroot/$main_domain"
        log_message "${YELLOW}No se encontró webroot específico, usando: $webroot${NC}"
    else
        log_message "Webroot encontrado: $webroot"
    fi

    well_known_status=$(check_well_known_exists "$domain" "$NGINX_CONFIG")

    if [ "$well_known_status" == "MISSING" ]; then
        log_message "${YELLOW}⚠ El dominio $domain NO tiene la excepción .well-known${NC}"

        if add_well_known_exception "$domain" "$webroot" "$NGINX_CONFIG"; then
            test_and_reload_nginx
        fi
    else
        log_message "${GREEN}✓ El dominio $domain ya tiene la excepción .well-known configurada${NC}"
    fi

    ensure_well_known_directory "$webroot" "$domain"

    echo "$webroot"
}

generate_renewal_script() {
    local domain=$1
    local webroot=$2
    local main_domain=$3
    local script_file="/root/renew-${domain}-ssl.sh"

    cat > "$script_file" << 'EOF'
#!/bin/bash
# Script de renovación para DOMAIN_PLACEHOLDER
# Generado: DATE_PLACEHOLDER
# Verifica .well-known antes de renovar

set -e

DOMAIN="DOMAIN_PLACEHOLDER"
WEBROOT="WEBROOT_PLACEHOLDER"
MAIN_DOMAIN="MAIN_DOMAIN_PLACEHOLDER"
LOG_FILE="/var/log/ssl-renewal.log"
NGINX_CONFIG="/www/server/nginx/conf/nginx.conf"

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$DOMAIN] $1" | tee -a "$LOG_FILE"
}

verify_well_known() {
    local acme_path="$WEBROOT/.well-known/acme-challenge"

    if [ ! -d "$acme_path" ]; then
        log_message "ERROR: Directorio .well-known no existe: $acme_path"
        log_message "Creando directorio..."
        mkdir -p "$acme_path"
        chmod 755 "$WEBROOT/.well-known"
        chmod 755 "$acme_path"
    fi

    test_file="$acme_path/test-$(date +%s).txt"
    echo "test" > "$test_file"

    if curl -s "http://$DOMAIN/.well-known/acme-challenge/$(basename $test_file)" | grep -q "test"; then
        log_message "✓ Verificación .well-known exitosa"
        rm -f "$test_file"
        return 0
    else
        log_message "⚠ No se pudo verificar acceso web a .well-known (continuando de todos modos)"
        rm -f "$test_file"
        return 0
    fi
}

log_message "=== INICIANDO RENOVACIÓN SSL para $DOMAIN ==="

if [ ! -d "$WEBROOT" ]; then
    log_message "ERROR: Webroot $WEBROOT no existe"
    exit 1
fi

verify_well_known

log_message "Probando acceso HTTP a $DOMAIN"
if ! curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN/.well-known/acme-challenge/" | grep -q "200\|403\|404"; then
    log_message "ADVERTENCIA: El dominio $DOMAIN podría no estar respondiendo en HTTP"
fi

log_message "Ejecutando certbot para $DOMAIN..."
certbot certonly --webroot \
    -w "$WEBROOT" \
    -d "$DOMAIN" \
    ${EXTRA_DOMAINS:-} \
    --non-interactive --agree-tos \
    --email "EMAIL_PLACEHOLDER" \
    --force-renewal \
    --verbose 2>&1 | tee -a "$LOG_FILE"

if [ $? -eq 0 ]; then
    log_message "✓ Renovación exitosa para $DOMAIN"

    CERT_SRC="/etc/letsencrypt/live/$MAIN_DOMAIN"
    CERT_DST="/www/server/panel/vhost/cert/$MAIN_DOMAIN"

    if [ -d "$CERT_SRC" ]; then
        mkdir -p "$CERT_DST"
        cp "$CERT_SRC/fullchain.pem" "$CERT_DST/fullchain.pem"
        cp "$CERT_SRC/privkey.pem" "$CERT_DST/privkey.pem"
        log_message "✓ Certificados copiados a $CERT_DST"
    else
        log_message "ERROR: No se encontraron certificados en $CERT_SRC"
        exit 1
    fi

    if [ -f "/www/server/nginx/logs/nginx.pid" ]; then
        kill -HUP $(cat /www/server/nginx/logs/nginx.pid)
        log_message "✓ Nginx recargado"
    else
        systemctl reload nginx 2>/dev/null || service nginx reload 2>/dev/null
    fi

    new_expiry=$(openssl x509 -in "$CERT_SRC/fullchain.pem" -noout -enddate 2>/dev/null | cut -d= -f2)
    log_message "✓ Nuevo certificado válido hasta: $new_expiry"
else
    log_message "✗ ERROR: Falló la renovación para $DOMAIN"
    exit 1
fi

log_message "=== RENOVACIÓN COMPLETADA para $DOMAIN ==="
EOF

    sed -i "s/DOMAIN_PLACEHOLDER/$domain/g" "$script_file"
    sed -i "s|WEBROOT_PLACEHOLDER|$webroot|g" "$script_file"
    sed -i "s/MAIN_DOMAIN_PLACEHOLDER/$main_domain/g" "$script_file"
    sed -i "s/EMAIL_PLACEHOLDER/$EMAIL_ADMIN/g" "$script_file"
    sed -i "s/DATE_PLACEHOLDER/$(date '+%Y-%m-%d %H:%M:%S')/g" "$script_file"

    if [[ ! "$domain" =~ ^www\. ]]; then
        if grep -q "server_name.*www\.$domain" "$NGINX_CONFIG" 2>/dev/null; then
            sed -i "s/\${EXTRA_DOMAINS:-}/-d www.$domain \\\\/" "$script_file"
        else
            sed -i "/\${EXTRA_DOMAINS:-}/d" "$script_file"
        fi
    else
        sed -i "/\${EXTRA_DOMAINS:-}/d" "$script_file"
    fi

    chmod +x "$script_file"
    echo "$script_file"
}

setup_cron_job() {
    local script_path=$1
    local domain=$2

    random_day=$(( (RANDOM % 28) + 1 ))
    random_hour=$(( (RANDOM % 4) + 1 ))
    random_minute=$(( RANDOM % 60 ))

    cron_line="$random_minute $random_hour $random_day */2 * $script_path"

    if ! crontab -l 2>/dev/null | grep -q "$script_path"; then
        (crontab -l 2>/dev/null; echo "$cron_line") | crontab -
        log_message "Cron añadido para $domain: $cron_line"
    else
        log_message "Cron ya existe para $domain"
    fi
}

generate_well_known_report() {
    local report_file="/root/well-known-status.txt"

    log_message "${GREEN}Generando reporte de estado .well-known...${NC}"

    echo "=== REPORTE DE ESTADO .well-known ===" > "$report_file"
    echo "Fecha: $(date)" >> "$report_file"
    echo "" >> "$report_file"

    while read domain; do
        [ -z "$domain" ] && continue

        status=$(check_well_known_exists "$domain" "$NGINX_CONFIG")
        webroot=$(extract_webroot_from_http_block "$domain" "$NGINX_CONFIG")

        echo "Dominio: $domain" >> "$report_file"
        echo "  Estado .well-known en Nginx: $status" >> "$report_file"
        echo "  Webroot: ${webroot:-No encontrado}" >> "$report_file"

        if [ -n "$webroot" ] && [ -d "$webroot/.well-known/acme-challenge" ]; then
            echo "  Directorio físico: ✓ Existe" >> "$report_file"
        elif [ -n "$webroot" ]; then
            echo "  Directorio físico: ✗ No existe" >> "$report_file"
        fi
        echo "" >> "$report_file"
    done < /tmp/domains_from_nginx.txt

    log_message "Reporte generado: $report_file"
    cat "$report_file"
}

generate_monitoring_script() {
    cat > /root/ssl-expiry-monitor.sh << 'EOF'
#!/bin/bash
# Monitor de expiración SSL con verificación .well-known

MONITOR_LOG="/var/log/ssl-expiry-monitor.log"
ALERT_EMAIL="admin@yoisar.com"
WARNING_DAYS=30
CRITICAL_DAYS=14

echo "[$(date)] === VERIFICACIÓN SSL ===" >> "$MONITOR_LOG"

for cert in /etc/letsencrypt/live/*/fullchain.pem; do
    if [ -f "$cert" ]; then
        domain=$(echo "$cert" | cut -d/ -f6)
        expiry_date=$(openssl x509 -in "$cert" -noout -enddate | cut -d= -f2)
        days_left=$(( ($(date -d "$expiry_date" +%s) - $(date +%s)) / 86400 ))

        if [ $days_left -lt $CRITICAL_DAYS ]; then
            echo "🔴 CRÍTICO: $domain expira en $days_left días ($expiry_date)" | tee -a "$MONITOR_LOG"
        elif [ $days_left -lt $WARNING_DAYS ]; then
            echo "🟡 ADVERTENCIA: $domain expira en $days_left días ($expiry_date)" | tee -a "$MONITOR_LOG"
        else
            echo "🟢 OK: $domain - $days_left días restantes" >> "$MONITOR_LOG"
        fi
    fi
done

echo "" >> "$MONITOR_LOG"
echo "=== VERIFICACIÓN .well-known ===" >> "$MONITOR_LOG"
grep -c "location.*\.well-known" /www/server/nginx/conf/nginx.conf >> "$MONITOR_LOG" 2>/dev/null || echo "0" >> "$MONITOR_LOG"
echo "Bloques .well-known en nginx.conf revisados." >> "$MONITOR_LOG"
EOF

    chmod +x /root/ssl-expiry-monitor.sh

    if ! crontab -l 2>/dev/null | grep -q "ssl-expiry-monitor.sh"; then
        (crontab -l 2>/dev/null; echo "0 8 * * * /root/ssl-expiry-monitor.sh") | crontab -
        log_message "Monitor de expiración configurado"
    fi
}

main() {
    log_message "${GREEN}=== SSL AUTO-RENEW MANAGER CON VERIFICACIÓN .well-known ===${NC}"

    mkdir -p "$BACKUP_DIR"
    cp "$NGINX_CONFIG" "$BACKUP_DIR/nginx.conf.original.$(date +%Y%m%d_%H%M%S)"

    analyze_nginx_config

    if [ ! -f /tmp/domains_from_nginx.txt ] || [ ! -s /tmp/domains_from_nginx.txt ]; then
        log_message "${RED}Error: No se encontraron dominios en configuración HTTP${NC}"
        exit 1
    fi

    declare -A processed_domains
    declare -A domain_webroots

    log_message "${BLUE}=== VERIFICANDO CONFIGURACIÓN .well-known PARA CADA DOMINIO ===${NC}"

    while read domain; do
        domain=$(echo "$domain" | xargs)
        [ -z "$domain" ] && continue
        [ -n "${processed_domains[$domain]}" ] && continue
        processed_domains[$domain]=1

        webroot=$(process_domain_well_known "$domain")
        domain_webroots[$domain]=$webroot

    done < /tmp/domains_from_nginx.txt

    log_message "${BLUE}=== GENERANDO SCRIPTS DE RENOVACIÓN ===${NC}"

    unset processed_domains
    declare -A processed_domains

    while read domain; do
        domain=$(echo "$domain" | xargs)
        [ -z "$domain" ] && continue
        [ -n "${processed_domains[$domain]}" ] && continue
        processed_domains[$domain]=1

        webroot="${domain_webroots[$domain]}"
        main_domain=$(echo "$domain" | grep -oP '[^.]+\.[^.]+$')

        existing_cert="$CERT_DIR/$main_domain/fullchain.pem"
        days_left=$(check_expiry "$existing_cert")

        if [ $days_left -gt 0 ]; then
            log_message "Certificado para $domain expira en $days_left días"
        else
            log_message "${YELLOW}Certificado no encontrado o nuevo para $domain${NC}"
        fi

        script_file=$(generate_renewal_script "$domain" "$webroot" "$main_domain")
        log_message "Script generado: $script_file"

        setup_cron_job "$script_file" "$domain"

    done < /tmp/domains_from_nginx.txt

    generate_well_known_report

    log_message "Recargando Nginx para aplicar cambios..."
    test_and_reload_nginx

    generate_monitoring_script

    log_message "${GREEN}=== PROCESO COMPLETADO EXITOSAMENTE ===${NC}"
    log_message "📁 Backups guardados en: $BACKUP_DIR"
    log_message "📄 Logs: $LOG_FILE"
    log_message "📊 Reporte .well-known: /root/well-known-status.txt"
    log_message "🔧 Scripts individuales: /root/renew-*-ssl.sh"
    log_message "📅 Revisa crontab: crontab -l"
}

# Ejecutar main
main
