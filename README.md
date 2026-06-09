# Países del Mundo — React

SPA que muestra todos los países del mundo. Búsqueda en tiempo real por nombre o capital, filtrado por región, tarjetas con banderas, skeletons de carga y diseño light profesional con gradiente cian-marino.

**Demo en producción:** [https://react-paises-spa.vercel.app](https://react-paises-spa.vercel.app)

## Stack

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| React | 18.3.1 | Framework (hooks) |
| Vite | 5.4.x | Bundler y dev server |
| PrimeReact | 10.9.x | Componentes UI |
| PrimeIcons | 7.0.0 | Iconografía |
| Tema | lara-dark-teal | CSS pre-compilado |
| React Router DOM | 6.28.x | Enrutamiento SPA |
| Axios | 1.8.x | Cliente HTTP |
| ESLint | 9.x | Flat config |
| Prettier | 3.6.x | Formateo |
| pnpm | 11.5.2 | Gestor de paquetes |

## Instalación

```bash
pnpm install
```

## Scripts

```bash
pnpm dev         # Vite dev server — http://localhost:3000
pnpm build       # Vite build — dist/
pnpm preview     # Preview del build
pnpm lint        # ESLint — 0 errores
pnpm lint:fix    # Corregir y formatear automáticamente
```

## Características

- Grid responsivo de tarjetas con bandera, nombre oficial, capital, población, región y código ISO
- Búsqueda en tiempo real por nombre, nombre oficial o capital
- Filtro por región con dropdown y opción de limpiar
- Skeletons de carga: 6 placeholders animados mientras llega la API
- Badges con color semántico por tipo de dato
- Gradiente `linear-gradient(90deg, #d53369 0%, #daae51 100%)` en navbar y acentos

## API

`GET https://countries-api-service.vercel.app/api/countries`

## Estructura

```
src/
├── api/endpoint.js                  # URL de la API
├── assets/img/logo.png
├── components/
│   ├── home/HomeComponent.jsx       # Grid + filtros + badges + skeletons
│   └── shared/
│       ├── navbar/NavbarComponent.jsx
│       ├── footer/FooterComponent.jsx
│       └── error/ErrorComponent.jsx
├── routes/Router.jsx
├── App.jsx / App.css                # Estilos globales + layout
├── index.css                        # Variables, PrimeReact overrides
└── main.jsx                         # PrimeReactProvider + CSS imports
```

## Notas de configuración

### ESLint 9 flat config
Usa `eslint.config.js`. Los archivos `.eslintrc.*` y `.eslintignore` han sido eliminados.

### Build output: `dist/`
`vite.config.js` usa `outDir: 'dist'` para coincidir con `vercel.json` (`outputDirectory: "dist"`).

### PrimeReact — CSS imports
Los temas CSS se importan en `main.jsx` antes de los estilos propios:
```js
import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## Autor

Carlos Mur
