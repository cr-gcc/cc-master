<script setup lang="ts">
    withDefaults(defineProps<{
        message: string
        type?: string
        isHtml?: boolean
    }>(), {
        type: 'success',
        isHtml: false
    });

    const typeClasses: Record<string, string> = {
        success: 'text-success',
        error: 'text-error',
        warning: 'text-warning'
    };
</script>

<template>
    <div v-if="message" class="text-sm font-medium">
        <div v-if="isHtml" :class="typeClasses[type] || 'text-t-primary'" v-html="message"></div>
        <span v-else :class="typeClasses[type] || 'text-t-primary'">{{ message }}</span>
    </div>
</template>
