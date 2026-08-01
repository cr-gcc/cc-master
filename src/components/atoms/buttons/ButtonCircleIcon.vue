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
    <button :class="`${size} ${bgColor} flex items-center justify-center rounded-full border border-border cursor-pointer`" :title="alt">
        <i :class="`${icon} ${textColor}`"></i>
    </button>
</template>