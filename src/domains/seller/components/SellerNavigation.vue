<script setup lang="ts">
    import { ref } from 'vue';
    import { usePhoneSessionStore } from '@/stores/usePhoneSessionStore';
    import { useToastStore } from '@/stores/useToastStore';
    import BaseNavLink from '@/components/atoms/links/BaseNavLink.vue';

    defineProps<{
        isMobile?: boolean;
    }>();

    const emit = defineEmits(['close-mobile-menu']);

    const phoneSessionStore = usePhoneSessionStore();
    const toastStore = useToastStore();

    const connectToPhoneSession = (status: string) => {
        const message = ref<string>("");
        const textColor = ref<string>("");
        const icon = ref<string>("fa-solid fa-triangle-exclamation");

        if(status != 'not-logged'){
            closeMobileMenu();
        }

        switch (status) {
            case 'not-logged':
                textColor.value = "text-error";
                message.value = "Por favor inicia sesión telefónica para poder gestionar llamadas";
                toastStore.show(message.value, icon.value, textColor.value);
                break;
            case 'off-line':
                textColor.value = "text-warning";
                message.value = "Estas fuera de línea por favor conéctate para poder gestionar llamadas";
                toastStore.show(message.value, icon.value, textColor.value);
                break;
            default:
                textColor.value = "text-error";
                message.value = "Estatus no reconocido.";
                toastStore.show(message.value, icon.value, textColor.value);
                break;
        }
    };
    const closeMobileMenu = () => {
        emit('close-mobile-menu');
    };
</script>

<template>
    <li>
        <BaseNavLink 
            @click="closeMobileMenu"
            :to="{name: 'seller-home'}" 
            :is-mobile="isMobile"
        >
            Inicio
        </BaseNavLink>
    </li>
    <li>
        <BaseNavLink 
            @click="closeMobileMenu"
            :to="{name: 'seller-statistics'}" 
            :is-mobile="isMobile"
        >
            Estadísticas
        </BaseNavLink>
    </li>
    <li>
        <div v-if="phoneSessionStore.isPhoneSessionInitialized">
            <div v-if="phoneSessionStore.isOnline===true">
                <BaseNavLink
                    @click="closeMobileMenu"
                    :to="{name: 'seller-call'}" 
                    :is-mobile="isMobile">
                    Llamada
                </BaseNavLink>
            </div>
            <div v-else>
                <BaseNavLink
                    @click="connectToPhoneSession('off-line')"
                    :is-mobile="isMobile"
                >
                    Llamar
                </BaseNavLink>
            </div>
        </div>
        <div v-else>
            <BaseNavLink
                @click="connectToPhoneSession('not-logged')" 
                :is-mobile="isMobile">
                Llamar
            </BaseNavLink>
        </div>
    </li>
</template>
