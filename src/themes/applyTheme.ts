import type { ThemeColors } from './types'

/**
 * Inyecta los tokens del tema como CSS custom properties en :root.
 * Función pura — su único side effect es el DOM.
 *
 * Convención de nombres:
 *   ThemeColors.textPrimary  →  --color-text-primary  (CSS var)
 *   En Tailwind:  text-text-primary, bg-text-primary, etc.
 */
export function applyTheme(colors: ThemeColors, themeSlug: string): void {
  const root = document.documentElement

  for (const [key, value] of Object.entries(colors)) {
    const cssVarName = `--color-${camelToKebab(key)}`
    root.style.setProperty(cssVarName, value)
  }

  root.setAttribute('data-theme', themeSlug)
}

/** textPrimary → text-primary */
function camelToKebab(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
}
