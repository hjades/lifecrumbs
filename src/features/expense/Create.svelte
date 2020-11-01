<script lang="ts">
  import { expenses } from "$features/expenses/store";
  import type { Expense } from "$types/expense";
  import Form from "./Form.svelte";

  async function create(event: any) {
    const draft: Expense = event.detail;
    const date = new Date(draft.date);
    await expenses.add({ ...draft, date });
    window.location.assign("/");
  }
</script>

<Form on:submit={create} />
