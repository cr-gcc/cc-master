<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    import FormClientInfo from '@/components/organisms/form/FormClientInfo.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import FormRecords from '@/domains/admin/components/forms/FormRecords.vue';
    import FormRecordReview from '@/domains/admin/components/forms/FormRecordReview.vue';

    const isOpen = defineModel<boolean>({ default: false });
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-validate-sale"
        modalSize="w-full sm:w-3/4"
        title="Validar venta"
        titleSize="text-2xl"
        textColor="text-t-primary"
    >
        <template #modal-content>
            <FormClientInfo />
            <FormRecords />
            <FormRecordReview />
        </template>
        <template #modal-footer>
            <ButtonBlockIcon
                bgColor="bg-surface"
                text="Enviar"
                size="w-auto"
                padding="px-2 py-0.5"
                textSize="text-sm"
            />
        </template>
    </ModalBase>
</template>