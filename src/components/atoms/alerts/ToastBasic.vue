<script setup lang="ts">
    import { useToastStore } from "@/stores/useToastStore";
    const toast = useToastStore();
</script>

<template>
    <Teleport to="body">
        <Transition name="toast">
            <div
                v-if="toast.isVisible"
                role="alert"
                class="fixed top-5 right-5 z-[9999] w-80 rounded-md border border-border bg-surface p-4 shadow-lg"
            >
                <div class="flex items-start gap-3">
                    <i :class="[toast.textColor, toast.icon, 'mt-0.5 text-lg']"></i>
                    <div class="flex-1">
                        <strong :class="[toast.textColor, 'block leading-tight font-medium text-sm']">Notificación</strong>
                        <p :class="[toast.textColor, 'mt-0.5 text-sm']">
                            {{ toast.message }}
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.toast-enter-to,
.toast-leave-from {
    opacity: 1;
    transform: translateX(0);
}
</style>