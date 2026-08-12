<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { negocio, heroImagen } from "../data/menu";
  import IconArrowDown from "./icons/IconArrowDown.svelte";

  let listo = $state(false);

  $effect(() => {
    // Pequeño retardo para orquestar la secuencia de entrada del hero
    const id = window.setTimeout(() => (listo = true), 80);
    return () => window.clearTimeout(id);
  });

  function irAlMenu() {
    document.querySelector("#heladeria")?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<section id="hero" class="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-gradient-hero 
          pb-16 pt-24 md:pb-24 md:pt-28">  <!-- Blobs decorativos: elemento firma que evoca el "goteo" de helado -->
  <div class="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
    <div class="absolute -left-24 top-10 h-72 w-72 animate-blob bg-turquesa-claro/40 blur-3xl"></div>
    <div class="absolute -right-16 top-40 h-80 w-80 animate-blob bg-rosa/30 blur-3xl [animation-delay:2s]"></div>
    <div class="absolute bottom-0 left-1/3 h-64 w-64 animate-blob bg-coral/30 blur-3xl [animation-delay:4s]"></div>
  </div>

  <div class="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-10 md:px-8">
    {#if listo}
      <div in:fly={{ y: 24, duration: 700, delay: 100 }}>
        <span class="pill glass text-sm font-semibold text-rosa-dark">
          <span class="text-base">🍔🍨</span>
          Comida rápida &amp; heladería
        </span>

        <h1 class="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] text-neutral-900 sm:text-5xl md:text-6xl">
          {negocio.nombre}
        </h1>

        <p class="mt-4 max-w-md text-balance text-lg font-medium text-neutral-600 md:text-xl">
          {negocio.eslogan}
        </p>

        <p class="mt-3 max-w-md text-balance text-sm text-neutral-500 md:text-base">
          {negocio.descripcion}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          <button
            onclick={irAlMenu}
            class="group inline-flex items-center gap-2 rounded-full bg-gradient-heladeria px-7 py-3.5 text-base font-bold 
            text-white shadow-soft transition-all hover:scale-105 hover:shadow-card-hover active:scale-95"
          >
            Ver Menú
            <IconArrowDown class="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <div class="flex items-center gap-2 text-sm font-semibold text-neutral-500">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-turquesa-claro/50">⭐</span>
            Hecho fresco cada día
          </div>
        </div>
      </div>
    {/if}

    {#if listo}
      <div class="relative" in:fade={{ duration: 800, delay: 250 }}>
        <div class="relative mx-auto aspect-square w-full max-w-md">
          <div class="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-rosa/40 via-coral/30 to-turquesa/40 blur-2xl"></div>
          <div class="glass relative h-full w-full overflow-hidden rounded-[2.5rem] p-3 shadow-glass">
            <img
              src={heroImagen}
              alt="Selección de comida rápida y helados de {negocio.nombre}"
              class="h-full w-full rounded-[2rem] object-cover"
            />
          </div>

          <div class="glass absolute -left-6 bottom-8 hidden animate-float rounded-2xl px-4 py-3 shadow-glass sm:flex sm:items-center sm:gap-2 [animation-delay:0.5s]">
            <span class="text-2xl">🍦</span>
            <div class="leading-tight">
              <p class="text-xs font-bold text-neutral-800">Heladería</p>
              <p class="text-[11px] text-neutral-500">4 categorías</p>
            </div>
          </div>

          <div class="glass absolute -right-4 top-10 hidden animate-float rounded-2xl px-4 py-3 shadow-glass sm:flex sm:items-center sm:gap-2">
            <span class="text-2xl">🍔</span>
            <div class="leading-tight">
              <p class="text-xs font-bold text-neutral-800">Comida Rápida</p>
              <p class="text-[11px] text-neutral-500">4 categorías</p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
