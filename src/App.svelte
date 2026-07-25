<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import MenuSection from "./lib/components/MenuSection.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import IceCreamHero from "./lib/components/IceCreamHero.svelte"
  import { menu } from "./lib/data/menu";
</script>

<Navbar />

<main>
  <Hero />

  {#each menu as seccion (seccion.id)}
  
    <MenuSection {seccion} />
  {/each}
</main>

<Footer />


