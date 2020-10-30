import type { Expense, Expenses } from "$types/expense";
import { writable } from "svelte/store";

const initState: () => Expenses = () => ({ list: [] });

function createExpenses() {
  const { subscribe, update } = writable(initState(), (set) =>
    set(initState())
  );

  return {
    subscribe,
    add: (expense: Expense) =>
      update(({ list }) => ({ list: [...list, expense] })),
    delete: (id: Expense["id"]) =>
      update(({ list }) => ({ list: list.filter((exp) => exp.id !== id) })),
  };
}

export const expenses = createExpenses();
