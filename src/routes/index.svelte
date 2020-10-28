<script>
  import Counter from "$components/Counter.svelte";
</script>

<style lang="postcss">
  h1 {
    @apply p-5 bg-blue-800;
    color: turquoise;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>

<h1>Hello world! <span class="text-red-200">Jade</span></h1>
<Counter />
