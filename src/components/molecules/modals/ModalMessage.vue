<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    import { ref } from 'vue';

    const isOpen = defineModel<boolean>({ default: false });
    const modalId = ref<string>('');    
    const title = ref<string>('');
    const message = ref<string>('');
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';

    const emit = defineEmits(['close']);

    const close = () => {
        emit('close');
    };
</script>

<template>
    <ModalBase
        v-model="isOpen"
        :modalId="modalId"
        :title="title"
        :modalSize="'w-md'"
        :closeButton="true"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding"
        :buttonTextSize="buttonTextSize"
    >
        <template #modal-content>
            <div class="text-center">
                <p>{{ message }}</p>
            </div>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon 
                @click="close"
                bgColor="bg-surface"
                text="Cerrar"
                :size="'w-auto'"
                :padding="'px-2 py-1'"
                :textSize="'text-sm'"
            />
        </template>
    </ModalBase>
</template>
