<script setup lang="ts">
    import ModalBase from '@components/molecules/modals/ModalBase.vue';

    const isOpen = defineModel<boolean>({ default: false });
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';
    const user = {
        name: 'Cristhian Ramirez Saavedra',
        user: 'RARC900812',
        rol: 'Agente de ventas',
        email: 'cris.ram@outlook.com',
    };
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
            <p class="font-medium text-t-primary">Nombre: <span class="font-normal text-t-secondary">{{ user.name }}</span></p>
            <p class="font-medium text-t-primary">Usuario: <span class="font-normal text-t-secondary">{{ user.user }}</span></p>
            <p class="font-medium text-t-primary">Rol: <span class="font-normal text-t-secondary">{{ user.rol }}</span></p>
            <p class="font-medium text-t-primary">Correo: <span class="font-normal text-t-secondary">{{ user.email }}</span></p>
        </template>
    </ModalBase>
</template>
