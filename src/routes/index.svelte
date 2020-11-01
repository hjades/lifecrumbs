<script lang="ts">
  import List from "$features/expenses/List.svelte";
  import { expenses } from "$features/expenses/store";
  import { onMount } from "svelte";

  onMount(async () => {
    await expenses.init();
  });
</script>

<List />
