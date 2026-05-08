# Haikrom - Catálogo de Productos

Aplicación de catálogo de productos para Haikrom, empresa líder en soluciones de pintura arquitectónica.

## Características

✨ **Búsqueda en tiempo real** - Encuentra productos al instante mientras escribes
🏷️ **Filtros dinámicos** - Filtra por categoría y rango de precio
📊 **Ordenamiento flexible** - Ordena por nombre, precio o disponibilidad
📱 **Diseño responsivo** - Funciona perfectamente en dispositivos móviles y desktop
🎨 **Diseño moderno** - Interfaz basada en el diseño Figma de Haikrom

## Tecnologías

- **React 18** - Framework de interfaz
- **Vite** - Bundler ultrarrápido
- **Tailwind CSS** - Framework de estilos
- **JavaScript ES6+** - Lenguaje de programación

## Instalación

1. Clona el repositorio
```bash
cd haikrom-catalog
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## Estructura del Proyecto

```
haikrom-catalog/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Encabezado con búsqueda
│   │   ├── Filters.jsx      # Panel de filtros
│   │   ├── ProductCard.jsx  # Tarjeta de producto
│   │   └── Footer.jsx       # Pie de página
│   ├── data/
│   │   └── products.json    # Base de datos de productos
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── index.html               # HTML principal
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
└── package.json             # Dependencias del proyecto
```

## Productos

El catálogo incluye **15 productos** en 5 categorías:

1. **Pintura Arquitectonica Interior** (3 productos)
2. **Pintura Arquitectonica Exterior** (3 productos)
3. **Primer Epoxico Rico en Zinc** (3 productos)
4. **Impermeabilizante 100% acrílico** (3 productos)
5. **Pintura de Tráfico** (3 productos)

## Funcionalidades

### Búsqueda
Busca productos por nombre o descripción en tiempo real desde el encabezado.

### Filtros
- **Categoría**: Selecciona una categoría específica o "Todas"
- **Precio**: Establece un rango de precio mínimo y máximo
- **Ordenamiento**: Ordena por nombre, precio (menor/mayor) o disponibilidad

### Información de Producto
Cada producto muestra:
- Imagen representativa
- Nombre y descripción
- Categoría (badge de color)
- Stock disponible
- Cobertura (m²/litro)
- Durabilidad (años)
- Precio

## Deploy

Para desplegar en Vercel:

1. Construye el proyecto
```bash
npm run build
```

2. Sube a Vercel (conecta tu repositorio de GitHub)

La aplicación estará disponible en `https://tu-dominio.vercel.app`

## Próximas Mejoras

- [ ] Carrito de compras
- [ ] Sistema de autenticación
- [ ] Integración con Stripe
- [ ] Panel de administración
- [ ] Galería de proyectos
- [ ] Formulario de contacto funcional
- [ ] Sistema de comentarios/reseñas

## Contacto

Para más información sobre Haikrom, visita www.haikrom.com

---

**Desarrollado con ❤️ para Haikrom**
# haikrom-catalog
# haikrom-catalog
