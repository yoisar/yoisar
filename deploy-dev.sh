#!/bin/bash

# Script de deploy para desarrollo
echo "🚀 Iniciando deploy de desarrollo..."

# Navegar al directorio de la aplicación
cd /www/wwwroot/yoisar.com/app

# Hacer pull de los cambios más recientes
echo "📥 Descargando cambios del repositorio..."
git pull origin main

# Detener contenedores existentes
echo "⏹️  Deteniendo contenedores..."
docker-compose down

# Reconstruir y levantar contenedores
echo "🔧 Reconstruyendo y levantando contenedores..."
docker-compose up -d --build

# Verificar estado
echo "✅ Verificando estado de contenedores..."
docker-compose ps

echo "🎉 Deploy de desarrollo completado!"
echo "🌐 La aplicación está disponible en: http://localhost:8080"
