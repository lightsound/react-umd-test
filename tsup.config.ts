import { defineConfig } from "tsup";

export default defineConfig((options) => {
  const isDev = options.env?.NODE_ENV === "development";

  return {
    entry: {
      form: "src/form/index.tsx",
      confirm: "src/confirm/index.tsx",
    },
    outDir: "./public/dist",
    format: ["iife"],
    clean: true,
    treeshake: true,
    watch: isDev,
    sourcemap: isDev,
    minify: !isDev,
  };
});
