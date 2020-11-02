<script lang="ts">
  import Calendar from "$components/Icons/Calendar.svelte";
  import Dollar from "$components/Icons/Dollar.svelte";
  import ItemIcon from "$components/ItemIcon.svelte";
  import type { Expense } from "$types/expense";

  export let item: Expense = {
    id: new Date().getTime(),
    amount: 90,
    memo: "Expense Memo",
    category: "Food",
    date: new Date(),
    items: [],
  };
</script>

<!--<style lang="postcss">
  :global(.item-icon) {
    margin-left: 2px;
  }
</style>-->

<div
  class="mb-6 pb-6 border-b border-gray-300 lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2
      class="text-2xl text-left font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
      {item.memo}
    </h2>
    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
      <div
        class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <ItemIcon category={item.category} class="mr-1 item-icon" />
        {item.category}
      </div>
      <div
        class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
        <Dollar class="mr-1" />
        ${item.amount.toFixed(2)}
      </div>
      <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
        <Calendar class="mr-1" />
        {item.date.toDateString()}
      </div>
    </div>
  </div>
</div>
