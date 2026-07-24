import type { SeccionMenu } from "../types/menu";

/**
 * NOTA: las imágenes usan Unsplash como placeholder de alta calidad.
 * Para producción, reemplaza cada `imagen` por la fotografía real del producto
 * (idealmente 800x800px, fondo neutro, formato .webp).
 */

const IMG = {
  bananaSplit: "https://images.unsplash.com/photo-1633933037960-72b9fd53c1b0?auto=format&fit=crop&w=800&q=80",
  copaClasica: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
  copaChocolate: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
  copaFresa: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80",
  ensaladaTropical: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?auto=format&fit=crop&w=800&q=80",
  ensaladaClasica: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80",
  ensaladaYogurt: "https://images.unsplash.com/photo-1490323030596-8f81cb01f75c?auto=format&fit=crop&w=800&q=80",
  brownieClasico: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
  browniePecanas: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  brownieCaramelo: "https://images.unsplash.com/photo-1606890658317-7e97243c4c73?auto=format&fit=crop&w=800&q=80",
  salchipapaClasica: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
  salchipapaEspecial: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
  salchipapaMixta: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
  hamburguesaClasica: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  hamburguesaDoble: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
  hamburguesaBbq: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  hamburguesaCrispy: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  sandwichClub: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
  sandwichPollo: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
  sandwichMixto: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=800&q=80",
  perroClasico: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80",
  perroEspecial: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
  perroJumbo: "https://images.unsplash.com/photo-1552590972-4f2cc93bc85e?auto=format&fit=crop&w=800&q=80",
  hero: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
};

export const menu: SeccionMenu[] = [
  {
    id: "heladeria",
    titulo: "Heladería",
    subtitulo: "Cremosos, frescos y hechos para compartir (o no).",
    icono: "🍨",
    categorias: [
      {
        id: "banana-split",
        nombre: "Banana Split",
        icono: "🍌",
        descripcion: "El clásico que nunca falla, en versión grande y en versión personal.",
        productos: [
          {
            id: "bs-tradicional",
            nombre: "Banana Split Tradicional",
            descripcion: "Banana, 3 bolas de helado, sirope de chocolate, fresa y crema chantillí.",
            precio: 14900,
            imagen: IMG.bananaSplit,
            destacado: true,
            etiqueta: "Más pedido",
          },
          {
            id: "bs-choconut",
            nombre: "Banana Split Choconut",
            descripcion: "Con salsa de chocolate belga, maní triturado y barquillo artesanal.",
            precio: 16900,
            imagen: IMG.copaChocolate,
          },
          {
            id: "bs-personal",
            nombre: "Mini Banana Split",
            descripcion: "Versión individual perfecta para un antojo rápido.",
            precio: 9900,
            imagen: IMG.copaFresa,
          },
        ],
      },
      {
        id: "copas-helado",
        nombre: "Copas de Helado",
        icono: "🍧",
        descripcion: "Combinaciones cremosas para cada tipo de antojo.",
        productos: [
          {
            id: "copa-tres-sabores",
            nombre: "Copa 3 Sabores",
            descripcion: "Vainilla, chocolate y fresa con sirope a elección.",
            precio: 11900,
            imagen: IMG.copaClasica,
          },
          {
            id: "copa-oreo",
            nombre: "Copa Oreo Crush",
            descripcion: "Helado de vainilla, trozos de Oreo y salsa de chocolate.",
            precio: 13900,
            imagen: IMG.copaChocolate,
            destacado: true,
          },
          {
            id: "copa-frutos-rojos",
            nombre: "Copa Frutos Rojos",
            descripcion: "Helado de fresa, mora y arándanos con topping de frutos rojos.",
            precio: 13400,
            imagen: IMG.copaFresa,
          }
        ],
      },
      {
        id: "ensaladas-frutas",
        nombre: "Ensaladas de Frutas",
        icono: "🍓",
        descripcion: "Frescura natural con un toque cremoso de helado.",
        productos: [
          {
            id: "ensalada-tropical",
            nombre: "Ensalada Tropical",
            descripcion: "Mango, piña, banano y fresa con bola de helado de vainilla.",
            precio: 12400,
            imagen: IMG.ensaladaTropical,
            destacado: true,
          },
          {
            id: "ensalada-clasica",
            nombre: "Ensalada Clásica",
            descripcion: "Mix de frutas de temporada con crema de leche y queso rallado.",
            precio: 10900,
            imagen: IMG.ensaladaClasica,
          },
          {
            id: "ensalada-yogurt",
            nombre: "Ensalada con Yogurt",
            descripcion: "Frutas frescas, yogurt natural y granola crocante.",
            precio: 11400,
            imagen: IMG.ensaladaYogurt,
          },
        ],
      },
      {
        id: "brownie-helado",
        nombre: "Brownie con Helado",
        icono: "🍫",
        descripcion: "Brownie tibio recién horneado con helado bien frío.",
        productos: [
          {
            id: "brownie-clasico",
            nombre: "Brownie Clásico",
            descripcion: "Brownie de chocolate con bola de helado de vainilla.",
            precio: 13900,
            imagen: IMG.brownieClasico,
          },
          {
            id: "brownie-pecanas",
            nombre: "Brownie con Nueces",
            descripcion: "Brownie de nueces, helado y salsa de chocolate caliente.",
            precio: 15400,
            imagen: IMG.browniePecanas,
            destacado: true,
            etiqueta: "Favorito",
          },
          {
            id: "brownie-caramelo",
            nombre: "Brownie Caramelo",
            descripcion: "Brownie húmedo bañado en salsa de caramelo y almendras.",
            precio: 15900,
            imagen: IMG.brownieCaramelo,
          },
        ],
      },
    ],
  },
  {
    id: "comida-rapida",
    titulo: "Comida Rápida",
    subtitulo: "Sabor callejero con la mejor sazón de la casa.",
    icono: "🍔",
    categorias: [
      {
        id: "salchipapas",
        nombre: "Salchipapas",
        icono: "🌭",
        descripcion: "Papas crocantes, salchicha y todas las salsas que quieras.",
        productos: [
          {
            id: "salchipapa-clasica",
            nombre: "Salchipapa Clásica",
            descripcion: "Papas fritas, salchicha y salsas de la casa.",
            precio: 13900,
            imagen: IMG.salchipapaClasica,
            destacado: true,
          },
          {
            id: "salchipapa-especial",
            nombre: "Salchipapa Especial",
            descripcion: "Con tocineta, queso fundido y maíz tierno.",
            precio: 17900,
            imagen: IMG.salchipapaEspecial,
          },
          {
            id: "salchipapa-mixta",
            nombre: "Salchipapa Mixta",
            descripcion: "Salchicha, carne desmechada y chorizo criollo.",
            precio: 19900,
            imagen: IMG.salchipapaMixta,
          },
        ],
      },
      {
        id: "hamburguesas",
        nombre: "Hamburguesas",
        icono: "🍔",
        descripcion: "Carne 100% de res a la parrilla, pan brioche y toppings frescos.",
        productos: [
          {
            id: "hamburguesa-clasica",
            nombre: "Hamburguesa Clásica",
            descripcion: "Carne de res, lechuga, tomate, queso cheddar y salsa especial.",
            precio: 18900,
            imagen: IMG.hamburguesaClasica,
            destacado: true,
            etiqueta: "Más vendida",
          },
          {
            id: "hamburguesa-doble",
            nombre: "Hamburguesa Doble Carne",
            descripcion: "Doble carne, doble queso y tocineta crocante.",
            precio: 24900,
            imagen: IMG.hamburguesaDoble,
          },
          {
            id: "hamburguesa-bbq",
            nombre: "Hamburguesa BBQ",
            descripcion: "Carne, aros de cebolla crocantes y salsa BBQ ahumada.",
            precio: 21900,
            imagen: IMG.hamburguesaBbq,
          },
          {
            id: "hamburguesa-crispy",
            nombre: "Hamburguesa Crispy Chicken",
            descripcion: "Pollo apanado crocante, mayonesa de la casa y pepinillos.",
            precio: 20400,
            imagen: IMG.hamburguesaCrispy,
          },
        ],
      },
      {
        id: "sandwiches",
        nombre: "Sándwiches",
        icono: "🥪",
        descripcion: "Pan artesanal recién tostado con rellenos generosos.",
        productos: [
          {
            id: "sandwich-club",
            nombre: "Sándwich Club",
            descripcion: "Pollo, tocineta, huevo, lechuga y tomate en pan de 3 capas.",
            precio: 17400,
            imagen: IMG.sandwichClub,
            destacado: true,
          },
          {
            id: "sandwich-pollo",
            nombre: "Sándwich de Pollo",
            descripcion: "Pechuga a la plancha, queso mozzarella y salsa de la casa.",
            precio: 15900,
            imagen: IMG.sandwichPollo,
          },
          {
            id: "sandwich-mixto",
            nombre: "Sándwich Mixto",
            descripcion: "Jamón, queso derretido y pan tostado en mantequilla.",
            precio: 12900,
            imagen: IMG.sandwichMixto,
          },
        ],
      },
      {
        id: "perros-calientes",
        nombre: "Perros Calientes",
        icono: "🌭",
        descripcion: "Salchicha jugosa, pan suave y toppings a elección.",
        productos: [
          {
            id: "perro-clasico",
            nombre: "Perro Clásico",
            descripcion: "Salchicha, papas hilo, salsas y queso rallado.",
            precio: 11900,
            imagen: IMG.perroClasico,
          },
          {
            id: "perro-especial",
            nombre: "Perro Especial de la Casa",
            descripcion: "Salchicha, tocineta, piña caramelizada y salsa de la casa.",
            precio: 15400,
            imagen: IMG.perroEspecial,
            destacado: true,
            etiqueta: "Recomendado",
          },
          {
            id: "perro-jumbo",
            nombre: "Perro Jumbo",
            descripcion: "Salchicha jumbo, queso fundido, tocineta y papas hilo.",
            precio: 17900,
            imagen: IMG.perroJumbo,
          },
        ],
      },
    ],
  },
];

export const heroImagen = IMG.hero;

export const negocio = {
  nombre: "Fontana Helados & Comida Rápida",
  eslogan: "Comida rápida con sazón, helados con alma.",
  descripcion:
    "Del antojo salado al capricho dulce: todo en un solo lugar, hecho fresco cada día.",
};

/** Formatea un número entero como precio en pesos colombianos, sin decimales. */
export function formatearPrecio(valor: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(valor);
}
