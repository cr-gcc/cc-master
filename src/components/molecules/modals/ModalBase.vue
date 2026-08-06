<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import ButtonBlockIcon from '@components/atoms/buttons/ButtonBlockIcon.vue';
    import ProgressBar from '@/components/atoms/loaders/ProgresBar.vue';
    import AlertBasic from '@components/atoms/alerts/AlertBasic.vue';

    const router = useRouter();
    const isOpen = defineModel<boolean>({ default: false });
    const dialogRef = ref<HTMLDialogElement | null>(null);
    const props = withDefaults(defineProps<{
        modalSize?: string
        modalId: string
        textColor?: string
        titleSize?: string
        title?: string
        buttonSize?: string
        buttonPadding?: string
        buttonTextSize?: string
        closeButton?: boolean
        loadingPB?: boolean
        alertMessage?: string
        alertType?: string
        urlRedirect?: string
    }>(), {
        modalSize: 'w-full',
        modalId: 'modal',
        textColor: 'text-t-primary',
        titleSize: 'text-xl',
        title: '',
        buttonSize: 'w-auto',
        buttonPadding: 'px-2 py-1',
        buttonTextSize: 'text-sm',
        closeButton: true,
        loadingPB: false,
        alertMessage: '',
        alertType: 'success',
        urlRedirect: ''
    });

    const emit = defineEmits(['close']);

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

    const close = () => {
        isOpen.value = false;
        if (props.urlRedirect) {
            router.push(props.urlRedirect);
        }
        emit('close');
    };

    onMounted(() => {
        if (isOpen.value && dialogRef.value && !dialogRef.value.open) {
            dialogRef.value.showModal();
        }
    });
</script>

<template>
    <Teleport to="body">
        <dialog
            ref="dialogRef"
            :id="modalId"
            @cancel.prevent
            @close="close"
            :class="[modalSize, 'backdrop:bg-black/60 bg-transparent border-0 outline-none p-0 m-auto transition-all duration-300 sm:h-full md:h-auto']"
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
                        v-if="closeButton"
                        @click="close"
                        bgColor="bg-surface"
                        text="Cerrar"
                        :size="buttonSize"
                        :padding="buttonPadding"
                        :textSize="buttonTextSize"
                    />
                </div>
                <!-- Loading -->
                <div v-if="loadingPB" id="modal-loading">
                    <ProgressBar />
                </div>
                <!-- Alerts -->
                <div v-if="alertMessage" id="modal-alerts">
                    <AlertBasic :message="alertMessage" :type="alertType" />
                </div>
            </div>
        </dialog>
    </Teleport>
</template>
