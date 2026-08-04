<script setup lang="ts">
    import { ref } from 'vue';
    import ModalBase from '@components/molecules/modals/ModalBase.vue';
    import ButtonBlockIcon from '@components/atoms/buttons/ButtonBlockIcon.vue';
    import SelectLabel from '@components/atoms/selects/SelectLabel.vue';
    
    const isOpen = defineModel<boolean>({ default: false });
    const loading = ref<boolean>(false);
    const closeButton = ref<boolean>(false);
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const classification = ref<string>('');   
    const reason = ref<string>('');
    const urlRedirect = ref<string>('');
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';
    const classifications = ref<any>([
        {value: 1, name: 'Venta'},
    ]);
    const reasons = ref<any>([
        {value: 1, name: 'Venta exitosa'},
    ]);

    const classifyCall = () => {
        alertMessage.value = "";
        alertType.value = "";

        if (classification.value === "") {
            alertMessage.value = "Seleccione una clasificación.";
            alertType.value = "error";
            return;
        } 
        if (reason.value === "") {
            alertMessage.value = "Seleccione un motivo.";
            alertType.value = "error";
            return;
        }

        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            alertMessage.value = "Llamada tipificada correctamente.";
            alertType.value = "success";
            closeButton.value = true;
            urlRedirect.value = '/seller';
        }, 2000);
    }
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-save-sale"
        modalSize="w-full sm:w-1/2 md:w-1/3"
        title="Tipificar llamada"
        titleSize="text-xl"
        textColor="text-t-primary"
        :alertMessage="alertMessage"
        :alertType="alertType"
        :loadingPB="loading"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding"
        :buttonTextSize="buttonTextSize"
        :closeButton="closeButton"
        :urlRedirect="urlRedirect"
    >
        <template #modal-content>
            <div class="mb-2">
                <SelectLabel v-model="classification" label="Classificación" labelText="text-md" textSize="text-md" inputSize="px-2 py-0.5" :options="classifications" />    
            </div>
            <div class="mb-0">
                <SelectLabel v-model="reason" label="Motivo" labelText="text-md" textSize="text-md" inputSize="px-2 py-0.5" :options="reasons" />    
            </div>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon 
                v-if="!closeButton"
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