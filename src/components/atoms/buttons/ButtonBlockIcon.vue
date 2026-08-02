<script setup lang="ts">
    withDefaults(defineProps<{
        bgColor?: string
        textColor?: string
        size?: string
        padding?: string
        textSize?: string
        icon?: string
        text?: string
    }>(), {
        bgColor: '#fff',
        textColor: 'text-t-secondary',
        size: 'w-full',
        padding: 'px-3 py-1',
        textSize: 'text-md',
        icon: '',
        text: ''
    })
</script>
<template>
    <button :class="`${bgColor} ${textColor} ${size} ${padding} ${textSize} mb-1 gap-1 border border-border rounded-md hover:bg-secondary hover:text-white  flex items-center justify-center cursor-pointer`">
        <i v-if="icon" :class="icon"></i> 
        <span v-if="text">{{ text }}</span>
    </button>
</template>