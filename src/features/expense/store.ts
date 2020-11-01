import type { Expense } from "$types/expense";
import { writable } from "svelte/store";

const initState: () => Expense = () => ({
  id: new Date().getTime(),
  amount: 0,
  memo: "",
  category: "Food",
  date: new Date(),
  items: [],
});

function createExpense() {
  const { subscribe, set, update } = writable(initState(), (set) =>
    set(initState())
  );

  return {
    subscribe,
    new: () => set(initState()),
    edit: (field: keyof Expense, value: Expense[keyof Expense]) =>
      update((exp) => {
        return { ...exp, [field]: value };
      }),
  };
}

export const expense = createExpense();
