<script setup lang="ts">
    withDefaults(defineProps<{
        titleSize?: string;
        textSize?: string;
        title?: string;
        icon?: string;
        items: any[];
    }>(), {
        titleSize: 'text-lg',
        textSize: 'text-sm',
    })
</script>

<template>
    <article class="rounded-xl border border-border bg-surface p-4">
        <div v-if="title || icon" class="flex items-center gap-4">
            <div v-if="icon">
                <i :class="[icon, titleSize, 'text-t-primary']"></i>
            </div>
            <div v-if="title">
                <span :class="titleSize" class="text-t-primary">{{ title }}</span>
            </div>
        </div>
        <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in items" :key="index">
                <div class="block h-full rounded-lg border border-border bg-main p-4 hover:border-t-primary transition-colors">
                    <slot :item="item"></slot>
                </div>
            </li>
        </ul>
    </article>
</template>
