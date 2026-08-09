<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
    to?: RouteLocationRaw;
    isMobile?: boolean;
}>();
</script>

<template>
    <router-link
        v-if="to"
        :to="to"
        :class="[
            'transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary',
            isMobile ? 'block w-full text-left' : ''
        ]"
    >
        <slot></slot>
    </router-link>
    <button
        v-else
        type="button"
        :class="[
            'transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary cursor-pointer',
            isMobile ? 'block w-full text-left' : ''
        ]"
    >
        <slot></slot>
    </button>
</template>
