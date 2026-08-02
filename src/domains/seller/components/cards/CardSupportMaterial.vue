<script setup lang="ts">
    import CardBasicOptions from '@/components/molecules/cards/CardBasicOptions.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
</script>

<template>
    <CardBasicOptions title="Material de apoyo" titleSize="text-lg">
        <template #customized-options>
            <ButtonBlockIcon 
                bgColor="bg-surface" 
                icon="fa-solid fa-file-lines" 
                text="Guía de ventas"
                padding="px-2 py-1"
                textSize="text-sm"
            />
            <ButtonBlockIcon 
                bgColor="bg-surface" 
                icon="fa-solid fa-file-lines" 
                text="Tipificaciones"
                padding="px-2 py-1"
                textSize="text-sm"
            />
        </template>
    </CardBasicOptions>
</template>