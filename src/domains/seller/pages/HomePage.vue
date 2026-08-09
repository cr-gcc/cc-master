<script setup lang="ts">
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalPhoneSessionLogin from '@/domains/seller/components/modals/ModalPhoneSessionLogin.vue';
    import { useAuthStore } from '@/stores/useAuthStore';
    import { usePhoneSessionStore } from '@/stores/usePhoneSessionStore';
    import { useSplashStore } from '@/stores/useSplashScreenStore';
    import { ref, onMounted } from 'vue';

    const authStore = useAuthStore();
    const phoneSessionStore = usePhoneSessionStore();
    const splashScreenStore = useSplashStore();

    const isOpenPhoneSessionLoginModal = defineModel<boolean>()
    const status = ref("offline");
    const text1 = "1. Estadísticas";
    const body1 = "Esta página mostrará toda la información relevante de tus estadísticas generales diarias de la jornada laboral."
    const text2 = "2. Llamada";
    const body2 = "El contenido de esta sección se habilitará cuando se te asigne una llamada. Aquí encontrarás todas las opciones necesarias para manejar la llamada y los datos correspondientes para concretar la venta."
    const text3 = "Conexión/Desconexión";
    const body3 = "En esta sección podrás conectarte y desconectarte de la plataforma. Asegurate de conectarte para iniciar tu jornada laboral y poder recibir llamadas y/o mensajes.";

    const online = (isOnline: boolean) => {
        splashScreenStore.show();
        setTimeout(() => {
            phoneSessionStore.setOnline(isOnline);
            status.value = isOnline ? "online" : "offline";
            splashScreenStore.hide();
        }, 2000)
    }

    onMounted(async () => {
        await phoneSessionStore.checkSession();
    })
</script>

<template>
    <div id="home" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Inicio</h1>
        <h3 class="text-t-secondary text-2xl mb-4">
            Bienvenido <span class="font-semibold"> {{ authStore.user?.name }} {{ authStore.user?.lastName }}</span>, en esta sección podrás encontrar una guía rapida del sistema.
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <div class="mb-2">
                    <CardFrame 
                        titleSize="text-2xl" 
                        textSize="text-md" 
                        :title=text1 
                        :body=body1 
                    />
                </div>
                <div class="mb-2">  
                    <CardFrame 
                        titleSize="text-2xl" 
                        textSize="text-md" 
                        :title=text2 
                        :body=body2 
                    />
                </div>
            </div>
            <div>
                <div class="mb-2">
                    <CardFrame 
                        titleSize="text-2xl" 
                        textSize="text-md" 
                        :title=text3 
                        :body=body3 
                    >
                        <template #options>
                            <div v-if="!phoneSessionStore.isPhoneSessionInitialized" class="mb-2">
                                <ButtonBlockIcon 
                                    @click="isOpenPhoneSessionLoginModal = true"
                                    bgColor="bg-surface" 
                                    icon="fa-solid fa-phone-volume" 
                                    text="Sesión de telefonía"
                                    padding="px-2 py-1"
                                    textSize="text-sm"
                                />
                            </div>
                            <div v-else>
                                <div v-if="!phoneSessionStore.isOnline" class="mb-2">
                                    <ButtonBlockIcon 
                                        @click="online(true)"
                                        bgColor="bg-surface" 
                                        icon="fa-solid fa-desktop" 
                                        text="Conectarme"
                                        padding="px-2 py-1"
                                        textSize="text-sm"
                                    />
                                </div>
                                <div v-else>
                                    <div class="mb-2">
                                        <ButtonBlockIcon 
                                            @click="online(false)"
                                            bgColor="bg-surface" 
                                            icon="fa-solid fa-utensils" 
                                            text="Comida"
                                            padding="px-2 py-1"
                                            textSize="text-sm"
                                        />
                                    </div>
                                    <div class="mb-2">
                                        <ButtonBlockIcon 
                                            @click="online(false)"
                                            bgColor="bg-surface" 
                                            icon="fa-solid fa-phone-slash" 
                                            text="Descanso/Dinámica"
                                            padding="px-2 py-1"
                                            textSize="text-sm"
                                        />
                                    </div>
                                    <div class="mb-2">
                                        <ButtonBlockIcon 
                                            @click="online(false)"
                                            bgColor="bg-surface" 
                                            icon="fa-solid fa-restroom" 
                                            text="Sanitario"
                                            padding="px-2 py-1"
                                            textSize="text-sm"
                                        />
                                    </div>   
                                </div>
                            </div>
                        </template>
                    </CardFrame>
                </div>
            </div>
        </div>
    </div>
    <ModalPhoneSessionLogin v-model="isOpenPhoneSessionLoginModal" />
</template>