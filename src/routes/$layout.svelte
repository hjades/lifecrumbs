<script>
  import Nav from "$components/Nav.svelte";
  import TailwindCSS from "$components/TailwindCSS.svelte";
</script>

<style lang="postcss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    @apply text-center p-4;
    margin: 0 auto;
  }
</style>

<TailwindCSS />
<main>
  <Nav />
  <slot />
</main>
