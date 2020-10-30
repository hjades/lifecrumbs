export interface Item {
  id: string;
  amount: number;
  name: string;
}

export interface Expense extends Item {
  category: ExpenseCategory["id"];
  date: Date;
  items: Item[];
}

export interface ExpenseCategory {
  id: string;
  icon: string;
}

export interface Expenses {
  list: Expense[];
}
