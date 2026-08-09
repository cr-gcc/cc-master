<script setup lang="ts">
  import { computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useThemeStore } from '@/stores/useThemeStore'

  import MainLayout from '@layouts/MainLayout.vue'
  import BlankLayout from '@layouts/BlankLayout.vue'

  const route = useRoute();
  const themeStore = useThemeStore();

  // Inicializar tema al montar la app
  onMounted(() => {
    themeStore.initTheme();
  });

  const layouts = {
    main: MainLayout,
    blank: BlankLayout,
  };

  const currentLayout = computed(() => {
    const layoutName = (route.meta.layout as keyof typeof layouts) ?? 'main'
    return layouts[layoutName]
  })
</script>

<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>