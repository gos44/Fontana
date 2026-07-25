<script lang="ts">
  /**
   * IceCreamHero.svelte — Svelte 5 (runes) + Tailwind
   *
   * Instalación:
   *   1. Copia este archivo y la carpeta "images/" (al lado del componente,
   *      misma carpeta) dentro de tu proyecto, p.ej. en src/lib/.
   *   2. Úsalo en cualquier página:  <IceCreamHero />
   *
   */

  import chocolate from '../images/chocolate.png';
  import oreoBrownie from '../images/oreo-brownie.png';
  import lulo from '../images/vainilla topicsbackground.png';
  import pasas from '../images/pasas.png';
  import fresaMenta from '../images/Fresas.png';

  // ---------- Datos de sabores ----------
  const flavorsBase = [
    { id: 'chocolate', name: 'Chocolate', src: chocolate, isNew: false },
    { id: 'oreo', name: 'Oreo & Brownie', src: oreoBrownie, isNew: false },
    { id: 'lulo', name: 'Lulo', src: lulo, isNew: false },
    { id: 'pasas', name: 'Ron con Pasas', src: pasas, isNew: false },
    { id: 'fresamenta', name: 'Fresa & menta', src: fresaMenta, isNew: false }
  ];

  // Calcula la posición de cada sabor sobre un círculo completo (la "rueda")
  const n = flavorsBase.length;
  const radius = 42; // % del contenedor
  const flavors = flavorsBase.map((f, i) => {
    const angle = (-90 + (i * 360) / n) * (Math.PI / 180); // empieza arriba, sentido horario
    const left = 50 + radius * Math.cos(angle);
    const top = 50 + radius * Math.sin(angle);
    return { ...f, left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` };
  });

  // ---------- Estado ----------
  let selectedId = $state(flavors[0].id);
  let selected = $derived(flavors.find((f) => f.id === selectedId) ?? flavors[0]);

  function selectFlavor(id : string) {
    if (id !== selectedId) selectedId = id;
  }

  function onKeydown(e: KeyboardEvent, id: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectFlavor(id);
    }
  }
</script>

<section
  class="relative w-full overflow-hidden bg-gradient-to-br from-[#FBEEEF] via-[#FCE3E7] to-[#F8D6DC] font-semibold"
>
  <!-- Blobs decorativos ambientales -->
  <div
    class="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#fff3e9] to-transparent opacity-70 blur-2xl"
  ></div>
  <div
    class="pointer-events-none absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gradient-to-bl from-[#f9c9d3] to-transparent opacity-60 blur-3xl"
  ></div>

  <div class="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-16">
    <!-- ============ COLUMNA IZQUIERDA ============ -->
    <div class="flex flex-col justify-center">

      <h1
        class="mt-2 font-semibold text-5xl  uppercase tracking-wide text-[#6E2634] sm:text-6xl"
        style="letter-spacing: 0.04em;"
      >
        Heladería
      </h1>

      <p class="mt-5 max-w-md text-sm leading-relaxed text-[#7A5A5F] sm:text-base">
        Cada bola se sirve al momento, con fruta real y toppings crocantes.
        Gira la rueda, elige tu sabor y mira cómo cobra vida en grande, a la
        derecha.
      </p>



      <!-- ---------- Rueda de sabores (desktop / tablet: círculo completo) ---------- -->
      <div class="relative mx-auto mt-10 hidden aspect-square w-full max-w-[360px] sm:block">
        <!-- anillo punteado decorativo -->
        <div class="absolute inset-[8%] rounded-full border border-dashed border-[#B9808C]/50"></div>

        <!-- etiqueta central -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B9808C]">
            Elige tu
          </span>
          <span class="font-[Fraunces,ui-serif,Georgia] text-lg font-bold text-[#6E2634]">
            sabor
          </span>
        </div>

        {#each flavors as f (f.id)}
          {@const active = f.id === selectedId}
          <button
            type="button"
            class="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full focus:outline-none"
            style="left:{f.left}; top:{f.top};"
            aria-pressed={active}
            aria-label={f.name}
            onclick={() => selectFlavor(f.id)}
            onkeydown={(e) => onKeydown(e, f.id)}
          >
            <span
              class={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-white/70 shadow-md backdrop-blur-sm transition-all duration-300
                ${active
                  ? 'border-[#7A2E38] ring-2 ring-[#7A2E38]/30 scale-110 shadow-lg'
                  : 'border-white'}`}
            >
              <img src={f.src} alt={f.name} class="h-full w-full scale-125 object-contain" loading="lazy" />
            </span>
            <span
              class="max-w-[70px] text-center text-[11px] font-medium leading-tight transition-colors"
              class:text-[#6E2634]={active}
              class:font-bold={active}
              class:text-[#B9808C]={!active}
            >
              {f.name}
            </span>
          </button>
        {/each}
      </div>

      <!-- ---------- Rueda de sabores (mobile: fila horizontal con scroll) ---------- -->
      <div class="mt-8 -mx-6 flex gap-4 overflow-x-auto px-6 pb-2 sm:hidden">
        {#each flavors as f (f.id)}
          {@const active = f.id === selectedId}
          <button
            type="button"
            class="flex shrink-0 flex-col items-center gap-1 focus:outline-none"
            aria-pressed={active}
            aria-label={f.name}
            onclick={() => selectFlavor(f.id)}
            onkeydown={(e) => onKeydown(e, f.id)}
          >
            <span
              class={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-white/70 shadow-md transition-all duration-300
                ${active
                  ? 'border-[#7A2E38] ring-2 ring-[#7A2E38]/30 scale-110 shadow-lg'
                  : 'border-white'}`}
            >
              <img src={f.src} alt={f.name} class="h-full w-full scale-125 object-contain" loading="lazy" />
            </span>
            <span
              class="max-w-[70px] text-center text-[11px] font-medium leading-tight"
              class:text-[#6E2634]={active}
              class:font-bold={active}
              class:text-[#B9808C]={!active}
            >
              {f.name}
            </span>
          </button>
        {/each}
      </div>
    </div>

    <!-- ============ COLUMNA DERECHA: helado grande ============ -->
    <div class="relative flex items-center justify-center py-4 lg:py-0">
      <!-- salpicadura tipo leche, decorativa -->
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[85%] w-[85%] -translate-x-1/2 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-white/80 via-white/40 to-transparent blur-md"
      ></div>

      <!-- Etiqueta "¡Nuevo!" -->
      {#if selected.isNew}
        <div class="absolute right-4 top-0 z-20 -rotate-6 select-none text-center sm:right-8 sm:top-2">
          <span class="font-[Fraunces,ui-serif,Georgia] text-2xl font-black italic text-[#2B1A1A] sm:text-3xl">
            ¡Nuevo!
          </span>
          <svg viewBox="0 0 100 20" class="mx-auto mt-1 h-3 w-24 sm:h-4 sm:w-28">
            <path d="M2 15 Q 25 2, 50 12 T 98 8" stroke="#2B1A1A" stroke-width="2.5" fill="none" stroke-linecap="round" />
          </svg>
        </div>
      {/if}

      <!-- gotas ambientales -->
      <span class="drop pointer-events-none absolute left-6 top-8 h-3 w-3 rounded-full bg-white/70 sm:h-4 sm:w-4"></span>
      <span class="drop pointer-events-none absolute right-12 top-20 h-2 w-2 rounded-full bg-white/60" style="animation-delay:.6s"></span>
      <span class="drop pointer-events-none absolute bottom-10 left-10 h-3 w-3 rounded-full bg-white/50" style="animation-delay:1.1s"></span>

      <!-- sombra en el piso -->
      <div class="pointer-events-none absolute bottom-4 left-1/2 h-6 w-40 -translate-x-1/2 rounded-full bg-[#7A2E38]/15 blur-md sm:w-52"></div>

      {#key selected.id}
        <img
          src={selected.src}
          alt={selected.name}
          class="scoop-enter relative z-10 h-[300px] w-auto max-w-[85%] object-contain drop-shadow-2xl sm:h-[380px] lg:h-[440px]"
        />
      {/key}
    </div>
  </div>
</section>

<style>
  /* Animación de entrada del helado al cambiar de sabor */
  .scoop-enter {
    animation: scoopIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: 50% 85%;
  }

  @keyframes scoopIn {
    0% {
      opacity: 0;
      transform: translateY(-30px) scale(0.8) rotate(-6deg);
    }
    60% {
      opacity: 1;
      transform: translateY(4px) scale(1.05) rotate(2deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1) rotate(0deg);
    }
  }

  /* Gotas ambientales flotando */
  .drop {
    animation: floaty 3.5s ease-in-out infinite;
  }

  @keyframes floaty {
    0%,
    100% {
      transform: translateY(0);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .scoop-enter,
    .drop {
      animation: none !important;
    }
  }
</style>
