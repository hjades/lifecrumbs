import App from "@/App.svelte";

var app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if ("hot" in import.meta && (import.meta as ImportMeta & { hot: any }).hot) {
  const hot = (import.meta as ImportMeta & { hot: any }).hot;
  hot.accept();
  hot.dispose(() => {
    app.$destroy();
  });
}
