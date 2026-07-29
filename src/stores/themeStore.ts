import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AppTheme } from '@/themes'
import { applyTheme } from '@/themes'
import { lightTheme } from '@/themes/defaults'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<AppTheme>(lightTheme)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    /**
     * Inicializa el tema:
     * 1. Aplica el tema cacheado (o default) inmediatamente → sin FOUC
     * 2. Cuando haya API: consulta en background y re-aplica si cambió
     */
    async function initTheme() {
        // Sanitizar el tema recuperado del almacenamiento por si es legacy o nulo
        if (!theme.value || !theme.value.id || (theme.value.id !== 'light' && theme.value.id !== 'dark')) {
            setTheme(lightTheme)
        } else {
            applyTheme(theme.value.colors, theme.value.slug)
        }

        // TODO: Cuando se implemente la API, descomentar:
        // try {
        //   isLoading.value = true
        //   const remoteTheme = await fetchTenantTheme()
        //   if (remoteTheme.id !== theme.value.id) {
        //     theme.value = remoteTheme
        //     applyTheme(remoteTheme.colors, remoteTheme.slug)
        //   }
        // } catch (e) {
        //   error.value = e instanceof Error ? e.message : 'Error loading theme'
        //   console.warn('[ThemeStore] Using cached/default theme:', error.value)
        // } finally {
        //   isLoading.value = false
        // }
    }

    /**
     * Cambia el tema activo (ej: desde un panel de admin o selector).
     */
    function setTheme(newTheme: AppTheme) {
        try {
            theme.value = { ...newTheme }
            applyTheme(newTheme.colors, newTheme.slug)
        } catch (err) {
            console.error('[themeStore] Error setting theme:', err)
        }
    }

    return { theme, isLoading, error, initTheme, setTheme }
}, {
    persist: {
        pick: ['theme'],
    },
})
