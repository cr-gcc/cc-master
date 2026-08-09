<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue'; 
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue'; 
    import { usePhoneSessionStore } from '@/stores/usePhoneSessionStore';
    import { ref } from 'vue';

     const store = usePhoneSessionStore();

    const isOpen = defineModel<boolean>()
    const sessionButton = ref<boolean>(true);
    const loading = ref<boolean>(false);
    const closeButton = ref<boolean>(true);
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';
    const user = ref<string>('');
    const password = ref<string>('');
    const extension = ref<string>('');
    const domain = ref<string>('');

    const loginPhoneSession = () => {
        if (user.value === '' || password.value === '' || extension.value === '' || domain.value === '') {
            alertMessage.value = 'Por favor proporcione todos los datos para iniciar sesión telefónica';
            alertType.value = 'error';
            return;
        }
        loading.value = true;
        alertMessage.value = '';
        alertType.value = '';
        setTimeout(() => {
            if (store.login(user.value, password.value, extension.value, domain.value)) {
                loading.value = false;
                sessionButton.value = false;
                alertMessage.value = 'Sesión iniciada correctamente';
                alertType.value = 'success';

            } else {
                loading.value = false;
                alertMessage.value = 'Uno o varios datos del formulario son incorrectos';
                alertType.value = 'error';
            }
        }, 2000);
    }

    const clearForm = () => {
        user.value = '';
        password.value = '';
        extension.value = '';
        domain.value = '';
    }
</script>
<template>
    <ModalBase
        v-model="isOpen"
        @close="clearForm"
        modalId="modal-phone-session-login"
        modalSize="w-full sm:w-1/2 md:w-1/4"
        title="Iniciar sesión telefónia"
        titleSize="text-xl"
        textColor="text-t-primary"
        :alertMessage="alertMessage"
        :alertType="alertType"
        :loadingPB="loading"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding"
        :buttonTextSize="buttonTextSize"
        :closeButton="closeButton"
    >
        <template #modal-content>
            <div class="mb-2">
                <InputLabel
                    v-model="user"
                    name="phone_session_user"
                    type="text"
                    label="Usuario"
                    labelText="text-xs"
                    inputText="text-xs"
                    textColor="text-t-secondary"
                />    
            </div>
            <div class="mb-2">
                <InputLabel
                    v-model="password"
                    name="phone_session_password"
                    type="password"
                    label="Contraseña"
                    labelText="text-xs"
                    inputText="text-xs"
                    textColor="text-t-secondary"
                />
            </div>
            <div class="mb-2">
                <InputLabel
                    v-model="extension"
                    name="phone_session_extension"
                    type="number"
                    label="Extensión"
                    labelText="text-xs"
                    inputText="text-xs"
                    textColor="text-t-secondary"
                />
            </div>
            <div>
                <InputLabel
                    v-model="domain"
                    name="phone_session_domain"
                    type="text"
                    label="Dominio"
                    labelText="text-xs"
                    inputText="text-xs"
                    textColor="text-t-secondary"
                />
            </div>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon 
                v-if="sessionButton"
                @click="loginPhoneSession()"
                bgColor="bg-surface"
                text="Iniciar sesión"
                :size="buttonSize"
                :padding="buttonPadding"
                :textSize="buttonTextSize"
            />  
        </template>
    </ModalBase>
</template>