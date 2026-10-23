# REQUERIMIENTO ANEXO N°3 – SISTEMA DE NAVEGACIÓN CON MENÚ HAMBURGUESA LATERAL IZQUIERDA
**Ref.:** Adenda al reposicionamiento de yoisar.com
**Fecha:** 2026-06-20
**Voz obligatoria:** Primera persona del singular (Yo / Mí / Mío)

---

## 1. Justificación Estratégica del Menú Lateral Izquierdo

Yo necesito que mi sitio web tenga un sistema de navegación claro, ordenado y siempre accesible. Decido ubicar el menú tipo "hamburguesa" (ícono de tres líneas horizontales) en la **esquina superior izquierda** de mi pantalla por las siguientes razones:

- **Jerarquía visual:** Al dejar la derecha libre, puedo ubicar mis principales Call To Action (Ej: "Cotizá conmigo" o el selector de idiomas) en la zona de mayor interacción del usuario (derecha superior), sin saturar el header.
- **Estética corporativa:** Los dashboards empresariales y plataformas SaaS suelen usar la izquierda para la navegación profunda. Esto refuerza mi imagen de proveedor de software serio.
- **Acceso rápido a mi portfolio:** Mi mayor activo de venta son mis proyectos. Este menú debe ser el vehículo principal para que el visitante pueda explorar **todos y cada uno de mis desarrollos** en menos de 2 clics, sin tener que scrollear interminablemente.

---

## 2. Especificaciones Funcionales del Componente

### 2.1. Comportamiento del Ícono (Hamburguesa)
- El ícono de tres líneas horizontales debe ser **fijo (sticky)** en el header y permanecer visible en todo momento mientras el usuario navega por mi landing page.
- Al hacer clic o tocar sobre el ícono, se debe desplegar un **panel lateral (drawer / off-canvas)** que emerge desde el borde izquierdo de la pantalla hacia la derecha, cubriendo parcialmente el contenido principal (aproximadamente un 75% del ancho en escritorio y el 100% en dispositivos móviles).
- El fondo del contenido principal debe oscurecerse (efecto overlay) para enfocar la atención del usuario en el menú.
- Para cerrar el menú, el usuario debe poder:
    - Tocar nuevamente el ícono de la "X" (cerrar) dentro del panel.
    - Hacer clic en el área oscurecida del fondo (overlay).
    - Presionar la tecla "ESC" del teclado.

### 2.2. Estructura de Contenido Interno del Drawer
El panel lateral debe estar organizado en dos bloques claramente diferenciados visualmente, utilizando la paleta corporativa definida en el Anexo N°2 (fondos slate/gris, tipografía limpia).

#### Bloque A: Acceso a Secciones Generales (Landing)
Aquí debo ubicar los enlaces de anclaje (anchor links) que desplazan suavemente el scroll hacia las secciones principales de mi página de inicio:

1. Inicio / Hero (Volver al principio).
2. Mis Servicios (Desarrollo, SaaS, IA).
3. Mi Infraestructura (Mi diferencial técnico).
4. Contacto / Hablemos.

#### Bloque B: Listado Completo de Mis Proyectos (Obligatorio)
Este es el corazón del menú. Necesito que todos mis proyectos estén listados de forma explícita, con su nombre, estado y un enlace directo. Para mantener el orden visual, agruparé mis proyectos en subcategorías dentro del mismo bloque:

**📌 Mis Proyectos Comerciales (SaaS / Propios):**
- VentaRifas.com (Activo)
- Distriboo (Activo)
- Yois Snacks (Activo)
- Planning Yoisar (🚀 En desarrollo)
- PortalCheck (🚀 En desarrollo)

**📌 Mis Proyectos Gubernamentales (Misión Crítica):**
- CGM - Sistema de Gestión (Activo - Gobierno de Misiones)
- App Patología - Hospital Madariaga (Activo)

**📌 Proyectos para Terceros (Modernización):**
- Guajira - Modernización Frontend (🚀 En curso - `front.guajira.dev.yoisar.com`)

---

## 3. Experiencia de Usuario (UX) al Seleccionar un Proyecto

- **Si el proyecto tiene un dominio propio o una URL pública (ej. VentaRifas, Guajira):** Al hacer clic en su nombre, el enlace debe abrirse en una **nueva pestaña** (`target="_blank"`). Esto es clave para que el visitante no abandone mi sitio principal y pueda volver fácilmente al menú para seguir explorando.
- **Si el proyecto está en desarrollo y no tiene vista pública:** Al hacer clic, el menú debe cerrarse y la página debe hacer scroll hasta la sección de "Portfolio" en el landing, resaltando brevemente la ficha del proyecto (para que el usuario lea la descripción completa).
- **Cierre automático:** Una vez que el usuario hace clic en cualquier opción (sección o proyecto), el panel lateral debe cerrarse automáticamente para no obstruir la vista del contenido seleccionado.

---

## 4. Integración con la Internacionalización (i18n)

Todos los textos dentro del menú hamburguesa deben ser traducidos al **Inglés y Portugués**, manteniendo la coherencia con el selector de idiomas definido en el Anexo N°2.

- **Español:** "Mis Proyectos", "Servicios", "Infraestructura", "Contacto".
- **Inglés:** "My Projects", "Services", "Infrastructure", "Contact".
- **Portugués:** "Meus Projetos", "Serviços", "Infraestrutura", "Contato".

Los nombres de los proyectos (VentaRifas, Distriboo, PortalCheck, etc.) son **marcas registradas/nombres propios** y no deben traducirse bajo ningún concepto, solo se traducirá su descripción de estado (Activo / En desarrollo / En curso).

---

## 5. Ajuste de Diseño Corporativo (Tailwind)

- **Ícono:** El ícono hamburguesa debe ser de un color sobrio (blanco o gris claro si el header es oscuro, o azul marino si el header es claro), con un tamaño adecuado para ser tocado cómodamente en móviles (mínimo 44x44 píxeles).
- **Panel desplegado:** Debe tener un fondo sólido (blanco o gris muy claro) que contraste con el overlay oscuro. Los ítems del menú deben tener un **efecto hover suave** (cambio de color de fondo o subrayado) para darle una sensación corporativa y pulida.
- **Separadores visuales:** Usar líneas divisorias sutiles o un espaciado notable entre el Bloque A (Secciones) y el Bloque B (Proyectos) para que el usuario entienda rápidamente que hay dos tipos de navegación disponibles.
- **Badges de estado:** Junto a cada proyecto, debo mostrar una etiqueta (badge) pequeña con el estado (verde para "Activo", amarillo para "En desarrollo", azul para "Misión Crítica"), tal como se estipuló en el Anexo N°1. Esto le da al usuario información de madurez del producto sin necesidad de salir del menú.

---

## 6. Prioridad de Visibilidad (Importante)

El menú hamburguesa en la izquierda será el **principal sistema de navegación** en dispositivos móviles y tablets. En escritorio, además del menú hamburguesa (que permanecerá visible), podré tener en el header derecho los botones de "Selector de idioma" y "Cotizar", pero el acceso a la lista de proyectos **solo** estará disponible de forma tan rápida y completa a través de este panel lateral izquierdo. 

Esto obliga a los visitantes a interactuar con mi menú, descubriendo la totalidad de mi portfolio (incluyendo Guajira y los proyectos en desarrollo) desde el primer momento.

---

## 7. Criterios de Aceptación

- [ ] El ícono de la hamburguesa está anclado en la esquina superior izquierda y es visible en todos los breakpoints.
- [ ] El panel lateral se abre desde la izquierda ocupando el ancho estipulado y se cierra correctamente con los métodos descritos.
- [ ] La lista de proyectos dentro del menú contiene **absolutamente todos** los mencionados en la historia (VentaRifas, Distriboo, Yois Snacks, Planning, PortalCheck, CGM, App Patología y Guajira).
- [ ] Los enlaces a proyectos externos (VentaRifas, Guajira, etc.) abren en nueva pestaña.
- [ ] Los textos del menú cambian dinámicamente según el idioma seleccionado (ES/EN/PT).