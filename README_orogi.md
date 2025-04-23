# Proyecto YOISAR

Este proyecto es una aplicación fullstack que combina un frontend en React y un backend en Laravel. Está diseñado para mostrar la presentación personal de **Yassel Omar Izquierdo Souchay (YOIS)** y sus proyectos actuales.

## Tecnologías Utilizadas

- **Frontend:** React, TailwindCSS.
- **Backend:** Laravel, PHP 8.1.
- **Base de Datos:** MySQL.
- **Contenedores:** Docker, Docker Compose.

## Servicios

- **Frontend (React):** Disponible en [http://localhost:6000](http://localhost:6000).
- **Backend (Laravel):** Disponible en [http://localhost:6001](http://localhost:6001).
- **Base de Datos (MySQL):** Disponible en el puerto `3306`.

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

## Contacto

Para más información o consultas, puedes escribir a [me@yoisar.com](mailto:me@yoisar.com) o visitar [www.yoisar.com](https://www.yoisar.com/).
