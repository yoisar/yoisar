#!/bin/bash
# /root/check-well-known.sh
# Script rápido para verificar estado .well-known de todos los dominios

NGINX_CONFIG="/www/server/nginx/conf/nginx.conf"

echo "=== VERIFICACIÓN RÁPIDA .well-known ==="
echo ""

grep -B10 "server_name" "$NGINX_CONFIG" | awk '
/server {/ { in_block=1; block=""; has_80=0; has_well=0; domains="" }
in_block {
    block = block $0 "\n"
    if ($0 ~ /listen.*80/) has_80=1
    if ($0 ~ /server_name/) {
        match($0, /server_name[[:space:]]+(.*);/, arr)
        domains = arr[1]
    }
    if ($0 ~ /\.well-known\/acme-challenge/) has_well=1
    if ($0 == "}") {
        if (has_80 && domains != "") {
            status = has_well ? "✓ CONFIGURADO" : "✗ NO CONFIGURADO"
            printf "%-30s %s\n", domains, status
        }
        in_block=0
    }
}
'
