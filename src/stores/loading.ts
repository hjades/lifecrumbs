import type { LoadingStore } from "$types/loading";
import { writable } from "svelte/store";

const initState: () => LoadingStore = () => ({ view: false, components: {} });

function createLoading() {
  const { subscribe, update } = writable(initState(), (set) =>
    set(initState())
  );

  return {
    subscribe,
    setView: (isLoading: boolean) =>
      update((store) => ({ ...store, view: isLoading })),
    setComponent: (component: string, isLoading: boolean) =>
      update((store) => ({
        ...store,
        components: { ...store.components, [component]: isLoading },
      })),
  };
}

export const loading = createLoading();
