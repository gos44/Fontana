<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import IceCreamHero from "./lib/components/IceCreamHero.svelte";
  import MenuSection from "./lib/components/MenuSection.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import { menu } from "./lib/data/menu";
    import Caru from "./lib/components/Caru.svelte";
</script>

<Navbar />

<main>
  <Hero />
  <!-- <IceCreamHero /> -->
  <Caru/>
  {#each menu as seccion (seccion.id)}
    <MenuSection {seccion} />
  {/each}
</main>

<Footer />


