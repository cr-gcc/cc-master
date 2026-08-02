<script setup lang="ts">
import AppHeader from '@/components/organisms/header/AppHeader.vue';
import AppFooter from '@/components/organisms/footer/AppFooter.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <AppHeader />
        <main id="main" class="bg-main flex-1 p-4">
            <div class="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
        <AppFooter />
    </div>
</template>