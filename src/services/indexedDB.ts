import type { Expense } from "$types/expense";
import { IDBPDatabase, openDB } from "idb";

export default class IDB {
  public db: IDBPDatabase;

  private async init() {
    const db = await openDB("lifecrumbs", 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains("expenses")) {
          db.createObjectStore("expenses", { keyPath: "id" });
        }
      },
    });
    this.db = db;
    return this;
  }

  public async getAll() {
    if (!this.db) {
      await this.init();
    }
    const store = this.db
      .transaction("expenses", "readonly")
      .objectStore("expenses");
    const value = await store.getAll();
    return value;
  }

  public async add(expense: Expense) {
    if (!this.db) {
      await this.init();
    }
    const store = this.db
      .transaction("expenses", "readwrite")
      .objectStore("expenses");
    const value = await store.add(expense);
    return value;
  }
}
