<script setup lang="ts">
    withDefaults(defineProps<{
        title?: string;
        icon?: string;
        titleSize?: string;
    }>(), {
        title: '',
        icon: '',
        titleSize: 'text-md',
    })
</script>

<template>
    <article class="rounded-xl border border-border bg-surface px-4 py-2">
        <p :class="['flex items-center gap-2 mb-1', titleSize]">
            <i v-if="icon" :class="[icon, 'text-t-primary flex items-center']"></i>
            <span v-if="title" :class="['text-t-primary font-semibold flex items-center']">
                {{ title }}
            </span>
        </p>
        <slot name="customized-options"></slot>
    </article>
</template>
