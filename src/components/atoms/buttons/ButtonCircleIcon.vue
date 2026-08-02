<script setup lang="ts">
    withDefaults(defineProps<{
        size?: string
        bgColor?: string
        textColor?: string
        icon?: string
        alt?: string
    }>(), {
        size: 'h-9 w-9',
        bgColor: '#fff',
        textColor: 'text-t-primary',
        icon: '',
        alt: ''
    })
</script>

<template>
    <button :class="`${size} ${bgColor} ${textColor} border border-border rounded-full hover:bg-secondary hover:text-white flex items-center justify-center cursor-pointer`" :title="alt">
        <i :class="icon"></i>
    </button>
</template>