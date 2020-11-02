<script lang="ts">
  import Bills from "./Icons/Bills.svelte";
  import Food from "./Icons/Food.svelte";
  import Transportation from "./Icons/Transportation.svelte";

  let className;

  export { className as class };
  export let category = "Food";

  const iconMap = {
    Bills,
    Food,
    Transportation,
  };
</script>

<svelte:component this={iconMap[category] || Food} class={className} />
