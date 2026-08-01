<script lang="ts" setup>
    withDefaults(defineProps<{
        titleSize?: string
        textSize?: string
        title?: string
        body?: string
    }>(), {
        titleSize: 'text-lg',
        textSize: 'text-md',
        title: '',
        body: ''
    })
</script>

<template>
    <article class="rounded-xl border border-border bg-surface px-4 py-3 mb-2">
        <div class="mb-3">
            <p :class="[titleSize, 'text-t-primary font-bold mb-1']" v-text="title"></p>
            <div :class="[textSize, 'text-t-primary text-justify']" v-html="body"></div>
        </div>
    </article>
</template>