<script lang="ts">
  import Home from "$components/Icons/Home.svelte";

  export let segment;
</script>

<style lang="postcss">
  @layer components {
    .container {
      max-width: none;
    }
  }
</style>

<nav
  class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-800 mb-3">
  <div class="container px-4 flex flex-wrap items-center justify-between">
    <div class="w-auto">
      <a
        class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
        href="/">
        LifeCrumbs
      </a>
    </div>
    <div class="flex items-center">
      {#if segment === 'new'}
        <a
          class="text-white cursor-pointer px-3 py-1 block outline-none hover:opacity-75 focus:outline-none"
          href="/">
          <Home />
        </a>
      {:else}
        <a
          class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="/new">
          New
        </a>
      {/if}
    </div>
  </div>
</nav>
