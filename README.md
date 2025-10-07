# 🌍 Paises React - Countries Explorer

Una aplicación web moderna y responsive desarrollada con React.js + Vite.js que permite explorar información detallada de todos los países del mundo. Incluye búsqueda en tiempo real y filtros por continente.

## ✨ Características

- 🔍 **Búsqueda en tiempo real** por nombre de país o capital
- 🌎 **Filtro por continentes** (África, Asia, Europa, América, Oceanía)
- 📊 **Información detallada** de cada país:
  - Capital
  - Población
  - Región y subregión
  - Área territorial
  - Idiomas oficiales
- 🎨 **Interfaz moderna y responsive** con Bootstrap
- 🚀 **Carga rápida** gracias a Vite.js
- 🎭 **Componentes acordeón** para mejor visualización
- 🏴 **Banderas de países** con imágenes SVG de alta calidad

## 🛠️ Tecnologías Utilizadas

- [React.js](https://reactjs.org/) - Librería de JavaScript para construir interfaces de usuario
- [Vite.js](https://vitejs.dev/) - Build tool y dev server ultrarrápido
- [React Bootstrap](https://react-bootstrap.github.io/) - Componentes de Bootstrap para React
- [React Router DOM](https://reactrouter.com/) - Enrutamiento para aplicaciones React
- [Axios](https://axios-http.com/) - Cliente HTTP para peticiones a la API
- [Font Awesome](https://fontawesome.com/) - Iconos vectoriales

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 20 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/cmurestudillos/paises-react.git
```

2. Navega al directorio del proyecto:
```bash
cd paises-react
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:3000`

## 🚀 Uso

### Búsqueda de países
Escribe el nombre de un país o su capital en el campo de búsqueda para filtrar los resultados en tiempo real.

### Filtrar por continente
Selecciona un continente del menú desplegable para ver únicamente los países de esa región.

### Ver detalles
Haz clic en el nombre de cualquier país para expandir su información detallada.

### Limpiar filtros
Utiliza el botón "Limpiar" para resetear todos los filtros aplicados.

## 📁 Estructura del Proyecto

```
paises-react/
├── src/
│   ├── api/
│   │   └── endpoint.js          # Configuración de la API
│   ├── components/
│   │   ├── home/
│   │   │   └── HomeComponent.jsx    # Componente principal
│   │   └── shared/
│   │       ├── navbar/
│   │       │   └── NavbarComponent.jsx
│   │       ├── footer/
│   │       │   └── FooterComponent.jsx
│   │       └── error/
│   │           └── ErrorComponent.jsx
│   ├── routes/
│   │   └── Router.jsx           # Configuración de rutas
│   ├── assets/
│   │   └── img/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🌐 API Utilizada

Este proyecto utiliza la API de países alojada en:
```
https://countries-api-service.vercel.app/api/countries
```

La API proporciona información completa de 240 países, incluyendo:
- Nombres (común y oficial)
- Banderas y escudos
- Información geográfica
- Datos demográficos
- Idiomas y monedas
- Y mucho más...

## 🎨 Personalización

### Cambiar colores del tema

Edita el archivo `src/App.css` para personalizar los colores del gradiente:

```css
.bg-custom {
  background-image: linear-gradient(15deg, #61dbfb 0%, #80c7d0 100%);
}
```

### Agregar más filtros

Puedes extender la funcionalidad añadiendo filtros adicionales en `HomeComponent.jsx`:
- Por idioma
- Por población
- Por área territorial
- Por moneda

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Carlos Mur**

- GitHub: [@tu-usuario](https://github.com/cmurestudillos)

## 🙏 Agradecimientos

- API de países proporcionada por [Countries API Service](https://countries-api-service.vercel.app)
- Iconos por [Font Awesome](https://fontawesome.com/)
- Componentes UI por [React Bootstrap](https://react-bootstrap.github.io/)

---

⭐️ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Desarrollado con ❤️ usando React + Vite