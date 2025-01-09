# Sistema de Reservación de Espacios

Este proyecto consiste en un sistema para gestionar la reservación de espacios dentro de una institución, como aulas, auditorios y laboratorios. El sistema incluye un backend desarrollado en Laravel y un frontend en Angular.

## Características

### Backend (Laravel)

El backend del sistema proporciona las siguientes funcionalidades:

- **CRUD de Usuarios:**
  - Registro y gestión de usuarios.

- **CRUD de Espacios:**
  - Administración de espacios incluyendo nombre, capacidad y disponibilidad.

- **CRUD de Reservaciones:**
  - Gestión de reservaciones, asociando un usuario, un espacio y un rango de fechas/horas.

- **Verificación de Disponibilidad:**
  - Endpoint que permite consultar la disponibilidad de los espacios en un horario específico.

- **Reglas de Negocio:**
  - Prevención de doble reservación en el mismo horario para un espacio.


    
### Frontend (Angular)

El frontend incluye las siguientes funcionalidades:

- **Página de Inicio:**
  - Información general sobre el sistema.
  - Calendario de disponibilidad de espacios.

<!-- Falto el desarollo
- **Formulario de Reservaciones:**
  - Permite a los usuarios seleccionar un espacio, una fecha y un horario para realizar una reservación.

- **Tablero de Usuario:**
  - Listado de reservaciones activas con opción de cancelarlas.
  - Calendario interactivo que muestra las reservaciones del usuario.
-->


## Tecnologías Utilizadas

- **Backend:** Laravel (PHP)
- **Frontend:** Angular


## Instalación y Configuración

### Backend (Laravel)
1. Clonar el repositorio.
2. Instalar dependencias con `composer install`.
3. Configurar el archivo `.env` con la conexión a la base de datos.
4. Ejecutar migraciones y seeders:
   ```bash
   php artisan migrate --seed
   ```
5. Iniciar el servidor de desarrollo:

   ```bash
   php artisan serve
   ```
6. Importar el archivo de la db
 
### Frontend (Angular)
1. Instalar dependencias con `npm install`.
2. Configurar el archivo `environment.ts` con la URL del backend.
3. Iniciar el servidor de desarrollo:
   ```bash
   ng serve
   ```

## Uso del Sistema

1. Acceder a la página de inicio para consultar la disponibilidad de espacios.
<!-- Falto el desarrollo del front
2. Registrar o iniciar sesión como usuario.
3. Realizar una reservación seleccionando un espacio, fecha y horario disponible.
4. Consultar y gestionar las reservaciones desde el tablero de usuario.

-->
