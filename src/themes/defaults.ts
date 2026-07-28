import type { AppTheme } from './types'

/**
 * Tema por defecto — Zinc.
 * Se usa como fallback si no hay cache ni respuesta de API.
 * La app NUNCA se queda sin tema.
 */
export const defaultTheme: AppTheme = {
  id: 'default',
  name: 'Call Center Default',
  slug: 'default',
  isSystem: true,
  colors: {
    header:        '#27272a', // zinc-800
    footer:        '#18181b', // zinc-900
    main:          '#e4e4e7', // zinc-200
    surface:       '#f4f4f5', // zinc-100
    border:        '#d4d4d8', // zinc-300
    textPrimary:   '#18181b', // zinc-900
    textSecondary: '#52525b', // zinc-600
    primary:       '#3f3f46', // zinc-700
    primaryHover:  '#27272a', // zinc-800
    success:       '#10b981', // emerald-500
    warning:       '#f59e0b', // amber-500
    error:         '#f43f5e', // rose-500
  },
}
