<script setup lang="ts">
    import { ref } from 'vue';
    import InputLable from '@/components/atoms/inputs/InputLable.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ProgressBar from '@/components/atoms/loaders/ProgresBar.vue';

    const progressBar = ref(false);
    const login = () => {
        console.log("Login");
        progressBar.value = true;
    }
</script>

<template>
    <div class="flex-1">
        <div id="login-logo" class="flex items-center justify-center mx-auto">
            <img src="/images/logos/cc_w.png" class="w-auto h-6 sm:h-20" alt="logo">
        </div>
        <div id="login-form">
            <div class="login-inputs">
                <div class="mb-2">
                    <InputLable name="user" type="text" label="Usuario" labelText="text-md" inputText="text-md" textColor="text-gray-100"/>
                </div>
                <div class="mb-2">
                    <InputLable name="password" type="password" label="Contraseña" labelText="text-md" inputText="text-md" textColor="text-gray-100"/>
                </div>
            </div>
            <div class="login-options">
                <ButtonBlockIcon 
                    bgColor="bg-surface" 
                    icon="fa-solid fa-sign-in" 
                    text="Ingresar" 
                    textSize="text-md" 
                    @click="login()"/>
            </div>
            <div v-if="progressBar" class="login-loading">
                <ProgressBar />
            </div>
        </div>
    </div>
</template>