<script lang="ts">
  import { negocio } from "../data/menu";

  const anio = new Date().getFullYear();
</script>

<footer class="relative overflow-hidden bg-neutral-900 py-14 text-neutral-300">
  <div class="pointer-events-none absolute -top-24 right-10 h-64 w-64 rounded-full bg-rosa/20 blur-3xl"></div>
  <div class="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-turquesa/20 blur-3xl"></div>

  <div class="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center md:px-8">
    <span class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-xl shadow-soft">
      🍔
    </span>
    <h3 class="font-display text-2xl font-extrabold text-white">{negocio.nombre}</h3>
    <p class="max-w-sm text-sm text-neutral-400">{negocio.eslogan}</p>

    <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
      <span class="pill glass-dark text-neutral-200">📍 Local principal</span>
      <span class="pill glass-dark text-neutral-200">🕒 Todos los días, 11am – 9pm</span>
      <span class="pill glass-dark text-neutral-200">📞 Domicilios disponibles(NO disponible)</span>
    </div>

    <p class="mt-4 text-xs text-neutral-500">
      © {anio} {negocio.nombre}. Menú digital hecho con Svelte 5 y Tailwind CSS.
    </p>
  </div>
</footer>
