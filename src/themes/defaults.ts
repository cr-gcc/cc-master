import type { AppTheme } from './types'

const lightTheme: AppTheme = {
    id: 'light',
    name: 'Call Center Light',
    slug: 'light',
    isSystem: true,
    colors: {
        // Layout
        header: '#f9fafb',          // gray-50
        footer: '#f3f4f6',          // gray-100
        // Fondo de la aplicación
        main: '#e5e7eb',            // gray-200
        surface: '#ffffff',         // white
        // Bordes
        border: '#d1d5db',          // gray-300
        // Texto
        tPrimary: '#111827',        // gray-900
        tSecondary: '#4b5563',      // gray-600
        // Colores de acción
        primary: '#1f2937',         // gray-800
        primaryHover: '#111827',    // gray-900
        secondary: '#374151',       // gray-700
        secondaryHover: '#1f2937',  // gray-800
        // Estados
        success: '#10b981',         // emerald-500
        warning: '#f59e0b',         // amber-500
        error: '#f43f5e',           // rose-500
    },
}

const darkTheme: AppTheme = {
    id: 'dark',
    name: 'Call Center Dark',
    slug: 'dark',
    isSystem: true,
    colors: {
        // Layout
        header: '#111827',          // gray-900
        footer: '#111827',          // gray-900
        // Fondo
        main: '#030712',            // gray-950
        surface: '#111827',         // gray-900
        // Bordes
        border: '#374151',          // gray-700
        // Texto
        tPrimary: '#f9fafb',        // gray-50
        tSecondary: '#d1d5db',      // gray-300
        // Acciones
        primary: '#d1d5db',         // gray-300
        primaryHover: '#f9fafb',    // gray-50
        secondary: '#9ca3af',       // gray-400
        secondaryHover: '#d1d5db',  // gray-300
        // Estados
        success: '#34d399',         // emerald-400
        warning: '#fbbf24',         // amber-400
        error: '#fb7185',           // rose-400
    },
}

export {
    lightTheme,
    darkTheme
}