<script lang="ts">
  import chocolate from '../images/chocolate.png';
  import oreoBrownie from '../images/oreo-brownie.png';
  import lulo from '../images/vainilla topicsbackground.png';
  import pasas from '../images/pasas.png';
  import fresaMenta from '../images/Fresas.png';

  // ---------- Datos de sabores ----------
  const flavorsBase = [
    { id: 'chocolate', name: 'Chocolate', src: chocolate, isNew: false },
    { id: 'oreo', name: 'Oreo & Brownie', src: oreoBrownie, isNew: true },
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
  let pausado = $state(false);

  function selectFlavor(id: string) {
    if (id !== selectedId) selectedId = id;
  }

  function onKeydown(e: KeyboardEvent, id: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectFlavor(id);
    }
  }

  // Avance automático: cada 3.2s pasa al siguiente sabor, salvo que el usuario
  // esté interactuando con la rueda (hover / foco). Esto evita que se vea "quieta".
  $effect(() => {
    if (pausado) return;
    const id = window.setInterval(() => {
      const idx = flavors.findIndex((f) => f.id === selectedId);
      const siguiente = flavors[(idx + 1) % flavors.length];
      selectedId = siguiente.id;
    }, 3200);
    return () => window.clearInterval(id);
  });
</script>

<section
  id="sabores"
  class="relative w-full overflow-hidden bg-gradient-heladeria font-semibold">

  <div class="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-6 lg:py-20">
    <!-- ============ COLUMNA IZQUIERDA ============ -->
    <div class="flex flex-col justify-center">
      <span class="pill glass w-fit text-sm font-semibold text-rosa-dark">
        <span class="text-base">🍨</span>
        Sabores de la casa
      </span>

      <h2
        class="mt-4 font-display text-5xl font-extrabold uppercase tracking-wide text-neutral-900 sm:text-6xl"
        style="letter-spacing: 0.04em;"
      >
        Heladería
      </h2>

      <p class="mt-5 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
        Elige el sabor de helado de tu preferencia,puede ser una o varios 
        ademas de topics.
      </p>

      <!-- ---------- Rueda de sabores (desktop / tablet: círculo completo, giratoria) ---------- -->
      <div
        class="group relative mx-auto mt-10 hidden aspect-square w-full max-w-[360px] sm:block"
        role="group"
        aria-label="Selector giratorio de sabores"
        onmouseenter={() => (pausado = true)}
        onmouseleave={() => (pausado = false)}
        onfocusin={() => (pausado = true)}
        onfocusout={() => (pausado = false)}
      >
        <!-- anillo punteado decorativo, pulso suave -->
        <div class="absolute inset-[6%] animate-pulse rounded-full border border-dashed border-turquesa/40 [animation-duration:4s]"></div>
        <!-- halo pulsante detrás de la etiqueta central -->
        <div class="absolute inset-[24%] rounded-full bg-gradient-brand/10 blur-xl"></div>

        <!-- etiqueta central -->
        <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <span class="text-[11px] font-semibold uppercase tracking-[0.25em] text-turquesa-dark">
            Elige tu
          </span>
          <span class="font-display text-lg font-bold text-rosa-dark">
            sabor
          </span>
        </div>

        <!-- capa giratoria: rota físicamente alrededor del centro -->
        <div class="wheel-ring absolute inset-0">
          {#each flavors as f (f.id)}
            {@const active = f.id === selectedId}
            <button
              type="button"
              class="absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none"
              style="left:{f.left}; top:{f.top};"
              aria-pressed={active}
              aria-label={f.name}
              onclick={() => selectFlavor(f.id)}
              onkeydown={(e) => onKeydown(e, f.id)}
            >
              <!-- capa contra-rotación: mantiene el ícono y la etiqueta siempre derechos -->
              <span class="wheel-icon-counter flex flex-col items-center gap-1">
                <span
                  class={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-white/80 shadow-soft backdrop-blur-sm transition-all duration-300
                    ${active
                      ? 'scale-110 border-rosa shadow-card-hover ring-2 ring-rosa/30'
                      : 'border-white hover:scale-105 hover:border-turquesa/60'}`}
                >
                  <img src={f.src} alt={f.name} class="h-full w-full scale-125 object-contain" loading="lazy" />
                </span>
                <span
                  class={`max-w-[70px] text-center text-[11px] font-medium leading-tight transition-colors ${
                    active ? 'font-bold text-rosa-dark' : 'text-neutral-500'
                  }`}
                >
                  {f.name}
                </span>
              </span>
            </button>
          {/each}
        </div>
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
              class={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 bg-white/80 shadow-soft transition-all duration-300
                ${active
                  ? 'scale-110 border-rosa shadow-card-hover ring-2 ring-rosa/30'
                  : 'border-white'}`}
            >
              <img src={f.src} alt={f.name} class="h-full w-full scale-125 object-contain" loading="lazy" />
            </span>
            <span
              class="max-w-[70px] text-center text-[11px] font-medium leading-tight"
              class:text-rosa-dark={active}
              class:font-bold={active}
              class:text-neutral-500={!active}
            >
              {f.name}
            </span>
          </button>
        {/each}
      </div>
    </div>

    <!-- ============ COLUMNA DERECHA: helado grande ============ -->
    <div class="relative flex items-center justify-center py-4 lg:py-0">
      <!-- Etiqueta "¡Nuevo!" -->
      {#if selected.isNew}
        <div class="absolute right-4 top-0 z-20 -rotate-6 select-none text-center sm:right-8 sm:top-2">
          <span class="font-display text-2xl font-black italic text-coral-dark sm:text-3xl">
            ¡Nuevo!
          </span>
          <svg viewBox="0 0 100 20" class="mx-auto mt-1 h-3 w-24 sm:h-4 sm:w-28">
            <path d="M2 15 Q 25 2, 50 12 T 98 8" stroke="#FF9A76" stroke-width="2.5" fill="none" stroke-linecap="round" />
          </svg>
        </div>
      {/if}

      <!-- Gotas decorativas removidas para heredar estilo de `Hero` -->

      <!-- sombra en el piso -->
      <div class="pointer-events-none absolute bottom-4 left-1/2 h-6 w-40 -translate-x-1/2 rounded-full bg-rosa-dark/15 blur-md sm:w-52"></div>

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

  /* Rueda giratoria: la capa entera rota alrededor del centro... */
  .wheel-ring {
    animation: wheelSpin 40s linear infinite;
  }

  /* ...mientras cada ícono contra-rota para permanecer siempre derecho */
  .wheel-icon-counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    animation: wheelSpinReverse 40s linear infinite;
  }

  @keyframes wheelSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes wheelSpinReverse {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  /* Se pausa al interactuar (hover/foco) para poder elegir con comodidad */
  .group:hover .wheel-ring,
  .group:focus-within .wheel-ring {
    animation-play-state: paused;
  }
  .group:hover .wheel-icon-counter,
  .group:focus-within .wheel-icon-counter {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .scoop-enter,
    .drop,
    .wheel-ring,
    .wheel-icon-counter {
      animation: none !important;
    }
  }
</style>
