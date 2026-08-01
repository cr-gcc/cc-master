<script setup lang="ts">
    withDefaults(defineProps<{
        bgColor?: string
        textColor?: string
        icon?: string
        text?: string
    }>(), {
        bgColor: '#fff',
        textColor: 'text-t-primary',
        icon: '',
        text: ''
    })
</script>
<template>
    <button :class="`${bgColor} w-full px-3 py-1 mb-1 border border-border rounded-md flex items-center justify-center gap-2 cursor-pointer`">
        <i :class="`${icon} ${textColor}`"></i> 
        <span :class="`${textColor}`">{{ text }}</span>
    </button>
</template>