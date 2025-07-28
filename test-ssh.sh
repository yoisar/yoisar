#!/bin/bash

# Script para testear la conexión SSH al servidor
echo "🔌 Testeando conexión SSH..."

# Configuración del servidor
SERVER_HOST="92.112.178.62"
SERVER_PORT="2223"
APP_DIR="/www/wwwroot/yoisar.com/app"
SSH_KEY="~/.ssh/yoisar_deploy"

# Solicitar usuario o usar root por defecto
if [ -z "$1" ]; then
    SERVER_USER="root"
    echo "Usando usuario por defecto: root"
else
    SERVER_USER="$1"
fi

echo "🔧 Configuración:"
echo "   Host: $SERVER_HOST"
echo "   Puerto: $SERVER_PORT"
echo "   Usuario: $SERVER_USER"
echo "   Directorio app: $APP_DIR"
echo ""

# Testear conexión SSH
echo "🔍 Testeando conexión SSH..."
if ssh -i $SSH_KEY -p $SERVER_PORT -o ConnectTimeout=10 -o BatchMode=yes $SERVER_USER@$SERVER_HOST "echo 'Conexión SSH exitosa'" 2>/dev/null; then
    echo "✅ Conexión SSH: OK"
else
    echo "❌ Conexión SSH: FALLÓ"
    echo "   Verifica que:"
    echo "   - La clave SSH esté en: $SSH_KEY"
    echo "   - El usuario tenga permisos SSH"
    echo "   - El firewall permita conexiones al puerto $SERVER_PORT"
    exit 1
fi

# Verificar directorio de la aplicación
echo "📁 Verificando directorio de aplicación..."
if ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "[ -d '$APP_DIR' ]"; then
    echo "✅ Directorio app: OK ($APP_DIR)"
else
    echo "❌ Directorio app: NO EXISTE ($APP_DIR)"
    echo "   Crea el directorio y clona el repositorio:"
    echo "   mkdir -p /www/wwwroot/yoisar.com"
    echo "   cd /www/wwwroot/yoisar.com"
    echo "   git clone <URL_REPO> app"
    exit 1
fi

# Verificar archivos de deploy
echo "🔧 Verificando archivos de deploy..."
if ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "[ -f '$APP_DIR/deploy-prod.sh' ]"; then
    echo "✅ Script deploy-prod.sh: OK"
else
    echo "❌ Script deploy-prod.sh: NO EXISTE"
    exit 1
fi

# Verificar Docker
echo "🐳 Verificando Docker..."
if ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "docker --version" 2>/dev/null; then
    echo "✅ Docker: OK"
else
    echo "❌ Docker: NO INSTALADO"
    exit 1
fi

# Verificar Docker Compose
echo "🐳 Verificando Docker Compose..."
if ssh -i $SSH_KEY -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "docker-compose --version" 2>/dev/null; then
    echo "✅ Docker Compose: OK"
else
    echo "❌ Docker Compose: NO INSTALADO"
    exit 1
fi

echo ""
echo "🎉 Todas las verificaciones pasaron!"
echo "🚀 El servidor está listo para el deploy automático"
