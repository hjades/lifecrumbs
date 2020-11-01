<script lang="ts">
  import Item from "./Item.svelte";
  import { expenses } from "./store";
</script>

{#each $expenses.list as item (item.id)}
  <Item {item} />
{/each}
