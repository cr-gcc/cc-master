<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';

    const isOpen = defineModel<boolean>({ default: false });
    const buttonSize = 'w-auto';
    const buttonPadding = 'px-2 py-0.5';
    const buttonTextSize = 'text-sm';    
    const props = withDefaults(defineProps<{
        modalId?: string;
        title?: string;
        message?: string;
        textSize?: string;
        modalSize?: string;
    }>(), {
        modalId: 'modal-message',
        title: '',
        message: '',
        textSize: 'text-sm',
        modalSize: 'w-full sm:w-1/3 md:w-1/4'
    });

    const emit = defineEmits(['close']);
</script>

<template>
    <ModalBase
        v-model="isOpen"
        :modalId="modalId"
        :title="title"
        :modalSize="modalSize"
        :closeButton="true"
        :buttonSize="buttonSize"
        :buttonPadding="buttonPadding"
        :buttonTextSize="buttonTextSize"
        @close="emit('close')"
    >
        <template #modal-content>
            <div class="text-justify">
                <p :class="[textSize, 'leading-tight']">{{ message }}</p>
            </div>
        </template>
    </ModalBase>
</template>
