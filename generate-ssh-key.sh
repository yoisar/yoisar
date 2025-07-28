#!/bin/bash

# Script para generar clave SSH ed25519 y configurar acceso al servidor
echo "🔑 Generando clave SSH ed25519..."

# Generar nueva clave ed25519
echo "📝 Ingresa tu email para la clave SSH:"
read -p "Email: " email

ssh-keygen -t ed25519 -C "$email" -f ~/.ssh/yoisar_deploy

echo ""
echo "✅ Clave SSH generada exitosamente!"
echo ""

# Mostrar clave pública para copiar al servidor
echo "📋 CLAVE PÚBLICA (copiar al servidor):"
echo "----------------------------------------"
cat ~/.ssh/yoisar_deploy.pub
echo "----------------------------------------"
echo ""

# Mostrar clave privada para GitHub Secrets
echo "🔐 CLAVE PRIVADA (copiar a GitHub Secrets como SSH_PRIVATE_KEY):"
echo "----------------------------------------------------------------"
cat ~/.ssh/yoisar_deploy
echo "----------------------------------------------------------------"
echo ""

echo "📝 INSTRUCCIONES:"
echo "1. Copia la CLAVE PÚBLICA al servidor:"
echo "   ssh-copy-id -p 2223 -i ~/.ssh/yoisar_deploy.pub usuario@92.112.178.62"
echo ""
echo "2. O manualmente en el servidor:"
echo "   echo 'CLAVE_PUBLICA_AQUI' >> ~/.ssh/authorized_keys"
echo ""
echo "3. Copia la CLAVE PRIVADA completa a GitHub Secrets como SSH_PRIVATE_KEY"
echo "4. Configura SERVER_USER con tu usuario SSH"
echo ""
echo "5. Testear conexión:"
echo "   ssh -p 2223 -i ~/.ssh/yoisar_deploy usuario@92.112.178.62"
