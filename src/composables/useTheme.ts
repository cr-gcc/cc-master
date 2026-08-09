import { computed } from 'vue'
import { useThemeStore } from '@/stores/useThemeStore'

export function useTheme() {
  const store = useThemeStore()

  return {
    /** Tema activo actual */
    theme: computed(() => store.theme),
    /** Indica si se está cargando el tema desde la API */
    isLoading: computed(() => store.isLoading),
    /** Error si falló la carga del tema */
    error: computed(() => store.error),
    /** Inicializa el tema (llamar al montar la app) */
    initTheme: store.initTheme,
    /** Cambia el tema activo */
    setTheme: store.setTheme,
  }
}
