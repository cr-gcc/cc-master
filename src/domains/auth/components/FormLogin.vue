<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/useAuthStore';
    import InputLable from '@/components/atoms/inputs/InputLable.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ProgressBar from '@/components/atoms/loaders/ProgresBar.vue';
    import AlertBasic from '@/components/atoms/alerts/AlertBasic.vue';

    const router = useRouter();
    const authStore = useAuthStore();

    const username = ref<string>('');
    const password = ref<string>('');
    const progressBar = ref<boolean>(false);
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    
    const login = () => {
        alertMessage.value = '';
        alertType.value = '';

        if (username.value.trim() === '') {
            alertMessage.value = 'Ingrese su usuario';
            alertType.value = 'error';
            return;
        }
        if (password.value.trim() === '') {
            alertMessage.value = 'Ingrese su contraseña';
            alertType.value = 'error';
            return;
        }
        progressBar.value = true;
        setTimeout(() => {
            const success = authStore.login(username.value, password.value);
            if (success) {
                alertMessage.value = 'Inicio de sesión exitoso';
                alertType.value = 'success';
                progressBar.value = false;
                setTimeout(() => {
                    router.push('/seller');
                }, 1000);
            } else {
                alertMessage.value = 'Usuario o contraseña incorrectos';
                alertType.value = 'error';
                progressBar.value = false;
            }
        }, 1500);
    }
</script>

<template>
    <div class="flex-1">
        <div id="login-logo" class="flex items-center justify-center mx-auto">
            <img src="/images/logos/cc_w.png" class="w-auto h-6 sm:h-20" alt="logo">
        </div>
        <div id="login-form">
            <div id="login-inputs">
                <div class="mb-2">
                    <InputLable v-model="username" name="user" type="text" label="Usuario" labelText="text-md" inputText="text-md" textColor="text-gray-100"/>
                </div>
                <div class="mb-2">
                    <InputLable v-model="password" name="password" type="password" label="Contraseña" labelText="text-md" inputText="text-md" textColor="text-gray-100"/>
                </div>
            </div>
            <div id="login-options">
                <ButtonBlockIcon 
                    bgColor="bg-surface" 
                    icon="fa-solid fa-sign-in" 
                    text="Ingresar" 
                    textSize="text-md" 
                    @click="login()"/>
            </div>
            <div v-if="progressBar" id="login-loading">
                <ProgressBar />
            </div>
            <div v-if="alertMessage" id="login-alert">
                <AlertBasic :message="alertMessage" :type="alertType"/>
            </div>
        </div>
    </div>
</template>