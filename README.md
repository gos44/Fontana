# Frutimix Pop — Menú Digital

Landing page de menú digital para una tienda de comida rápida y heladería, construida con **Svelte 5 (Runes API)**, **TypeScript** y **Tailwind CSS**, con un diseño tipo **Bento UI** y **glassmorphism** ligero.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── App.svelte                 # Ensambla Navbar + Hero + Secciones de menú + Footer
├── app.css                    # Tailwind + utilidades globales (glass, pills, reveal)
├── main.ts                    # Bootstrap de la app (mount de Svelte 5)
├── lib/
│   ├── types/menu.ts          # Interfaces TypeScript (ProductoMenu, CategoriaMenu, SeccionMenu)
│   ├── data/menu.ts           # TODA la data del menú: nombres, precios, descripciones, imágenes
│   ├── actions/reveal.ts      # Acción de Svelte (IntersectionObserver) para animación al hacer scroll
│   └── components/
│       ├── Navbar.svelte      # Barra superior con glassmorphism y menú móvil
│       ├── Hero.svelte        # Sección hero con blobs animados e imagen destacada
│       ├── MenuSection.svelte # Sección de menú (Heladería / Comida Rápida)
│       ├── CategoryBlock.svelte # Encabezado de categoría + bento grid de productos
│       ├── MenuCard.svelte    # Tarjeta de producto individual (reutilizable)
│       ├── Footer.svelte
│       └── icons/             # Iconos SVG minimalistas reutilizables
```

## Cómo editar el menú

Toda la información (nombre del negocio, categorías, productos, precios e imágenes) vive en
`src/lib/data/menu.ts`. No hay datos "quemados" dentro de los componentes: basta con editar
ese archivo para agregar, quitar o modificar productos.

```ts
{
  id: "hamburguesa-clasica",
  nombre: "Hamburguesa Clásica",
  descripcion: "Carne de res, lechuga, tomate, queso cheddar y salsa especial.",
  precio: 18900,
  imagen: "https://...",
  destacado: true, // ocupa una celda más grande en el bento grid
  etiqueta: "Más vendida", // opcional, se muestra como badge
}
```

> Las imágenes actuales son placeholders de Unsplash. Para producción, reemplázalas por
> fotografías reales del negocio (ideal: 800×800px o mayor, fondo neutro).

## Notas de diseño

- **Paleta:** Rosa `#FF5D8F`, Turquesa claro `#7FE0D4`, Turquesa intenso `#00C2CB`, Naranja coral `#FF9A76`, complementados con blancos/negros/grises.
- **Tipografía:** `Baloo 2` (display, con personalidad, usada en títulos) + `Plus Jakarta Sans` (texto, limpia y legible).
- **Elemento firma:** blobs animados con `border-radius` orgánico detrás del hero, evocando el "goteo" del helado.
- **Animaciones:** fade/fly al cargar el hero, aparición progresiva al hacer scroll (`use:reveal`), elevación + escalado de imagen en hover de las tarjetas, shimmer mientras cargan las imágenes.
- **Accesibilidad:** se respeta `prefers-reduced-motion`, hay foco visible en los elementos interactivos por defecto del navegador/Tailwind.
