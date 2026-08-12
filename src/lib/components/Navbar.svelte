<script lang="ts">
  import { negocio } from "../data/menu";

  let menuAbierto = $state(false);
  let conScroll = $state(false);

  const enlaces = [
    { href: "#hero", label: "Inicio" },
    { href: "#sabores", label: "Sabores" },
    { href: "#heladeria", label: "Heladería" },
    { href: "#comida-rapida", label: "Comida Rápida" },
  ];

  // Efecto: escucha el scroll para añadir sombra/opacidad a la barra
  $effect(() => {
    const alScrollear = () => {
      conScroll = window.scrollY > 12;
    };
    window.addEventListener("scroll", alScrollear, { passive: true });
    alScrollear();
    return () => window.removeEventListener("scroll", alScrollear);
  });

  function irA(href: string) {
    menuAbierto = false;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<header
  class={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
    conScroll ? "py-2.5" : "py-4"
  }`}
>
  <nav
    class={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 md:px-6 ${
      conScroll ? "glass shadow-glass py-2.5" : "py-2.5 bg-transparent"
    }`}
    style="width: min(92%, 72rem);"
  >
    <a href="#hero" onclick={(e) => { e.preventDefault(); irA("#hero"); }} class="flex items-center gap-2">
      <span class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-brand text-lg shadow-soft">
        🍔
      </span>
      <span class="font-display text-lg font-extrabold tracking-tight text-neutral-900">
        {negocio.nombre}
      </span>
    </a>

    <ul class="hidden items-center gap-8 md:flex">
      {#each enlaces as enlace}
        <li>
          <a
            href={enlace.href}
            onclick={(e) => { e.preventDefault(); irA(enlace.href); }}
            class="text-sm font-semibold text-neutral-600 transition-colors hover:text-rosa"
          >
            {enlace.label}
          </a>
        </li>
      {/each}
    </ul>

    <button
      onclick={() => (irA("#heladeria"))}
      class="hidden rounded-full bg-gradient-heladeria px-5 py-2 text-sm font-bold text-white shadow-soft transition-transform hover:scale-105 active:scale-95 md:inline-block"
    >
      Ver Menú
    </button>

    <button
      class="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 md:hidden"
      aria-label="Abrir menú"
      onclick={() => (menuAbierto = !menuAbierto)}
    >
      {#if menuAbierto}
        <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" /></svg>
      {:else}
        <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" /></svg>
      {/if}
    </button>
  </nav>

  {#if menuAbierto}
    <div class="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl p-3 shadow-glass md:hidden" style="width: min(92%, 72rem);">
      {#each enlaces as enlace}
        <a
          href={enlace.href}
          onclick={(e) => { e.preventDefault(); irA(enlace.href); }}
          class="rounded-2xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-rosa/10 hover:text-rosa-dark"
        >
          {enlace.label}
        </a>
      {/each}
    </div>
  {/if}
</header>
