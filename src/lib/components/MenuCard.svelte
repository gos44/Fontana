<script lang="ts">
  import type { ProductoMenu } from "../types/menu";
  import { formatearPrecio } from "../data/menu";
  import { reveal } from "../actions/reveal";
  import IconSparkle from "./icons/IconSparkle.svelte";

  interface Props {
    producto: ProductoMenu;
    /** Índice dentro de la grilla, usado para escalonar la animación de entrada */
    index?: number;
    /** Acento de color de marca para el precio y el borde en hover */
    acento?: "rosa" | "turquesa" | "coral";
    /** Tarjeta destacada: imagen más ancha, ocupa 2 columnas en el bento grid */
    grande?: boolean;
  }

  let { producto, index = 0, acento = "rosa", grande = false }: Props = $props();

  // Estado local con Runes: controla el shimmer mientras la imagen carga
  let cargada = $state(false);

  const acentos = {
    rosa: {
      texto: "text-rosa-dark",
      borde: "hover:border-rosa/50",
      halo: "group-hover:shadow-[0_20px_40px_-12px_rgba(255,93,143,0.35)]",
      chip: "bg-rosa text-white",
    },
    turquesa: {
      texto: "text-turquesa-dark",
      borde: "hover:border-turquesa/50",
      halo: "group-hover:shadow-[0_20px_40px_-12px_rgba(0,194,203,0.35)]",
      chip: "bg-turquesa text-white",
    },
    coral: {
      texto: "text-coral-dark",
      borde: "hover:border-coral/50",
      halo: "group-hover:shadow-[0_20px_40px_-12px_rgba(255,154,118,0.4)]",
      chip: "bg-coral text-white",
    },
  } as const;

  // `$derived` recalcula automáticamente cuando cambia `acento`
  const estilo = $derived(acentos[acento]);
</script>

<article
  class={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white
    shadow-card transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card-hover ${estilo.borde}`}
  use:reveal={{ delay: index * 80 }}
>
  <div class={`relative w-full overflow-hidden bg-neutral-100 ${grande ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
    {#if !cargada}
      <div
        class="absolute inset-0 animate-shimmer bg-[length:200%_100%] bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100"
      ></div>
    {/if}
    <img
      src={producto.imagen}
      alt={producto.nombre}
      loading="lazy"
      onload={() => (cargada = true)}
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />

    {#if producto.etiqueta}
      <span
        class={`pill absolute left-3 top-3 shadow-soft ${estilo.chip}`}
      >
        <IconSparkle class="w-3 h-3" />
        {producto.etiqueta}
      </span>
    {/if}
  </div>

  <div class="flex flex-1 flex-col gap-1.5 p-5">
    <div class="flex items-start justify-between gap-3">
      <h4 class={`font-display font-semibold leading-snug text-neutral-900 ${grande ? "text-xl md:text-2xl" : "text-lg"}`}>
        {producto.nombre}
      </h4> 
    </div>
    <p class="text-sm leading-relaxed text-neutral-500">
      {producto.descripcion}
    </p>
    <div class="mt-auto flex items-center justify-between pt-3">
      <span class={`font-display text-xl font-bold ${estilo.texto}`}>
        {formatearPrecio(producto.precio)}
      </span>
    </div>
  </div>
</article>
