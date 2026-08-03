<script setup lang="ts">
    import { ref } from 'vue';
    import CardBasicOptions from '@/components/molecules/cards/CardBasicOptions.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalClassifyCall from '@/domains/seller/components/modals/ModalClassifyCall.vue'

    const showClassifyCall = ref<boolean>(false);
    
    function endCall() {
        showClassifyCall.value = true;
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
                padding="px-2 py-1" 
                textSize="text-sm" 
                @click="endCall"
            />
            <ButtonBlockIcon 
                bgColor="bg-surface" 
                icon="fa-solid fa-phone" 
                text="Siguiente"
                padding="px-2 py-1" 
                textSize="text-sm" 
                @click="nextCall"
            />
        </template>
    </CardBasicOptions>
    <ModalClassifyCall v-model="showClassifyCall" />
</template>