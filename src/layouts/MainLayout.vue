<script setup lang="ts">
import AppHeader from '@/components/organisms/Header/AppHeader.vue';
import AppFooter from '@/components/organisms/Footer/AppFooter.vue';
</script>

<template>
    <AppHeader />
    <div id="main-layout">
        <h1>Main Layout</h1>
        <slot />
    </div>
    <AppFooter />
</template>