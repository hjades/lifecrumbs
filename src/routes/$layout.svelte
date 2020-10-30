<script>
  import Nav from "$components/Nav.svelte";
  import TailwindCSS from "$components/TailwindCSS/TailwindCSS.svelte";

  export let segment;
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
<Nav {segment} />
<main>
  <slot />
</main>
