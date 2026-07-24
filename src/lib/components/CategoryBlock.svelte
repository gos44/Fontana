<script lang="ts">
  import type { CategoriaMenu } from "../types/menu";
  import MenuCard from "./MenuCard.svelte";
  import { reveal } from "../actions/reveal";

  interface Props {
    categoria: CategoriaMenu;
    acento?: "rosa" | "turquesa" | "coral";
  }

  let { categoria, acento = "rosa" }: Props = $props();

  const barra = {
    rosa: "bg-rosa",
    turquesa: "bg-turquesa",
    coral: "bg-coral",
  } as const;

  const fondoIcono = {
    rosa: "bg-rosa/10 text-rosa-dark",
    turquesa: "bg-turquesa/10 text-turquesa-dark",
    coral: "bg-coral/10 text-coral-dark",
  } as const;
</script>

<div class="mb-14 last:mb-0" id={categoria.id}>
  <div class="mb-5 flex items-center gap-3" use:reveal>
    <span class={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${fondoIcono[acento]}`}>
      {categoria.icono}
    </span>
    <div>
      <h3 class="font-display text-xl font-bold text-neutral-900 md:text-2xl">
        {categoria.nombre}
      </h3>
      <p class="text-sm text-neutral-500">{categoria.descripcion}</p>
    </div>
    <span class={`ml-auto hidden h-1.5 flex-1 max-w-24 rounded-full sm:block ${barra[acento]}`}></span>
  </div>

  <div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
    {#each categoria.productos as producto, i (producto.id)}
      <div class={producto.destacado ? "col-span-2" : "col-span-1"}>
        <MenuCard {producto} index={i} {acento} grande={producto.destacado} />
      </div>
    {/each}
  </div>
</div>
