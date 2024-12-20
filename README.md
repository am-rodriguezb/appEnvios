# 📦 Sistema de Gestión de Envíos

## 📱 Descripción
Aplicación móvil desarrollada con Ionic/Angular que facilita la gestión de envíos y retiros a domicilio. 
Permite a los usuarios gestionar sus envíos, agendar retiros y hacer seguimiento de sus órdenes de transporte de manera eficiente.

## 💻 Guía de Instalación y Ejecución

### Requisitos Previos
1. Node.js (versión 14 o superior)
2. Visual Studio Code
3. Git

### Pasos de Instalación

1. **Clonar el Repositorio**


2. **Abrir con Visual Studio Code**

cd 


3. **Instalar Dependencias Globales**
```
npm install -g @ionic/cli
npm install -g @angular/cli
```

4. **Instalar Dependencias del Proyecto**
```
npm install
```

5. **Iniciar el Servidor de Desarrollo**
```
ionic serve
```

### Solución de Problemas Comunes
- Si hay errores de dependencias: `npm install --force`
- Si hay problemas con Angular: `ng update @angular/core @angular/cli`
- Para limpiar caché: `npm cache clean --force`

⚡ Características Principales
🚚 Gestión de Envíos

Registro de nuevos envíos
Búsqueda de órdenes de transporte
Historial completo de envíos y retiros
Sistema de notificaciones

🏠 Servicios a Domicilio

Programación de retiros a domicilio
Agendamiento personalizado
Gestión de direcciones

💰 Cotizaciones

Calculadora de costos
Estimaciones en tiempo real
Comparación de servicios

🛠 Tecnologías Utilizadas

Ionic/Angular: Framework base
Angular Material: Componentes de UI
@ionic/storage: Persistencia de datos
SendGrid: Notificaciones por email

📱 Interfaz de Usuario
Página Principal

Barra de búsqueda para órdenes
Menú de opciones principales:

Ingreso de envíos
Retiro a domicilio
Historial de servicios


Barra de navegación con acceso rápido a:

Inicio
Sucursales
Cotizador
Gestión de sesión



🔐 Seguridad y Autenticación

Sistema de login seguro
Recuperación de contraseña vía email
Protección de rutas con Guards
Almacenamiento seguro de datos de usuario

🔧 Configuración Necesaria

Credenciales de SendGrid para emails
Configuración de variables de entorno
Configuración de base de datos local

👤 Autores
Jossue Padron
Amaro Rodriguez
Pedro Torres
Raul Roa
