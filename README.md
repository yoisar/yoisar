# Proyecto YOISAR

Este proyecto es una aplicación fullstack que combina un frontend en React y un backend en Laravel, diseñada para mostrar la presentación personal de Yassel Omar Izquierdo Souchay y sus proyectos actuales.

## Estructura del Proyecto

```
proyecto-yoisar/
├── backend/        -> Laravel (Backend)
│   ├── app/
│   ├── routes/
│   ├── .env
│   └── Dockerfile
├── frontend/       -> React (Frontend)
│   ├── src/
│   ├── public/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Requisitos Previos

- Docker y Docker Compose instalados.
- Node.js y npm instalados (opcional para desarrollo local del frontend).
- Composer instalado (opcional para desarrollo local del backend).

## Configuración

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd proyecto-yoisar
   ```

2. Configura las variables de entorno:
   - Copia el archivo `.env.example` en `backend/` y renómbralo a `.env`.
   - Configura las credenciales de la base de datos en el archivo `.env`.

3. Construye y levanta los servicios con Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Servicios

- **Frontend (React):** Disponible en [http://localhost:3000](http://localhost:3000).
- **Backend (Laravel):** Disponible en [http://localhost:9000](http://localhost:9000).
- **Base de Datos (MySQL):** Disponible en el puerto `3306`.

## Scripts Útiles

### Frontend

- Instalar dependencias:
  ```bash
  cd frontend
  npm install
  ```
- Ejecutar en modo desarrollo:
  ```bash
  npm start
  ```
- Construir para producción:
  ```bash
  npm run build
  ```

### Backend

- Instalar dependencias:
  ```bash
  cd backend
  composer install
  ```
- Generar clave de aplicación:
  ```bash
  php artisan key:generate
  ```
- Migrar base de datos:
  ```bash
  php artisan migrate
  ```

## Tecnologías Utilizadas

- **Frontend:** React, TailwindCSS.
- **Backend:** Laravel, PHP 8.1.
- **Base de Datos:** MySQL.
- **Contenedores:** Docker, Docker Compose.

## Contacto

Para más información o consultas, puedes escribir a [contacto@zoomtecnologias.com](mailto:contacto@zoomtecnologias.com).
