<script setup lang="ts">
    import ModalBase from '@components/molecules/modals/ModalBase.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import { ref } from 'vue';

    const isOpen = defineModel<boolean>({ default: false });
    const deleteOption = ref<boolean>(true);
    const loading = ref<boolean>(false);
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';

    const deleteItem = () => {
        loading.value = true;
        setTimeout(() => {
            deleteOption.value = false;
            loading.value = false;
            alertMessage.value = 'Registro eliminado correctamente';
            alertType.value = 'success';
        }, 1000);
    }

    const resetComponentState = () => {
        deleteOption.value = true;
        loading.value = false;
        alertMessage.value = '';
        alertType.value = '';
    }
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-delete-item"
        modalSize="w-full sm:w-1/2 md:w-1/4"
        title="Eliminar registro"
        titleSize="text-xl"
        textColor="text-t-primary"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding" 
        :buttonTextSize="buttonTextSize"
        :loadingPB="loading"
        :alertMessage="alertMessage"
        :alertType="alertType"
        @close="resetComponentState"
    >
        <template #modal-content>
            <p>¿Desea eliminar el registro de venta del sistema?</p>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon 
                v-if="deleteOption"
                @click="deleteItem()"
                bgColor="bg-surface"
                text="Eliminar"
                :size="buttonSize"
                :padding="buttonPadding"
                :textSize="buttonTextSize"
            />
        </template>
    </ModalBase>
</template>