import { defineStore } from "pinia";

export const useSplashStore = defineStore("app", {
    state: () => ({
        loading: false,
    }),

    actions: {
        setLoading(value: boolean): void {
            this.loading = value;
        },
        show(): void {
            this.loading = true;
        },
        hide(): void {
            this.loading = false;
        }
    }
});
