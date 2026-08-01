<script setup lang="ts">
    import CardBasicOptions from '@/components/molecules/CardBasicOptions.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    
    function endCall() {
        alert('colgar')
    }

    function nextCall() {
        alert('siguiente')
    }
</script>

<template>
    <CardBasicOptions title="Opciones de llamada" titleSize="text-lg">
        <template #customized-options>
            <ButtonBlockIcon 
                bgColor="bg-surface" 
                icon="fa-solid fa-phone-slash" 
                text="Colgar"
                @click="endCall"
            />
            <ButtonBlockIcon 
                bgColor="bg-surface" 
                icon="fa-solid fa-phone" 
                text="Siguiente"
                @click="nextCall"
            />
        </template>
    </CardBasicOptions>
</template>