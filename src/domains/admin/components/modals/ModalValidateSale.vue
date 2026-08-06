<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    import FormClientInfo from '@/components/organisms/form/FormClientInfo.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import FormRecords from '@/domains/admin/components/forms/FormRecords.vue';
    import FormRecordReview from '@/domains/admin/components/forms/FormRecordReview.vue';
    import { ref } from 'vue';

    const isOpen = defineModel<boolean>({ default: false });
    const alertMsg = ref<string>('');
    const alertType = ref<'success' | 'error' | ''>('');
    const loading = ref<boolean>(false);
    const sended = ref<boolean>(false);

    const sendValidation = () => {
        loading.value = true;
        alertMsg.value = '';
        alertType.value = '';
        
        setTimeout(() => {
            alertMsg.value = 'La información de la venta ha sido enviada correctamente';
            alertType.value = 'success';
            loading.value = false;
            sended.value = true;
        }, 2000);
    };

    const clearComponentState = () => {
        alertMsg.value = '';
        alertType.value = '';
        loading.value = false;
        sended.value = false;
    };
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-validate-sale"
        modalSize="w-full sm:w-3/4"
        title="Validar venta"
        titleSize="text-2xl"
        textColor="text-t-primary"
        :alertMessage="alertMsg"
        :alertType="alertType"
        :loadingPB="loading"
        @close="clearComponentState"
    >
        <template #modal-content>
            <FormClientInfo />
            <FormRecords />
            <FormRecordReview />
        </template>
        <template #modal-footer>
            <ButtonBlockIcon
                v-if="sended==false"
                @click="sendValidation"
                bgColor="bg-surface"
                text="Enviar"
                size="w-auto"
                padding="px-2 py-0.5"
                textSize="text-sm"
            />
        </template>
    </ModalBase>
</template>