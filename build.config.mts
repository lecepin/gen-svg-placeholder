import { defineConfig } from "@ice/pkg";

// https://pkg.ice.work/reference/config/
export default defineConfig({
  plugins: [
    [
      "@ice/pkg-plugin-docusaurus",
      {
        baseUrl: "/gen-svg-placeholder/build/",
      },
    ],
  ],
});
