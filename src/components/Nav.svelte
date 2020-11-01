<script lang="ts">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-current w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
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
