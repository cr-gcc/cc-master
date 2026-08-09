import { defineStore } from 'pinia'
import type { AppTheme } from '@/themes'
import { applyTheme } from '@/themes'
import { lightTheme } from '@/themes/defaults'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: lightTheme as AppTheme,
        isLoading: false,
        error: null as string | null
    }),
    actions: {
        async initTheme() {
            if (!this.theme || !this.theme.id || (this.theme.id !== 'light' && this.theme.id !== 'dark')) {
                this.setTheme(lightTheme)
            } else {
                applyTheme(this.theme.colors, this.theme.slug)
            }
        },
        setTheme(newTheme: AppTheme) {
            try {
                this.theme = newTheme
                applyTheme(newTheme.colors, newTheme.slug)
            } catch (err) {
                console.error('[themeStore] Error setting theme:', err)
            }
        }
    },
    persist: {
        pick: ['theme']
    }
})
