#!/bin/bash

# Script para verificar el estado del deploy y la aplicación
echo "🔍 Verificando estado del deploy..."

# Configuración
SERVER_HOST="92.112.178.62"
SERVER_PORT="2223"
APP_URL="https://yoisar.com"
LOCAL_URL="http://localhost:8090"
SSH_KEY="~/.ssh/yoisar_deploy"

# Solicitar usuario o usar root por defecto
if [ -z "$1" ]; then
    SERVER_USER="root"
    echo "Usando usuario por defecto: root"
else
    SERVER_USER="$1"
fi

echo "🔧 Configuración:"
echo "   Server: $SERVER_USER@$SERVER_HOST:$SERVER_PORT"
echo "   App URL: $APP_URL"
echo ""

# 1. Verificar conexión SSH
echo "🔌 1. Verificando conexión SSH..."
if ssh -i $SSH_KEY -p $SERVER_PORT -o ConnectTimeout=10 -o BatchMode=yes $SERVER_USER@$SERVER_HOST "echo 'SSH OK'" 2>/dev/null; then
    echo "✅ Conexión SSH: OK"
else
    echo "❌ Conexión SSH: FALLÓ"
    echo "   Verifica que la clave SSH esté configurada: $SSH_KEY"
    exit 1
fi

# 2. Verificar estado de contenedores
echo "🐳 2. Verificando contenedores Docker..."
ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "cd /www/wwwroot/yoisar.com/app && docker-compose -f docker-compose.prod.yml ps"

# 3. Verificar logs del frontend
echo "📋 3. Últimos logs del frontend:"
ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "cd /www/wwwroot/yoisar.com/app && docker-compose -f docker-compose.prod.yml logs yois-frontend-prod --tail=10"

# 4. Verificar que el puerto esté respondiendo
echo "🌐 4. Verificando puerto 8090..."
if ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "curl -f -s http://localhost:8090" > /dev/null; then
    echo "✅ Puerto 8090: Respondiendo"
else
    echo "❌ Puerto 8090: No responde"
fi

# 5. Verificar aplicación web
echo "🌍 5. Verificando aplicación web..."
if curl -f -s -I $APP_URL | grep -q "200 OK"; then
    echo "✅ $APP_URL: Accesible"
else
    echo "❌ $APP_URL: No accesible"
fi

# 6. Mostrar información del último deploy
echo "📅 6. Información del último deploy:"
ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "cd /www/wwwroot/yoisar.com/app && git log --oneline -3"

echo ""
echo "🎯 Para volver a hacer deploy manualmente:"
echo "   ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST"
echo "   cd /www/wwwroot/yoisar.com/app"
echo "   ./deploy-prod.sh"
