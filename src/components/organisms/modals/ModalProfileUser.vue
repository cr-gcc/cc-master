<script setup lang="ts">
    import { useAuthStore } from '@/stores/useAuthStore';
    import ModalBase from '@components/molecules/modals/ModalBase.vue';

    const isOpen = defineModel<boolean>({ default: false });
    const authStore = useAuthStore();
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-profile-user"
        modalSize="w-1/4"
        title="Mi perfil"
        titleSize="text-xl"
        textColor="text-t-primary"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding" 
        :buttonTextSize="buttonTextSize"
    >
        <template #modal-content>
            <p class="font-medium text-t-primary">Nombre: <span class="font-normal text-t-secondary">{{ authStore.user?.name }} {{ authStore.user?.lastName }}</span>
            </p>
            <p class="font-medium text-t-primary">Usuario: 
                <span class="font-normal text-t-secondary">{{ authStore.user?.user }}</span>
            </p>
            <p class="font-medium text-t-primary">Rol: <span class="font-normal text-t-secondary">{{ authStore.user?.role_name }}</span>
            </p>
            <p class="font-medium text-t-primary">Correo: <span class="font-normal text-t-secondary">{{ authStore.user?.email? authStore.user?.email : 'N/A' }}</span>
            </p>
        </template>
    </ModalBase>
</template>
