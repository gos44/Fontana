import type { SeccionMenu } from "../types/menu";

/**
 * NOTA: las imágenes usan Unsplash/placeholders como referencia visual.
 * Para producción, reemplaza cada `imagen` por la fotografía real del producto
 * (idealmente 800x800px, fondo neutro, formato .webp).
 *
 * NOTA 2: hay 6 productos cuyo precio NO es visible en la carta física
 * (fotos borrosas o casillas en blanco). Quedan marcados con "// TODO"
 * y precio: 0 — complétalos antes de publicar.
 */

const IMG = {
  // Heladería
  bananaSplit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpTFr7uXkyOopaVErulu3nJpjnr2JyAiDLUGOZYk98Y6IqyQYZ6bhOzI&s=10",
  copaHelado: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
  ensaladaTropical: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?auto=format&fit=crop&w=800&q=80",
  ensaladaClasica: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?auto=format&fit=crop&w=800&q=80",
  brownieClasico: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
  browniePecanas: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
  fresasConCrema: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=800&q=80",
  duraznosCrema: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?auto=format&fit=crop&w=800&q=80",
  obleas: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
  paleta: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80",
  arepa: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=800&q=80",
  granizado: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
  duraznoSplit: "https://images.unsplash.com/photo-1629828874514-c1509e9c3f2a?auto=format&fit=crop&w=800&q=80",

  // Comida rápida
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
  salchipapaClasica: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
  salchipapaEspecial: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
  salchipapaMixta: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
  desgranado: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
  salchifarra: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  hamburguesaClasica: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  hamburguesaCrosby: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
  hamburguesaTerreno: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  sandwichCubanito: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=800&q=80",
  sandwichHawaiano: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
  sandwichCubano: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
  perroClasico: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=80",
  perroEspecial: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
  finDeSemana: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
  adicionales: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",

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
        descripcion: "El clásico que nunca falla, en tres tamaños.",
        productos: [
          {
            id: "bs-junior",
            nombre: "Banana Split Junior",
            descripcion: "Banana, helado, crema, queso, mermelada de fresa y galletas.",
            precio: 9000,
            imagen: IMG.bananaSplit,
            destacado: true,
            etiqueta: "Más pedido",
          },
          {
            id: "bs-mediana",
            nombre: "Banana Split Mediana",
            descripcion: "Banana, helado, crema, queso, mermelada de fresa y galletas oreo.",
            precio: 11000,
            imagen: IMG.bananaSplit,
          },
          {
            id: "bs-especial",
            nombre: "Banana Split Especial",
            descripcion: "Banana, helado, crema, queso, mermelada de fresa, galletas oreo y toppings extra.",
            precio: 13000,
            imagen: IMG.bananaSplit,
          },
        ],
      },
      {
        id: "copas-helado",
        nombre: "Copa de Helado",
        icono: "🍧",
        descripcion: "Bolas de helado a elección con crema, queso y mermelada.",
        productos: [
          {
            id: "copa-junior",
            nombre: "Copa Junior",
            descripcion: "Helado a elección con crema, queso y mermelada.",
            precio: 9000,
            imagen: IMG.copaHelado,
            destacado: true,
          },
          {
            id: "copa-mediana",
            nombre: "Copa Mediana",
            descripcion: "Helado a elección con crema, queso y mermelada.",
            precio: 11000,
            destacado: true,
            imagen: IMG.copaHelado,
          },
          {
            id: "copa-especial",
            nombre: "Copa Especial",
            descripcion: "Helado a elección con crema, queso y mermelada.",
            precio: 13000,
            imagen: IMG.copaHelado,
            destacado: true,
          },
        ],
      },
      {
        id: "ensaladas-frutas",
        nombre: "Ensaladas de Frutas",
        icono: "🍓",
        descripcion: "Frescura natural con un toque cremoso de helado.",
        productos: [
          {
            id: "ensalada-sencilla",
            nombre: "Ensalada Sencilla",
            descripcion: "Mix de frutas de temporada con crema de leche y queso rallado.",
            precio: 8000,
            imagen: IMG.ensaladaClasica,
          },
          {
            id: "ensalada-mediana",
            nombre: "Ensalada Mediana",
            descripcion: "Mix de frutas de temporada con crema de leche y queso rallado.",
            precio: 10000,
            imagen: IMG.ensaladaClasica,
          },
          {
            id: "ensalada-especial",
            nombre: "Ensalada Especial",
            descripcion: "Mix de frutas, crema de leche, queso rallado y helado. Precio según tamaño.",
            precio: 13000,
            imagen: IMG.ensaladaTropical,
            destacado: true,
            etiqueta: "Desde $13.000 hasta $15.000",
          },
          {
            id: "ensalada-doble-especial",
            nombre: "Ensalada Doble Especial",
            descripcion: "Mix de frutas, crema de leche, queso rallado y doble helado.",
            precio: 17000,
            imagen: IMG.ensaladaTropical,
          },
          {
            id: "ensalada-super-especial",
            nombre: "Ensalada Súper Especial",
            descripcion: "Mix de frutas, crema de leche, queso rallado, helado y toppings extra.",
            precio: 20000,
            imagen: IMG.ensaladaTropical,
            destacado: true,
            etiqueta: "Favorito",
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
            id: "brownie-sencillo",
            nombre: "Brownie Sencillo",
            descripcion: "Brownie de chocolate con una bola de helado.",
            precio: 9000,
            imagen: IMG.brownieClasico,
            destacado: true,
          },
          {
            id: "brownie-doble",
            nombre: "Brownie Doble Helado",
            descripcion: "Brownie de chocolate con doble helado y salsa de chocolate caliente.",
            precio: 11000,
            imagen: IMG.browniePecanas,
            etiqueta: "Favorito",
          },
        ],
      },
      {
        id: "fresas-con-crema",
        nombre: "Fresas con Crema",
        icono: "🍓",
        descripcion: "Fresas frescas bañadas en crema, en cuatro tamaños.",
        productos: [
          {
            id: "fresas-mini",
            nombre: "Fresas con Crema Mini",
            descripcion: "Fresas frescas con crema de leche.",
            precio: 8000,
            imagen: IMG.fresasConCrema,
          },
          {
            id: "fresas-mediana",
            nombre: "Fresas con Crema Mediana",
            descripcion: "Fresas frescas con crema de leche.",
            precio: 10000,
            imagen: IMG.fresasConCrema,
          },
          {
            id: "fresas-especial",
            nombre: "Fresas con Crema Especial",
            descripcion: "Fresas frescas con crema de leche y toppings.",
            precio: 12000,
            imagen: IMG.fresasConCrema,
            destacado: true,
          },
          {
            id: "fresas-super-especial",
            nombre: "Fresas con Crema Súper Especial",
            descripcion: "Fresas frescas con crema de leche, helado y toppings extra.",
            precio: 15000,
            imagen: IMG.fresasConCrema,
            destacado: true,
          },
        ],
      },
      {
        id: "duraznos-crema",
        nombre: "Duraznos a la Crema",
        icono: "🍑",
        descripcion: "Duraznos en almíbar bañados en crema, en cuatro tamaños.",
        productos: [
          {
            id: "durazno-sencilla",
            nombre: "Duraznos a la Crema Sencilla",
            descripcion: "Duraznos con crema de leche.",
            precio: 8000,
            imagen: IMG.duraznosCrema,
          },
          {
            id: "durazno-junior",
            nombre: "Duraznos a la Crema Junior",
            descripcion: "Duraznos con crema de leche.",
            precio: 10000,
            imagen: IMG.duraznosCrema,
          },
          {
            id: "durazno-mediana",
            nombre: "Duraznos a la Crema Mediana",
            descripcion: "Duraznos con crema de leche y toppings.",
            precio: 13000,
            imagen: IMG.duraznosCrema,
          },
          {
            id: "durazno-especial",
            nombre: "Duraznos a la Crema Especial",
            descripcion: "Duraznos con crema de leche, helado y toppings extra.",
            precio: 15000,
            imagen: IMG.duraznosCrema,
            destacado: true,
          },
        ],
      },
      {
        id: "antojitos",
        nombre: "Antojitos",
        icono: "🍪",
        descripcion: "Para picar algo dulce sin pedir el postre completo.",
        productos: [
          {
            id: "obleas-crocantes",
            nombre: "Obleas Crocantes",
            descripcion: "Oblea crocante con tus rellenos favoritos.",
            precio: 5000,
            imagen: IMG.obleas,
            destacado: true,
          },
          {
            id: "helados-caseros-palo",
            nombre: "Helados Caseros (de Palo)",
            descripcion: "Paleta de helado artesanal hecha en casa.",
            precio: 2000,
            imagen: IMG.paleta,
          },
          {
            id: "arepas",
            // TODO: precio no visible en la carta física, completar.
            nombre: "Arepas",
            descripcion: "Arepa rellena a elección.",
            precio: 0,
            imagen: IMG.arepa,
          },
          {
            id: "fresas-con-crema-antojito",
            // TODO: precio no visible en la carta física, completar.
            // Nota: existe también la categoría "Fresas con Crema" con tamaños Mini/Mediana/Especial/Súper Especial;
            // esta parece ser una porción chica de antojo, verificar si es redundante.
            nombre: "Fresas con Crema (antojo)",
            descripcion: "Porción chica de fresas con crema.",
            precio: 0,
            imagen: IMG.fresasConCrema,
          },
        ],
      },
      {
        id: "granizados",
        nombre: "Granizados",
        icono: "🥤",
        descripcion: "Refrescantes, en tres tamaños.",
        productos: [
          {
            id: "granizado-8oz",
            // TODO: precio no visible en la carta física, completar.
            nombre: "Granizado 8oz",
            descripcion: "Granizado de sabor a elección, tamaño 8oz.",
            precio: 0,
            imagen: IMG.granizado,
          },
          {
            id: "granizado-12oz",
            // TODO: precio no visible en la carta física, completar.
            nombre: "Granizado 12oz",
            descripcion: "Granizado de sabor a elección, tamaño 12oz.",
            precio: 0,
            imagen: IMG.granizado,
          },
          {
            id: "granizado-16oz",
            // TODO: precio no visible en la carta física, completar.
            nombre: "Granizado 16oz",
            descripcion: "Granizado de sabor a elección, tamaño 16oz.",
            precio: 0,
            imagen: IMG.granizado,
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
        id: "pizza",
        nombre: "Pizza",
        icono: "🍕",
        descripcion: "Masa artesanal horneada al punto, para compartir.",
        productos: [
          {
            id: "pizza-hawaiana",
            nombre: "Pizza Hawaiana",
            descripcion: "Jamón, piña y queso mozzarella.",
            precio: 9000,
            imagen: IMG.pizza,
            destacado: true,
          },
          {
            id: "pizza-pollo-champinones",
            nombre: "Pizza Pollo y Champiñones",
            descripcion: "Pollo desmechado, champiñones y queso mozzarella.",
            precio: 10000,
            imagen: IMG.pizza,
          },
          {
            id: "pizza-pollo-tocineta",
            nombre: "Pizza Pollo y Tocineta",
            descripcion: "Pollo desmechado, tocineta crocante y queso mozzarella.",
            precio: 10000,
            imagen: IMG.pizza,
          },
          {
            id: "pizza-tropical",
            nombre: "Pizza Tropical",
            descripcion: "Mix de ingredientes tropicales con queso mozzarella.",
            precio: 10000,
            imagen: IMG.pizza,
          },
          {
            id: "pizza-ranchera",
            nombre: "Pizza Ranchera",
            descripcion: "Carnes surtidas al estilo ranchero con queso mozzarella.",
            precio: 11000,
            imagen: IMG.pizza,
            destacado: true,
          },
          {
            id: "pizza-campesina",
            nombre: "Pizza Campesina",
            descripcion: "Ingredientes de la casa con queso mozzarella.",
            precio: 11000,
            imagen: IMG.pizza,
          },
        ],
      },
      {
        id: "salchipapas",
        nombre: "Salchipapas",
        icono: "🌭",
        descripcion: "Papas crocantes, salchicha y todas las salsas que quieras.",
        productos: [
          {
            id: "salchipapa-choripapa",
            nombre: "Salchipapa - Choripapa",
            descripcion: "Papas fritas, salchicha o chorizo y salsas de la casa.",
            precio: 8000,
            imagen: IMG.salchipapaClasica,
            destacado: true,
          },
          {
            id: "salchipapa-choripapa-mixta-p",
            nombre: "Salchipapa - Choripapa Mixta (Personal)",
            descripcion: "Papas, salchicha y chorizo mixtos, salsas de la casa.",
            precio: 10000,
            imagen: IMG.salchipapaMixta,
          },
          {
            id: "salchipapa-choripapa-mixta-m",
            nombre: "Salchipapa - Choripapa Mixta (Mediana)",
            descripcion: "Papas, salchicha y chorizo mixtos, salsas de la casa.",
            precio: 12000,
            imagen: IMG.salchipapaMixta,
          },
          {
            id: "salchipapa-choripapa-mixta-g",
            nombre: "Salchipapa - Choripapa Mixta (Grande)",
            descripcion: "Papas, salchicha y chorizo mixtos, salsas de la casa.",
            precio: 14000,
            imagen: IMG.salchipapaMixta,
          },
          {
            id: "salchiranchera",
            nombre: "Salchiranchera",
            descripcion: "Papas, salchicha, carnes surtidas al estilo ranchero.",
            precio: 15000,
            imagen: IMG.salchipapaEspecial,
          },
          {
            id: "desgranado-clasico",
            nombre: "Desgranado Clásico",
            descripcion: "Papas, carnes desmechadas y salsas de la casa.",
            precio: 18000,
            destacado: true,
            imagen: IMG.desgranado,
          },
          {
            id: "desgranado-especial",
            nombre: "Desgranado Especial",
            descripcion: "Papas, carnes desmechadas, queso fundido y toppings extra.",
            precio: 22000,
            imagen: IMG.desgranado,
            destacado: true,
          },
          {
            id: "salchifarra-clasica",
            nombre: "Salchifarra Clásica",
            descripcion: "Papas con salchicha, chorizo y morcilla.",
            precio: 20000,
            imagen: IMG.salchifarra,
          },
          {
            id: "salchifarra-especial",
            nombre: "Salchifarra Especial",
            descripcion: "Papas con salchicha, chorizo, morcilla y toppings extra. Para compartir.",
            precio: 40000,
            imagen: IMG.salchifarra,
            destacado: true,
          },
          {
            id: "salchifarra-mega-especial",
            nombre: "Salchifarra Mega Especial",
            descripcion: "La versión más grande: salchicha, chorizo, morcilla y todos los toppings. Para compartir en grupo.",
            precio: 60000,
            imagen: IMG.salchifarra,
            destacado: true,
            etiqueta: "Para compartir",
          },
        ],
      },
      {
        id: "hamburguesas",
        nombre: "Hamburguesa",
        icono: "🍔",
        descripcion: "Carne 100% de res a la parrilla, pan brioche y toppings frescos.",
        productos: [
          {
            id: "hamburguesa-casa",
            nombre: "Hamburguesa de la Casa",
            descripcion: "Carne de res, lechuga, tomate, queso cheddar y salsa especial.",
            precio: 17000,
            imagen: IMG.hamburguesaClasica,
            destacado: true,
          },
          {
            id: "hamburguesa-crosby",
            nombre: "Hamburguesa Crosby",
            descripcion: "Carne de res, tocineta crocante y queso fundido.",
            precio: 16000,
            destacado: true,
            imagen: IMG.hamburguesaCrosby,
          },
          {
            id: "hamburguesa-todo-terreno",
            nombre: "Hamburguesa Todo Terreno",
            descripcion: "Doble carne, aros de cebolla crocantes y salsa BBQ ahumada.",
            precio: 22000,
            imagen: IMG.hamburguesaTerreno,
            destacado: true,
            etiqueta: "Más vendida",
          },
        ],
      },
      {
        id: "combos",
        nombre: "Combos (2 Hamburguesas + 2 Papas)",
        icono: "🍟",
        descripcion: "Para compartir en pareja o duplicar el antojo.",
        productos: [
          {
            id: "combo-doble",
            nombre: "Combo Doble",
            descripcion: "2 Hamburguesas de la Casa/Crosby + 2 porciones de papas.",
            precio: 39900,
            imagen: IMG.hamburguesaClasica,
            destacado: true,
          },
          {
            id: "combo-todo-terreno",
            nombre: "Combo Todo Terreno",
            descripcion: "2 Hamburguesas Todo Terreno + 2 porciones de papas.",
            precio: 49900,
            imagen: IMG.hamburguesaTerreno,
            destacado: true,
          },
        ],
      },
      {
        id: "sandwiches",
        nombre: "Sándwich",
        icono: "🥪",
        descripcion: "Pan artesanal recién tostado con rellenos generosos.",
        productos: [
          {
            id: "sandwich-hawaiano",
            nombre: "Sándwich Hawaiano",
            descripcion: "Jamón, piña y queso derretido.",
            precio: 12000,
            imagen: IMG.sandwichHawaiano,
          },
          {
            id: "sandwich-cubano",
            nombre: "Sándwich Cubano",
            descripcion: "Pollo, tocineta, huevo, lechuga y tomate en pan de 3 capas.",
            precio: 12000,
            imagen: IMG.sandwichCubano,
            destacado: true,
          },
          {
            id: "sandwich-pollo",
            nombre: "Sándwich de Pollo",
            descripcion: "Pechuga a la plancha, queso mozzarella y salsa de la casa.",
            precio: 15000,
            imagen: IMG.sandwichHawaiano,
          },
          {
            id: "sandwich-especial",
            nombre: "Sándwich Especial",
            descripcion: "Jamón, queso derretido y pan tostado en mantequilla, con toppings extra.",
            precio: 17000,
            imagen: IMG.sandwichCubano,
            destacado: true,
          },
        ],
      },
      {
        id: "perros",
        nombre: "Perros",
        icono: "🌭",
        descripcion: "Salchicha jugosa, pan suave y toppings a elección.",
        productos: [
          {
            id: "perro-callejero",
            nombre: "Perro Callejero",
            descripcion: "Salchicha, papas hilo, salsas y queso rallado.",
            precio: 10000,
            imagen: IMG.perroClasico,
          },
          {
            id: "perro-clasico",
            nombre: "Perro Clásico",
            descripcion: "Salchicha, papas hilo, salsas y queso rallado.",
            precio: 14000,
            imagen: IMG.perroClasico,
          },
          {
            id: "perro-ranchero",
            nombre: "Perro Ranchero",
            descripcion: "Salchicha, carnes surtidas al estilo ranchero, salsas y queso.",
            precio: 16000,
            destacado: true,
            imagen: IMG.perroEspecial,
          },
          {
            id: "perro-loco",
            nombre: "Perro Loco",
            descripcion: "Salchicha, tocineta, piña caramelizada y salsa de la casa.",
            precio: 18000,
            imagen: IMG.perroEspecial,
            destacado: true,
            etiqueta: "Recomendado",
          },
        ],
      },
      {
        id: "fin-de-semana",
        nombre: "Fin de Semana",
        icono: "🍽️",
        descripcion: "Platos especiales, disponibles solo viernes a domingo.",
        productos: [
          {
            id: "pechuga-plancha",
            nombre: "Pechuga a la Plancha",
            descripcion: "Pechuga de pollo a la plancha con acompañamientos.",
            precio: 15000,
            imagen: IMG.finDeSemana,
          },
          {
            id: "res-plancha",
            nombre: "Res a la Plancha",
            descripcion: "Carne de res a la plancha con acompañamientos.",
            precio: 16000,
            imagen: IMG.finDeSemana,
          },
          {
            id: "picada-casa",
            nombre: "Picada de la Casa",
            descripcion: "Picada surtida para compartir, en dos tamaños.",
            precio: 25000,
            imagen: IMG.finDeSemana,
            destacado: true,
            etiqueta: "Desde $25.000 hasta $50.000",
          },
        ],
      },
      {
        id: "adicionales",
        nombre: "Adicionales",
        icono: "➕",
        descripcion: "Porción de papa, tocineta o carne para acompañar tu pedido.",
        productos: [
          {
            id: "adicional-papa",
            nombre: "Porción de Papa",
            descripcion: "Porción adicional de papas fritas.",
            precio: 4000,
            imagen: IMG.adicionales,
          },
          {
            id: "adicional-tocineta",
            nombre: "Porción de Tocineta",
            descripcion: "Porción adicional de tocineta crocante.",
            precio: 2000,
            imagen: IMG.adicionales,
          },
          {
            id: "adicional-carne",
            nombre: "Porción de Carne",
            descripcion: "Porción adicional de carne.",
            precio: 6000,
            imagen: IMG.adicionales,
          },
        ],
      },
    ],
  },
];

export const heroImagen = IMG.hero;

export const negocio = {
  nombre: "La Fontana",
  eslogan: "Comidas rápidas y helados — sabor que nace del hogar y se sirve con amor.",
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