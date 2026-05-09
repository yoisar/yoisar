# Renovar SSL de yoisar.com en el VPS con aaPanel

**Fecha de creación:** 9 de mayo de 2026  
**Próxima expiración:** 7 de agosto de 2026  
**VPS:** `92.112.178.62` · Puerto SSH: `2223` · Clave: `~/.ssh/yoisar_deploy`

---

## Por qué no renueva solo

aaPanel guarda los certificados en `/www/server/panel/vhost/cert/yoisar.com/` (fuera de `/etc/letsencrypt/`). El cert fue emitido originalmente desde el panel web, por lo que **certbot no lo conoce** y su auto-renew no lo toca.

Además, el bloque HTTP del dominio hacía `return 301` directo, bloqueando el ACME challenge de Let's Encrypt. **Esto ya está corregido** en el [nginx.cfg](../nginx.cfg).

---

## Pasos para la próxima renovación

### 1. Conectar al VPS

```bash
ssh -p 2223 -i ~/.ssh/yoisar_deploy root@92.112.178.62
```

### 2. Verificar fecha de expiración

```bash
openssl x509 -in /www/server/panel/vhost/cert/yoisar.com/fullchain.pem -noout -dates
```

### 3. Comprobar que el nginx.conf tiene la excepción `.well-known`

El bloque HTTP de `yoisar.com` en `/www/server/nginx/conf/nginx.conf` debe verse así:

```nginx
server {
    listen 80;
    server_name yoisar.com www.yoisar.com;
    # Excepción para ACME challenge (Let's Encrypt / certbot)
    location ^~ /.well-known/acme-challenge/ {
        root /www/wwwroot/yoisar.com;
        allow all;
    }
    location / {
        return 301 https://$host$request_uri;
    }
}
```

Si no lo tiene, editar y recargar:

```bash
vi /www/server/nginx/conf/nginx.conf
nginx -t && kill -HUP $(cat /www/server/nginx/logs/nginx.pid)
```

> **Importante:** Si se sube un nuevo `nginx.cfg` desde el repo local, también actualizar el archivo en el VPS con `scp` antes de renovar.

### 4. Solicitar nuevo certificado con certbot

```bash
certbot certonly --webroot \
  -w /www/wwwroot/yoisar.com \
  -d yoisar.com -d www.yoisar.com \
  --non-interactive --agree-tos \
  --email admin@yoisar.com \
  --force-renewal
```

Debe terminar con:
```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/yoisar.com/fullchain.pem
```

### 5. Copiar el nuevo cert al directorio de aaPanel

```bash
cp /etc/letsencrypt/live/yoisar.com/fullchain.pem \
   /www/server/panel/vhost/cert/yoisar.com/fullchain.pem

cp /etc/letsencrypt/live/yoisar.com/privkey.pem \
   /www/server/panel/vhost/cert/yoisar.com/privkey.pem
```

### 6. Recargar nginx

```bash
nginx -t && kill -HUP $(cat /www/server/nginx/logs/nginx.pid)
```

### 7. Verificar

```bash
# HTTP status debe ser 200
curl -sI https://www.yoisar.com | head -3

# Fecha de expiración debe ser ~90 días desde hoy
openssl x509 -in /www/server/panel/vhost/cert/yoisar.com/fullchain.pem -noout -dates
```

---

## Automatización (opcional)

Crear el script `/root/renew-yoisar-ssl.sh` en el VPS:

```bash
#!/bin/bash
set -e

certbot certonly --webroot \
  -w /www/wwwroot/yoisar.com \
  -d yoisar.com -d www.yoisar.com \
  --non-interactive --agree-tos \
  --email admin@yoisar.com \
  --force-renewal

cp /etc/letsencrypt/live/yoisar.com/fullchain.pem \
   /www/server/panel/vhost/cert/yoisar.com/fullchain.pem

cp /etc/letsencrypt/live/yoisar.com/privkey.pem \
   /www/server/panel/vhost/cert/yoisar.com/privkey.pem

kill -HUP $(cat /www/server/nginx/logs/nginx.pid)

echo "Cert renovado: $(openssl x509 -in /www/server/panel/vhost/cert/yoisar.com/fullchain.pem -noout -enddate)"
```

Hacerlo ejecutable y añadirlo al cron (corre el 1 de cada 2 meses a las 3 AM):

```bash
chmod +x /root/renew-yoisar-ssl.sh

# Editar crontab
crontab -e
# Añadir esta línea:
0 3 1 */2 * /root/renew-yoisar-ssl.sh >> /var/log/renew-yoisar-ssl.log 2>&1
```

---

## Rutas clave en el VPS

| Recurso | Ruta |
|---|---|
| Cert activo (aaPanel/nginx) | `/www/server/panel/vhost/cert/yoisar.com/` |
| Cert certbot (fuente) | `/etc/letsencrypt/live/yoisar.com/` |
| nginx.conf principal | `/www/server/nginx/conf/nginx.conf` |
| Vhost aaPanel | `/www/server/panel/vhost/nginx/yoisar.com.conf` |
| PID de nginx | `/www/server/nginx/logs/nginx.pid` |
| Webroot del dominio | `/www/wwwroot/yoisar.com` |
| Log de acceso | `/www/wwwlogs/yoisar_access.log` |
