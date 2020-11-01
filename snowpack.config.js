// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: "@sveltejs/snowpack-config",
  plugins: ["@snowpack/plugin-typescript"],
  mount: {
    "src/features": "/_app/features",
    "src/services": "/_app/services",
  },
  alias: {
    $features: "./src/features",
    $services: "./src/services",
    $store: "./src/store",
    $types: "./src/types",
  },
};
