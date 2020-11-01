// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    "src/features": "/_app/features",
  },
  alias: {
    $features: "./src/features",
    $store: "./src/store",
    $types: "./src/types",
  },
};
