<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        miniFrame?: boolean
    }>(), {
        miniFrame: false
    });
</script>

<template>
    <article :class="miniFrame === false ? ['rounded-xl border border-border bg-surface px-4 py-2 mb-2'] : ['border border-border rounded-md']">
        <div :class="miniFrame === false ? 'mb-3' : 'mb-1'">
            <slot name="customized-form"/>
        </div>
    </article>
</template>