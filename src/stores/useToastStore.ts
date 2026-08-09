import { defineStore } from 'pinia';

export const useToastStore = defineStore('toast', {
    state: () => ({
        isVisible: false,
        textColor: '',
        message: '',
        icon: '',
    }),
    actions: {
        show(message: string = '', icon: string = '', textColor: string = 'text-t-primary') {
            this.textColor = textColor;
            this.isVisible = true;
            this.message = message;
            this.icon = icon;

            setTimeout(() => {
                this.isVisible = false;
            }, 4000);
        },
    },
})
