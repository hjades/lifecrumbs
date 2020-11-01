import type { Expense, Expenses } from "$types/expense";
import { writable } from "svelte/store";

const initState: () => Expenses = () => ({
  list: [
    {
      id: new Date("2020/08/08").toString(),
      amount: 90,
      memo: "Expense Memo 1",
      category: "Food",
      date: new Date("2020/08/08"),
      items: [],
    },
    {
      id: new Date("2020/08/09").toString(),
      amount: 90,
      memo: "Expense Memo 2",
      category: "Bills",
      date: new Date("2020/08/09"),
      items: [],
    },
  ],
});

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
