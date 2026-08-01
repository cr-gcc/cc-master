<script setup lang="ts">
    import { ref } from 'vue'
    import { useClickOutside } from '../../composables/useClickOutside'

    const isOpen = ref(false)
    const dropdownRef = ref<HTMLElement | null>(null)

    useClickOutside(dropdownRef, () => {
    isOpen.value = false
    })

    const toggle = () => {
    isOpen.value = !isOpen.value
    }

    const close = () => {
    isOpen.value = false
    }
</script>

<template>
  <div ref="dropdownRef" class="relative inline-flex">
    <!-- Trigger slot (Icon, Button, etc) -->
    <div @click="toggle" class="cursor-pointer">
      <slot name="trigger" :is-open="isOpen"></slot>
    </div>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute end-0 top-full mt-2 z-50 min-w-40 w-fit rounded border border-border bg-surface shadow-sm overflow-hidden"
        role="menu"
        @click="close"
      >
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>
