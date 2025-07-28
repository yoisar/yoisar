#!/bin/bash

# Script para sincronizar el repositorio en el servidor
echo "🔄 Sincronizando repositorio..."

# Verificar si estamos en el directorio correcto
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ Error: No se encontró docker-compose.yml"
    echo "   Asegúrate de estar en el directorio: /www/wwwroot/yoisar.com/app"
    exit 1
fi

# Verificar estado del repositorio Git
echo "📋 Estado actual del repositorio:"
git status --porcelain

# Hacer stash de cambios locales si existen
if [ -n "$(git status --porcelain)" ]; then
    echo "💾 Guardando cambios locales..."
    git stash
fi

# Hacer fetch y pull
echo "📥 Actualizando repositorio..."
git fetch origin
git pull origin main

if [ $? -eq 0 ]; then
    echo "✅ Repositorio actualizado exitosamente"
else
    echo "❌ Error al actualizar repositorio"
    exit 1
fi

# Mostrar últimos commits
echo "📋 Últimos commits:"
git log --oneline -5

echo "🎉 Sincronización completada!"
