#!/bin/bash

# Script de deploy para producción
echo "🚀 Iniciando deploy de producción..."

# Navegar al directorio de la aplicación
cd /www/wwwroot/yoisar.com/app

# Verificar que estamos en el directorio correcto
if [ ! -f "docker-compose.prod.yml" ]; then
    echo "❌ Error: No se encontró docker-compose.prod.yml"
    echo "   Verifica que estés en el directorio correcto: /www/wwwroot/yoisar.com/app"
    exit 1
fi

# Hacer pull de los cambios más recientes
echo "📥 Descargando cambios del repositorio..."
git pull origin main

# Verificar si hay cambios
if [ $? -eq 0 ]; then
    echo "✅ Cambios descargados exitosamente"
else
    echo "⚠️  Error al descargar cambios, continuando con el deploy..."
fi

# Detener y eliminar contenedores existentes. Se fuerza "rm -f" además de
# "down" porque docker-compose v1 puede dejar contenedores detenidos sin
# eliminar tras un "down", y al reconstruir sobre ellos falla con
# "KeyError: 'ContainerConfig'" (no se usan --volumes para no perder los
# datos de MySQL).
echo "⏹️  Deteniendo contenedores de producción..."
docker-compose -f docker-compose.prod.yml down --remove-orphans
docker-compose -f docker-compose.prod.yml rm -f

# Reconstruir y levantar contenedores de producción
echo "🔧 Reconstruyendo y levantando contenedores de producción..."
docker-compose -f docker-compose.prod.yml up -d --build

# Verificar que el build fue exitoso
if [ $? -eq 0 ]; then
    echo "✅ Contenedores levantados exitosamente"
else
    echo "❌ Error al levantar contenedores"
    exit 1
fi

# Esperar un momento para que los contenedores se inicialicen
echo "⏳ Esperando inicialización de contenedores..."
sleep 10

# Limpiar imágenes no utilizadas
echo "🧹 Limpiando imágenes no utilizadas..."
docker image prune -f

# Verificar estado
echo "✅ Verificando estado de contenedores..."
docker-compose -f docker-compose.prod.yml ps

# Verificar que el frontend esté respondiendo
echo "🔍 Verificando que el frontend esté respondiendo..."
if curl -f -s http://localhost:8090 > /dev/null; then
    echo "✅ Frontend respondiendo correctamente en puerto 8090"
else
    echo "⚠️  Frontend no responde en puerto 8090"
fi

# Mostrar logs recientes
echo "📋 Últimos logs del frontend:"
docker-compose -f docker-compose.prod.yml logs yois-frontend-prod --tail=20

echo "🎉 Deploy de producción completado!"
echo "🌐 La aplicación está disponible en: https://yoisar.com"
