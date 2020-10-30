export interface LoadingStore {
  view: boolean;
  components: {
    [key: string]: boolean;
  };
}
