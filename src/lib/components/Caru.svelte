<script lang="ts">
  import chocolate from '../images/chocolate.png';
  import oreoBrownie from '../images/oreo-brownie.png';
  import lulo from '../images/vainilla topicsbackground.png';
  import pasas from '../images/pasas.png';
  import fresaMenta from '../images/Fresas.png';

  const flavors = [
    { id: 'chocolate', name: 'Chocolate', src: chocolate, isNew: false },
    { id: 'oreo', name: 'Oreo & Brownie', src: oreoBrownie, isNew: true },
    { id: 'lulo', name: 'Lulo', src: lulo, isNew: false },
    { id: 'pasas', name: 'Ron con Pasas', src: pasas, isNew: false },
    { id: 'fresamenta', name: 'Fresa & menta', src: fresaMenta, isNew: false }
  ];

  let selected = $state(0);
  const current = $derived(flavors[selected]);

  function select(index: number) {
    selected = index;
  }

  function previous() {
    selected = (selected - 1 + flavors.length) % flavors.length;
  }

  function next() {
    selected = (selected + 1) % flavors.length;
  }

  function position(index: number) {
    const total = flavors.length;
    let diff = index - selected;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  }
</script>

<section id="sabores" class="relative w-full overflow-hidden bg-gradient-heladeria py-20 font-sans">
  
  <!-- Glow decorativo de fondo -->
  <div class="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-200/40 via-purple-200/40 to-cyan-200/40 blur-3xl"></div>

  <div class="relative mx-auto max-w-6xl px-4">
    
    <!-- Flecha izquierda -->
    <button
      onclick={previous}
      aria-label="Anterior"
      class="absolute left-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white hover:text-pink-500 focus:outline-none md:left-12"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Carrusel 3D -->
    <div 
      class="relative mx-auto flex h-[450px] w-full max-w-4xl items-center justify-center" 
      style="perspective: 1200px;"
    >
      {#each flavors as flavor, i}
        {@const diff = position(i)}
        {@const isActive = diff === 0}
        
        <button
          onclick={() => select(i)}
          class="absolute flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style="
            transform: 
              translateX({diff * 180}px) 
              translateZ({isActive ? 200 : Math.abs(diff) === 1 ? -50 : -200}px) 
              rotateY({diff * -20}deg) 
              scale({isActive ? 1.1 : 0.85});
            z-index: {100 - Math.abs(diff)};
            opacity: {Math.abs(diff) > 2 ? 0 : 1 - (Math.abs(diff) * 0.15)};
            pointer-events: {Math.abs(diff) > 2 ? 'none' : 'auto'};
          "
        >
          <!-- Contenedor del producto -->
          <div class="relative flex items-center justify-center {isActive ? 'animate-float' : ''}">
            
            <!-- Círculo de fondo con efecto Glassmorphism -->
            <div class={`
              absolute inset-0 rounded-full transition-all duration-700
              ${isActive 
                ? 'bg-gradient-to-br from-white/90 to-white/60 shadow-[0_20px_50px_rgba(236,72,153,0.15)] ring-4 ring-white/50 backdrop-blur-md' 
                : 'bg-white/40 shadow-lg backdrop-blur-sm'}
            `}></div>

            <!-- Imagen -->
            <img
              src={flavor.src}
              alt={flavor.name}
              class={`
                relative z-10 object-contain transition-all duration-700 drop-shadow-xl
                ${isActive ? 'h-72 w-72 p-6' : 'h-52 w-52 p-4 opacity-70'}
              `}
            />

            <!-- Etiqueta de "Nuevo" -->
            {#if flavor.isNew}
              <span class={`
                absolute top-2 z-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-700
                ${isActive ? 'right-4 scale-100' : 'right-0 scale-75 opacity-50'}
              `}>
                Nuevo
              </span>
            {/if}
          </div>

          <!-- Sombra en el piso -->
          <div class={`
            mt-8 h-4 w-32 rounded-[100%] bg-black/10 blur-md transition-all duration-700
            ${isActive ? 'scale-100 opacity-60' : 'scale-75 opacity-30'}
          `}></div>
        </button>
      {/each}
    </div>

    <!-- Flecha derecha -->
    <button
      onclick={next}
      aria-label="Siguiente"
      class="absolute right-4 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white hover:text-pink-500 focus:outline-none md:right-12"
    >
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  <!-- Información del sabor actual -->
  <div class="relative z-10 mt-6 flex flex-col items-center text-center">
    <h2 class="text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl">
      {current.name}
    </h2>
    <p class="mt-3 text-lg font-medium text-slate-500">
      Escoge tu sabor favorito.
    </p>
    
    {#if current.isNew}
      <div class="mt-4 flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-bold text-cyan-700">
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Nuevo lanzamiento
      </div>
    {/if}
  </div>

  <!-- Miniaturas de navegación -->
  <div class="relative z-10 mt-12 flex flex-wrap justify-center gap-4 px-4">
    {#each flavors as flavor, i}
      <button
        onclick={() => select(i)}
        class={`
          group relative flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300
          ${selected === i 
            ? 'scale-110 ring-4 ring-pink-400 ring-offset-4 ring-offset-slate-50' 
            : 'hover:scale-105 hover:ring-2 hover:ring-pink-300 hover:ring-offset-2 hover:ring-offset-slate-50'}
        `}
      >
        <div class="absolute inset-0 rounded-full bg-white shadow-md transition-all group-hover:shadow-lg"></div>
        <img
          src={flavor.src}
          alt={flavor.name}
          class={`relative z-10 h-14 w-14 object-contain transition-all duration-300 ${selected === i ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}
        />
      </button>
    {/each}
  </div>

</section>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  .animate-float {
    animation: float 3.5s ease-in-out infinite;
  }
</style>