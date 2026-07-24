<script lang="ts">
  import type { SeccionMenu } from "../types/menu";
  import CategoryBlock from "./CategoryBlock.svelte";
  import { reveal } from "../actions/reveal";

  interface Props {
    seccion: SeccionMenu;
  }

  let { seccion }: Props = $props();

  const acentos = ["rosa", "turquesa", "coral"] as const;
</script>

<section id={seccion.id} class="scroll-mt-24 py-16 md:py-24">
  <div class="mx-auto max-w-6xl px-5 md:px-8">
    <header class="mb-12 max-w-2xl" use:reveal>
      <span class="pill glass text-sm font-semibold text-neutral-600">
        <span class="text-base">{seccion.icono}</span>
        Menú
      </span>
      <h2 class="mt-4 text-balance font-display text-3xl font-extrabold text-neutral-900 md:text-5xl">
        {seccion.titulo}
      </h2>
      <p class="mt-3 text-balance text-base text-neutral-500 md:text-lg">
        {seccion.subtitulo}
      </p>
    </header>

    {#each seccion.categorias as categoria, i (categoria.id)}
      <CategoryBlock {categoria} acento={acentos[i % acentos.length]} />
    {/each}
  </div>
</section>
