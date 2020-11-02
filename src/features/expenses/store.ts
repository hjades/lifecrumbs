import IDB from "$services/indexedDB";
import type { Expense, Expenses } from "$types/expense";
import { writable } from "svelte/store";

const initState: () => Expenses = () => ({
  list: [],
});

function createExpenses() {
  const { subscribe, update, set } = writable(initState(), (set) =>
    set(initState())
  );

  return {
    subscribe,
    init: async () => {
      const db = new IDB();
      const list = await db.getAll();
      set({ list });
    },
    add: async (expense: Expense) => {
      const db = new IDB();
      await db.add(expense);
      update(({ list }) => ({ list: [...list, expense] }));
    },
    delete: (id: Expense["id"]) =>
      update(({ list }) => ({ list: list.filter((exp) => exp.id !== id) })),
  };
}

export const expenses = createExpenses();
