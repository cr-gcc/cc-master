import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const useHash = env.VITE_USE_HASH === 'true';
    const base = useHash ? env.VITE_BASE_URL_HASH : (env.VITE_BASE_URL || '/');

    return {
        base,
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
    };
});

