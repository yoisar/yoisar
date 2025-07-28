# YOIS Portfolio - Deploy Automático

Esta es una aplicación React simple para el portfolio personal de Yois, configurada con deploy automático a través de GitHub Actions.

## 🚀 Configuración del Deploy Automático

### 1. Configurar Secrets en GitHub

Para que el deploy automático funcione, necesitas configurar los siguientes secrets en tu repositorio de GitHub:

Ve a: `Settings > Secrets and variables > Actions > Repository secrets`

**Secrets requeridos:**
- `SERVER_HOST`: La IP o dominio de tu servidor (ej: `tu-servidor.com`)
- `SERVER_USER`: Usuario SSH para conectar al servidor (ej: `root` o `yois`)
- `SERVER_SSH_KEY`: Tu clave SSH privada para conectar al servidor
- `SERVER_PORT`: Puerto SSH del servidor (opcional, por defecto es 22)

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
└── nginx.cfg                   # Configuración nginx del servidor
```

## 🔧 Scripts de Deploy

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
