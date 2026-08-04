import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: process.env.VITE_USE_HASH === 'true' ? process.env.VITE_BASE_URL_HASH : (process.env.VITE_BASE_URL) || "/",
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@app": path.resolve(__dirname, "src/app"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@router": path.resolve(__dirname, "src/router"),
            "@components": path.resolve(__dirname, "src/components"),
        },
    },
});
