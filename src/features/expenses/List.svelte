<script lang="ts">
  import Item from "./Item.svelte";

  const items = [1, 2];
</script>

{#each items as item}
  <Item />
{/each}
