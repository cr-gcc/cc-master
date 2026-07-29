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
    header: '#1f2937',        // gray-800
    footer: '#111827',        // gray-900
    main: '#e5e7eb',          // gray-200
    surface: '#f3f4f6',       // gray-100
    border: '#d1d5db',        // gray-300
    tPrimary: '#111827',      // gray-900
    tSecondary: '#4b5563',    // gray-600
    primary: '#374151',       // gray-700
    primaryHover: '#1f2937',  // gray-800
    secondary: '#4b5563',     // gray-600
    secondaryHover: '#374151',// gray-700
    success: '#10b981',       // emerald-500
    warning: '#f59e0b',       // amber-500
    error: '#f43f5e',         // rose-500
  },
}
