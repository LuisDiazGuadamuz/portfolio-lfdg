# Portafolio Personal — Luis Felipe Díaz Guadamuz

Portafolio profesional desarrollado con **React + Vite + TailwindCSS + Framer Motion**, con identidad visual negra/dorada (marca **LFDG**), diseñado para presentar proyectos reales, experiencia académica y canales de contacto de forma clara y elegante.

---

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones del portafolio](#secciones-del-portafolio)
- [Proyectos incluidos](#proyectos-incluidos)
- [Instalación y desarrollo local](#instalación-y-desarrollo-local)
- [Comandos disponibles](#comandos-disponibles)
- [Activos y recursos](#activos-y-recursos)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Contacto](#contacto)

---

## Descripción general

Este portafolio fue desarrollado completamente desde cero para ser usado como presentación profesional en procesos de selección, currículum y redes laborales. Está pensado para ser escalable, mantenible y fácil de actualizar con contenido real sin necesidad de cambiar la arquitectura visual.

**Características principales:**

- Identidad visual negra/dorada con marca personal LFDG
- Animaciones sutiles con Framer Motion al hacer scroll
- Galería interna por proyecto con navegación y modal fullscreen
- CV descargable directamente desde la página
- Sección de experiencia/formación tipo timeline
- Contacto con correo, GitHub, LinkedIn y WhatsApp reales
- SEO básico configurado (título, meta description, favicon, idioma)
- Diseño 100% responsive (desktop, tablet y móvil)
- Menú hamburguesa funcional en móvil
- Preparado para despliegue en Vercel

---

## Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| React | ^19.2.7 | UI y gestión de estado |
| Vite | ^8.1.0 | Bundler y servidor de desarrollo |
| TailwindCSS | ^4.3.1 | Estilos y diseño responsive |
| @tailwindcss/vite | ^4.3.1 | Plugin oficial de Tailwind para Vite |
| Framer Motion | ^12.41.0 | Animaciones de entrada en secciones |
| React Icons | ^5.6.0 | Iconografía (Fi, Hi2, Fa) |
| Oxlint | ^1.69.0 | Linter estático de código |

**Tipografías (Google Fonts):**
- `Poppins` — títulos y encabezados (clase `font-heading`)
- `Inter` — texto general

**Paleta de colores:**

| Variable | Valor | Uso |
|---|---|---|
| Fondo principal | `#0A0A0A` | Fondo base |
| Fondo secundario | `#111111` | Fondos de sección |
| Tarjetas | `#171717` | Fondo de tarjetas |
| Bordes | `#262626` | Bordes sutiles |
| Texto principal | `#FAFAFA` | Títulos y texto importante |
| Texto secundario | `#A3A3A3` | Descripciones y detalles |
| Dorado principal | `#D4AF37` | Bordes, badges y acentos |
| Dorado brillante | `#EAB308` | Hover y texto destacado |

---

## Estructura del proyecto

```
portafolio-de-cv/
├── public/
│   ├── lfdg-logo.png                      # Logo para favicon
│   ├── Luis_Felipe_Diaz_Guadamuz_CV.pdf   # CV descargable
│   └── Imagenes de Proyecto Portafolio/
│       ├── RealStatePWA/                  # Imágenes Samara Rentals
│       ├── RotacionPotreros/              # Imágenes app Android
│       ├── ExpressFood/                   # Imágenes app restaurante
│       └── Flujo de Caja/                 # Imágenes sistema escritorio
├── src/
│   ├── assets/
│   │   └── lfdg-logo.png                  # Logo en Hero y Navbar
│   ├── components/
│   │   ├── Navbar.jsx                     # Navegación sticky con menú móvil
│   │   ├── ProjectCard.jsx                # Tarjeta con galería y modal fullscreen
│   │   ├── Reveal.jsx                     # Animación de entrada (Framer Motion)
│   │   ├── SectionHeading.jsx             # Encabezado reutilizable de sección
│   │   └── SkillBadge.jsx                 # Tarjeta de categoría de skills
│   ├── data/
│   │   ├── experience.js                  # Formación académica y técnica
│   │   ├── projects.js                    # Proyectos con imágenes y repositorios
│   │   └── skills.js                      # Stack organizado por categorías
│   ├── sections/
│   │   ├── HeroSection.jsx                # Presentación principal
│   │   ├── AboutSection.jsx               # Perfil profesional
│   │   ├── SkillsSection.jsx              # Tecnologías por categoría
│   │   ├── ProjectsSection.jsx            # Grid de proyectos destacados
│   │   ├── ExperienceSection.jsx          # Timeline de formación
│   │   ├── ContactSection.jsx             # Canales de contacto
│   │   └── Footer.jsx                     # Pie de página
│   ├── App.jsx                            # Composición general de secciones
│   ├── main.jsx                           # Punto de entrada React
│   └── index.css                          # Tailwind, fuentes y estilos globales
├── index.html                             # Documento HTML con SEO y favicon
├── vite.config.js                         # Configuración de Vite + Tailwind
├── package.json
└── .oxlintrc.json
```

---

## Secciones del portafolio

| Sección | ID | Descripción |
|---|---|---|
| Navbar | — | Logo LFDG, navegación, botón Descargar CV, menú móvil |
| Hero | `#hero` | Nombre, perfil, botones principales, logo y botones sociales |
| Sobre mí | `#about` | Texto profesional breve y highlights de formación |
| Tecnologías | `#skills` | Stack por categorías: Frontend, Backend, BD, Mobile, Herramientas |
| Proyectos | `#projects` | Tarjetas con galería, rol, stack, botones GitHub y Demo |
| Experiencia | `#experience` | Timeline vertical con formación universitaria y técnica |
| Contacto | `#contact` | Correo, GitHub, LinkedIn y WhatsApp con enlaces reales |
| Footer | — | Créditos y tecnologías usadas |

---

## Proyectos incluidos

### 1. Samara Rentals / Real State PWA
- **Tipo:** Aplicación Web SPA/PWA Inmobiliaria
- **Stack:** React, Vite, TailwindCSS, Node.js, Express, GraphQL, MongoDB Atlas, Cloudinary, JWT, PWA
- **Repositorios:** [Frontend](https://github.com/LuisDiazGuadamuz/samara-rentals-frontend) · [Backend](https://github.com/LuisDiazGuadamuz/samara-rentals-backend)

### 2. Rotación de Potreros
- **Tipo:** Aplicación móvil Android
- **Stack:** Kotlin, Android Studio, Room, SQLite, RecyclerView, ViewBinding, MVVM
- **Repositorio:** [RotacionPotrerosAppMovil](https://github.com/LuisDiazGuadamuz/RotacionPotrerosAppMovil)

### 3. ExpressFood
- **Tipo:** Aplicación móvil / sistema de restaurante
- **Stack:** Android Studio, Java/Kotlin, SQLite, XML Views, RecyclerView
- **Repositorio:** [ExpressFoodAppMovil](https://github.com/LuisDiazGuadamuz/ExpressFoodAppMovil)

### 4. Flujo de Caja
- **Tipo:** Sistema de escritorio para gestión financiera
- **Stack:** Java, JavaFX/Swing, MySQL/SQL Server
- **Repositorio:** [FlujodeCaja](https://github.com/LuisDiazGuadamuz/FlujodeCaja)

---

## Instalación y desarrollo local

**Requisitos previos:**
- Node.js 18 o superior
- npm 9 o superior

```bash
# 1. Clonar el repositorio
git clone https://github.com/LuisDiazGuadamuz/portafolio-de-cv.git
cd portafolio-de-cv

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`.

---

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de producción |
| `npm run lint` | Ejecuta Oxlint sobre el código fuente |

---

## Activos y recursos

| Archivo | Ubicación | Uso |
|---|---|---|
| Logo LFDG | `src/assets/lfdg-logo.png` | Navbar y Hero |
| Favicon | `public/lfdg-logo.png` | Pestaña del navegador |
| CV | `public/Luis_Felipe_Diaz_Guadamuz_CV.pdf` | Botón Descargar CV |
| Imágenes de proyectos | `public/Imagenes de Proyecto Portafolio/` | Galería en tarjetas |

> Para reemplazar el CV, sustituye el archivo en `public/` manteniendo el mismo nombre.  
> Para agregar un nuevo proyecto, edita `src/data/projects.js` con el mismo esquema de los proyectos existentes.

---

## Despliegue en Vercel

Este proyecto está configurado para desplegarse directamente en [Vercel](https://vercel.com) sin configuración adicional.

```bash
# Build de producción local (verificación previa)
npm run build
npm run preview
```

**Pasos en Vercel:**
1. Importar el repositorio desde GitHub.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Publicar.

> Los archivos en `public/` (CV, imágenes de proyectos, logo) se incluyen automáticamente en el deploy y son accesibles desde la raíz del sitio.

---

## Contacto

**Luis Felipe Díaz Guadamuz**  
Software Developer & Systems Engineering Student  
Universidad Nacional de Costa Rica

| Canal | Enlace |
|---|---|
| Correo | luis.diaz.guadamuz@gmail.com |
| GitHub | [LuisDiazGuadamuz](https://github.com/LuisDiazGuadamuz) |
| LinkedIn | [luis-felipe-diaz-guadamuz](https://www.linkedin.com/in/luis-felipe-diaz-guadamuz-750701405/) |
| WhatsApp | [+506 8334 6119](https://wa.me/50683346119) |

---

*Portafolio desarrollado con React, Vite, TailwindCSS y Framer Motion. Listo para despliegue en Vercel.*
