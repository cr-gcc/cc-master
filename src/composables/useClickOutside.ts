import { onMounted, onUnmounted, type Ref } from 'vue'

export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  callback: (event: MouseEvent) => void
) {
  const listener = (event: MouseEvent) => {
    if (!elementRef.value || elementRef.value.contains(event.target as Node)) {
      return
    }
    callback(event)
  }

  onMounted(() => {
    document.addEventListener('click', listener)
  })

  onUnmounted(() => {
    document.removeEventListener('click', listener)
  })
}
