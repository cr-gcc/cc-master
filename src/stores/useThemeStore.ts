import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { AppTheme } from '@/themes'
import { applyTheme } from '@/themes'
import { lightTheme, darkTheme } from '@/themes/defaults'
import { useDark, useToggle } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
    const isDark = useDark({
        onChanged: (dark: boolean) => {
            const currentTheme = dark ? darkTheme : lightTheme
            applyTheme(currentTheme.colors, currentTheme.slug)
        }
    })
    
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const theme = computed<AppTheme>(() => isDark.value ? darkTheme : lightTheme)

    async function initTheme() {
        const currentTheme = isDark.value ? darkTheme : lightTheme
        applyTheme(currentTheme.colors, currentTheme.slug)
    }

    function setTheme(newTheme: AppTheme) {
        try {
            isDark.value = newTheme.slug === 'dark'
        } catch (err) {
            console.error('[themeStore] Error setting theme:', err)
        }
    }

    function toggleTheme() {
        const toggle = useToggle(isDark)
        toggle()
    }

    return {
        isDark,
        isLoading,
        error,
        theme,
        initTheme,
        setTheme,
        toggleTheme
    }
})
