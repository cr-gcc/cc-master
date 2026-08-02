<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';
    import ButtonBlockIcon from '@components/atoms/buttons/ButtonBlockIcon.vue';
    import ProgressBar from '@components/atoms/loadings/ProgresBar.vue';

    const props = withDefaults(defineProps<{
        modalSize?: string
        modalId: string
        textColor?: string
        titleSize?: string
        title?: string
        buttonSize?: string
        buttonPadding?: string
        buttonTextSize?: string
    }>(), {
        modalSize: 'w-full',
        modalId: 'modal',
        textColor: 'text-t-primary',
        titleSize: 'text-xl',
        title: '',
        buttonSize: 'w-auto',
        buttonPadding: 'px-2 py-1',
        buttonTextSize: 'text-sm'
    });

    // Define model for controlling visibility
    const isOpen = defineModel<boolean>({ default: false });
    const dialogRef = ref<HTMLDialogElement | null>(null);

    // Watch isOpen to toggle native dialog state using showModal() / close()
    watch(isOpen, (newValue) => {
        if (!dialogRef.value) return;
        if (newValue) {
            if (!dialogRef.value.open) {
                dialogRef.value.showModal();
            }
        } else {
            if (dialogRef.value.open) {
                dialogRef.value.close();
            }
        }
    });

    // Sync initial state on mount
    onMounted(() => {
        if (isOpen.value && dialogRef.value && !dialogRef.value.open) {
            dialogRef.value.showModal();
        }
    });

    // Helper to close the modal
    const close = () => {
        isOpen.value = false;
    };
</script>

<template>
    <Teleport to="body">
        <dialog
            ref="dialogRef"
            :id="modalId"
            @cancel.prevent
            @close="close"
            :class="`backdrop:bg-black/60 bg-transparent border-0 outline-none p-0 m-auto transition-all duration-300 ${modalSize}`"
        >
            <div class="bg-surface border border-border text-t-primary px-3 py-1.5 rounded-sm flex flex-col">
                <!-- Header -->
                <div id="modal-header" class="flex items-center justify-between mb-2">
                    <span :class="[titleSize, textColor, 'font-medium']">{{ title }}</span>
                </div>
                <!-- Content -->
                <div id="modal-content" class="mb-3">
                    <slot name="modal-content"></slot>
                </div>
                <!-- Footer -->
                <div id="modal-footer" class="flex justify-end gap-1">
                    <slot name="modal-footer"></slot>
                    <ButtonBlockIcon 
                        bgColor="bg-surface"
                        text="Cerrar"
                        :size="buttonSize"
                        :padding="buttonPadding"
                        :textSize="buttonTextSize"
                        @click="close"
                    />
                </div>
                <!-- Loading -->
                 <div id="modal-loading">
                    <ProgressBar />
                 </div>
            </div>
        </dialog>
    </Teleport>
</template>
