````markdown
# YOIS Portfolio - Deploy Automático

Esta es una aplicación React/Laravel para el portfolio personal de Yois, configurada con deploy automático a través de GitHub Actions.

## ✅ Estado Actual del Deployment (Actualizado: 17 Sept 2025)

### Contenedores en Producción:
- 🐳 **yois_frontend_prod**: ✅ Running en puerto 8090 → 80
- 🐳 **yois_backend**: ✅ Running en puerto 6001 → 9000  
- 🐳 **yois_mysql**: ✅ Running en puerto 6006 → 3306

### URLs y Acceso:
- 🌐 **URL Pública**: https://yoisar.com
- 🔧 **URL Interna**: http://localhost:8090 (en servidor)
- 📊 **Estado**: ✅ 200 OK - Funcionando correctamente

### Características Desplegadas:
- ✅ Cálculo dinámico de experiencia (desde 2001)
- ✅ 3 Proyectos con enlaces funcionales:
  - CuotaPlan → https://cuotaplan.com/index
  - Venta Rifas → https://ventarifas.com  
  - AdminBarrios → https://adminbarrio.com
- ✅ Tecnologías: React (frontend) + Laravel (backend)
- ✅ Google Analytics configurado (G-5723RCL09L)
- ✅ Responsive design con Bootstrap

## 🚀 Configuración del Deploy Automático

### 1. Configurar Secrets en GitHub

Para que el deploy automático funcione, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

Ve a: `Settings > Secrets and variables > Actions > Repository secrets`

**Secrets requeridos:**
- `SSH_PRIVATE_KEY`: Tu clave SSH privada (formato ed25519) - Copia el contenido completo de `~/.ssh/yoisar_deploy`
- `SERVER_USER`: Usuario SSH para conectar al servidor - Usar: `root`

**Configuración SSH:**
- Host: `92.112.178.62`
- Puerto: `2223`
- Usuario: `root`
- Tipo de clave: `ed25519`
- Archivo de clave: `~/.ssh/yoisar_deploy`

**Generar clave SSH (si no tienes una):**
```bash
# Generar nueva clave ed25519
ssh-keygen -t ed25519 -C "deploy@yoisar.com"

# Copiar clave pública al servidor
ssh-copy-id -p 2223 -i ~/.ssh/id_ed25519.pub usuario@92.112.178.62

# Mostrar clave privada para copiar a GitHub Secrets
cat ~/.ssh/id_ed25519
```

### 2. Configuración del Servidor

✅ **Configuración Actual Verificada:**
- ✅ Docker y Docker Compose instalados
- ✅ Git configurado y funcionando
- ✅ Acceso SSH con clave pública/privada
- ✅ Repositorio clonado en: `/www/wwwroot/yoisar.com/app`
- ✅ Puerto 8090 disponible y funcional
- ✅ Nginx configurado como proxy reverso

### 3. Estructura del Proyecto

```
/www/wwwroot/yoisar.com/app/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── frontend/                       # Aplicación React
│   ├── Dockerfile                 # Para desarrollo
│   ├── Dockerfile.prod           # Para producción (optimizado)
│   ├── nginx.conf               # Configuración nginx para producción
│   ├── src/App.js              # Componente principal
│   ├── package.json            # Dependencias React
│   └── build/                  # Build de producción
├── backend/                      # Backend Laravel
│   ├── Dockerfile              # Contenedor PHP-FPM
│   ├── composer.json          # Dependencias Laravel
│   └── routes/web.php         # Rutas API
├── docker-compose.yml           # Para desarrollo  
├── docker-compose.prod.yml      # ✅ Para producción (ACTIVO)
├── deploy-dev.sh               # Script deploy desarrollo
├── deploy-prod.sh              # ✅ Script deploy producción (USADO)
├── sync-repo.sh               # Script sincronización repositorio
├── test-ssh.sh                # Script test conexión SSH
└── nginx.cfg                   # Configuración nginx del servidor
```

## 🔧 Scripts de Deploy

### Testear Conexión SSH
```bash
./test-ssh.sh      # Usa root por defecto
./test-ssh.sh root # Especificar usuario manualmente
```
- ✅ Verifica la conexión SSH al servidor
- ✅ Comprueba que Docker esté instalado
- ✅ Valida que el directorio de la app exista

### Verificar Estado del Deploy
```bash
./check-deploy.sh      # Usa root por defecto
./check-deploy.sh root # Especificar usuario manualmente
```
- ✅ Verifica el estado completo del deploy
- ✅ Muestra logs de contenedores
- ✅ Comprueba que la aplicación responda

### Sincronizar Repositorio
```bash
./sync-repo.sh
```
- Solo actualiza el código desde Git
- Útil para verificar cambios antes del deploy

### Deploy Manual de Desarrollo
```bash
./deploy-dev.sh
```
- Usa `docker-compose.yml`
- Expone puerto 8080
- Incluye hot-reload para desarrollo

### Deploy Manual de Producción ✅ ACTIVO
```bash
./deploy-prod.sh
```
- ✅ Usa `docker-compose.prod.yml` 
- ✅ Build optimizado con nginx
- ✅ Sin hot-reload, optimizado para performance
- ✅ Incluye validaciones y verificaciones
- ✅ Limpieza automática de imágenes Docker
- ✅ Verificación de respuesta HTTP

## 🌐 Configuración de Nginx

El archivo `nginx.cfg` está configurado para:
- **yoisar.com** y **www.yoisar.com** → Puerto 8090 ✅
- SSL/HTTPS configurado ✅
- Proxy pass hacia el contenedor Docker ✅

## 📋 Cómo Funciona el Deploy Automático

1. **Push a main**: Cada vez que haces commit y push a la rama `main`
2. **GitHub Actions**: Se ejecuta automáticamente el workflow
3. **Tests**: ✅ Verifica que todos los tests pasen
4. **Build**: ✅ Compila la aplicación React
5. **Deploy**: ✅ Se conecta por SSH al servidor y ejecuta `deploy-prod.sh`
6. **Verificación**: ✅ Muestra logs para confirmar funcionamiento

## � Troubleshooting

### ✅ Problemas Resueltos:
- **Tests corregidos**: Problemas con múltiples elementos solucionados
- **Build optimizado**: Aplicación compila sin errores
- **Contenedores funcionando**: Todos los servicios activos
- **HTTP 200**: Aplicación responde correctamente

### Error de conexión SSH
- Verifica que los secrets estén configurados correctamente
- Comprueba que la clave SSH tenga los permisos correctos
- Asegurate de que el usuario tenga acceso al directorio del proyecto

### Contenedor no inicia
```bash
# Revisar logs
docker-compose -f docker-compose.prod.yml logs

# Verificar estado
docker-compose -f docker-compose.prod.yml ps

# Restart si necesario
docker-compose -f docker-compose.prod.yml restart
```

## 📝 Notas Importantes

- ✅ El deploy se ejecuta **solo en la rama main**
- ✅ La aplicación es una SPA con backend Laravel
- ✅ Los assets se cachean para mejor performance
- ✅ El contenedor de producción usa nginx alpine
- ✅ Se limpia automáticamente las imágenes Docker no utilizadas
- ✅ Tests automatizados incluyen AdminBarrios y nuevas features

## 🎯 Flujo de Trabajo Actual

**Funcionando correctamente:**
1. ✅ Hacer cambios en el código
2. ✅ Tests locales pasan
3. ✅ Commit y push a main
4. ✅ GitHub Actions ejecuta deploy automático
5. ✅ La aplicación se actualiza en https://yoisar.com

## 📊 Logs de Deploy Exitoso (17 Sept 2025)

```bash
# Estado de contenedores
$ docker-compose -f docker-compose.prod.yml ps
yois_backend         Up    0.0.0.0:6001->9000/tcp
yois_frontend_prod   Up    0.0.0.0:8090->80/tcp  
yois_mysql          Up    0.0.0.0:6006->3306/tcp

# Verificación HTTP
$ curl -s -o /dev/null -w '%{http_code}' http://localhost:8090
200

# Evidencia de tráfico real
yois_frontend_prod | 172.27.0.1 - - [17/Sep/2025:20:08:00 +0000] 
"GET / HTTP/1.0" 200 550 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"
```

✅ **Estado: DEPLOYMENT COMPLETAMENTE FUNCIONAL**

````

### 1. Configurar Secrets en GitHub

Para que el deploy automático funcione, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

Ve a: `Settings > Secrets and variables > Actions > Repository secrets`

**Secrets requeridos:**
- `SSH_PRIVATE_KEY`: Tu clave SSH privada (formato ed25519) - Copia el contenido completo de `~/.ssh/yoisar_deploy`
- `SERVER_USER`: Usuario SSH para conectar al servidor - Usar: `root`

**Configuración SSH:**
- Host: `92.112.178.62`
- Puerto: `2223`
- Usuario: `root`
- Tipo de clave: `ed25519`
- Archivo de clave: `~/.ssh/yoisar_deploy`

**Generar clave SSH (si no tienes una):**
```bash
# Generar nueva clave ed25519
ssh-keygen -t ed25519 -C "deploy@yoisar.com"

# Copiar clave pública al servidor
ssh-copy-id -p 2223 -i ~/.ssh/id_ed25519.pub usuario@92.112.178.62

# Mostrar clave privada para copiar a GitHub Secrets
cat ~/.ssh/id_ed25519
```

### 2. Configuración del Servidor

Asegúrate de que tu servidor tenga:
- Docker y Docker Compose instalados
- Git configurado
- Acceso SSH con clave pública/privada
- El repositorio clonado en: `/www/wwwroot/yoisar.com/app`

### 3. Estructura del Proyecto

```
/www/wwwroot/yoisar.com/app/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── frontend/                       # Aplicación React
│   ├── Dockerfile                 # Para desarrollo
│   ├── Dockerfile.prod           # Para producción (optimizado)
│   ├── nginx.conf               # Configuración nginx para producción
│   └── src/
├── backend/                      # Backend Laravel (opcional)
├── docker-compose.yml           # Para desarrollo
├── docker-compose.prod.yml      # Para producción
├── deploy-dev.sh               # Script deploy desarrollo
├── deploy-prod.sh              # Script deploy producción
├── sync-repo.sh               # Script sincronización repositorio
├── test-ssh.sh                # Script test conexión SSH
└── nginx.cfg                   # Configuración nginx del servidor
```

## 🔧 Scripts de Deploy

### Testear Conexión SSH
```bash
./test-ssh.sh      # Usa root por defecto
./test-ssh.sh root # Especificar usuario manualmente
```
- Verifica la conexión SSH al servidor
- Comprueba que Docker esté instalado
- Valida que el directorio de la app exista

### Verificar Estado del Deploy
```bash
./check-deploy.sh      # Usa root por defecto
./check-deploy.sh root # Especificar usuario manualmente
```
- Verifica el estado completo del deploy
- Muestra logs de contenedores
- Comprueba que la aplicación responda

### Sincronizar Repositorio
```bash
./sync-repo.sh
```
- Solo actualiza el código desde Git
- Útil para verificar cambios antes del deploy

### Deploy Manual de Desarrollo
```bash
./deploy-dev.sh
```
- Usa `docker-compose.yml`
- Expone puerto 8080
- Incluye hot-reload para desarrollo

### Deploy Manual de Producción
```bash
./deploy-prod.sh
```
- Usa `docker-compose.prod.yml`
- Build optimizado con nginx
- Sin hot-reload, optimizado para performance
- Incluye validaciones y verificaciones

## 🌐 Configuración de Nginx

El archivo `nginx.cfg` ya está configurado para:
- **yoisar.com** y **www.yoisar.com** → Puerto 8080
- SSL/HTTPS configurado
- Proxy pass hacia el contenedor Docker

## 📋 Cómo Funciona el Deploy Automático

1. **Push a main**: Cada vez que haces commit y push a la rama `main`
2. **GitHub Actions**: Se ejecuta automáticamente el workflow
3. **Build Test**: Verifica que la aplicación se compile correctamente
4. **Deploy**: Se conecta por SSH al servidor y ejecuta el script de producción
5. **Verificación**: Muestra logs para confirmar que todo está funcionando

## 🐛 Troubleshooting

### Error: "react-scripts: not found"
- Asegurate de que `react-scripts` esté en las dependencias del package.json
- Ejecuta `npm install` en la carpeta frontend

### Error de conexión SSH
- Verifica que los secrets estén configurados correctamente
- Comprueba que la clave SSH tenga los permisos correctos
- Asegurate de que el usuario tenga acceso al directorio del proyecto

### Contenedor no inicia
- Revisa los logs: `docker-compose -f docker-compose.prod.yml logs`
- Verifica que el puerto 8080 no esté ocupado
- Comprueba que Docker tenga suficiente espacio en disco

## 📝 Notas Importantes

- El deploy se ejecuta **solo en la rama main**
- La aplicación es una SPA (Single Page Application) simple
- Los assets se cachean por 1 año para mejor performance
- El contenedor de producción usa nginx alpine para menor tamaño
- Se limpia automáticamente las imágenes Docker no utilizadas

## 🎯 Próximos Pasos

Una vez configurado, el flujo será:
1. Hacer cambios en el código
2. Commit y push a main
3. GitHub Actions se encarga del resto
4. La aplicación se actualiza automáticamente en https://yoisar.com
