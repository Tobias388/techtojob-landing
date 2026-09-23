# TechToJob — Plataforma & Comunidad Tech

> Conectá con empresas tech directamente. Sin intermediarios ni filtros ATS.

Landing page corporativa (One-Page) de alta conversión y páginas legales estáticas optimizadas para rendimiento extremo, accesibilidad y soporte multi-idioma (i18n).

---

## 🌟 Características Principales

- **Diseño Fiel a Sistema de Diseño (Fase 5)**: Traducido a tokens de Tailwind CSS (`primary: #84c0bf`, `text-main: #2f3436`, `bg-main: #ffffff`, `bg-alt: #f8fafb`).
- **Accesibilidad Estricta (WCAG AAA)**: Ratios de contraste contrastados superiores a 12:1 sobre blanco, enlaces de salto (`#main-content`), navegación por teclado y etiquetas `aria-*`.
- **Arquitectura i18n Desacoplada**: Todos los textos centralizados en `src/i18n/es.js` y `src/i18n/en.js`. Motor ligero en Vanilla JS sin recarga de página.
- **Rendimiento Máximo (Lighthouse > 95)**: Fuentes cargadas de manera asíncrona no bloqueante, SVG vectoriales optimizados y CSS scroll snap nativo sin librerías pesadas.
- **W3C Validated**: Estructura de encabezados secuencial (`h1` → `h2` → `h3`) sin niveles salteados y HTML5 semántico.
- **Páginas Legales Completas**: `aviso-legal.html` y `politicas.html` integradas en el pipeline multi-página de Vite.

---

## 🛠️ Stack Tecnológico

- **Bundler / Servidor**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS
- **Tipografía**: Google Font [Sora](https://fonts.google.com/specimen/Sora) (100..800)
- **Internacionalización**: Vanilla JS Custom i18n Engine (ES / EN)
- **Activos**: Logotipos e isotipos vectoriales SVG responsivos

---

## 📁 Estructura del Proyecto

```text
TechToJob/
├── public/
│   ├── icons/                  # Iconos SVG estáticos
│   └── logos/                  # Logotipos e isotipos oficiales SVG
├── src/
│   ├── assets/                 # Recursos procesados
│   ├── i18n/                   # Diccionarios y motor de traducción
│   │   ├── es.js               # Textos en Español
│   │   ├── en.js               # Textos en Inglés
│   │   └── index.js            # Motor Vanilla JS de renderizado i18n
│   ├── main.css                # Estilos base, componentes (@apply) y utilidades
│   └── main.js                 # Entrada principal JS (i18n, drawer, scroll)
├── aviso-legal.html            # Página legal estática
├── politicas.html              # Página de privacidad estática
├── index.html                  # Landing page principal
├── tailwind.config.js          # Configuración de tokens de diseño
├── vite.config.js              # Configuración Rollup multi-página
└── package.json
```

---

## 🚀 Instalación y Desarrollo Local

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/techtojob.git
cd techtojob
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar entorno de desarrollo
```bash
npm run dev
```
Abre en tu navegador: `http://localhost:5173/`

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados y minificados se generarán en la carpeta `dist/`.

### 5. Previsualizar la build de producción
```bash
npm run preview
```

---

## 🌐 Despliegue en Producción

El proyecto está listo para desplegarse con 1 clic en cualquier proveedor de hosting estático:

### Vercel
1. Importa el repositorio en [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

### Netlify
1. Conecta tu repositorio en [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más información.
