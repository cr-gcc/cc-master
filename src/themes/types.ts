/**
 * Tokens semánticos del tema.
 * Los componentes NUNCA usan colores crudos, siempre estos tokens.
 */
export interface ThemeColors {
  // Superficies
  header: string
  footer: string
  main: string
  surface: string
  border: string

  // Texto
  textPrimary: string
  textSecondary: string

  // Acciones
  primary: string
  primaryHover: string

  // Semánticos
  success: string
  warning: string
  error: string
}

/**
 * Tema completo como vendrá de la API (o hardcodeado por defecto).
 */
export interface AppTheme {
  id: string
  name: string
  slug: string
  isSystem: boolean
  colors: ThemeColors
}
