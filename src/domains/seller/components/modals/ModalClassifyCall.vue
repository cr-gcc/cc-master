<script setup lang="ts">
    import ModalBase from '@components/molecules/modals/ModalBase.vue';
    import ButtonBlockIcon from '@components/atoms/buttons/ButtonBlockIcon.vue';
    
    const isOpen = defineModel<boolean>({ default: false });
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';

    const emit = defineEmits(['closeModal']);

    const classifyCall = () => {
        alert("Se tipifico la llamada")
        isOpen.value = false;
    }
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-save-sale"
        modalSize="w-1/3"
        title="Tipificar llamada"
        titleSize="text-xl"
        textColor="text-t-primary"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding"
        :buttonTextSize="buttonTextSize"
        :closeButton="false"
    >
        <template #modal-content>
            <p>UJU</p>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon 
                bgColor="bg-surface"
                text="Aceptar"
                :size="buttonSize"
                :padding="buttonPadding"
                :textSize="buttonTextSize"
                @click="classifyCall()"
            />  
        </template>
    </ModalBase>
</template>