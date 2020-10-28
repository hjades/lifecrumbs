<script>
  import Nav from "$components/Nav.svelte";
</script>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    @apply text-center p-4;
    margin: 0 auto;
  }
</style>

<main>
  <Nav />
  <slot />
</main>
