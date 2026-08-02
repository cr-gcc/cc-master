<script setup lang="ts">
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';

    const text1 = "1. Estadísticas";
    const body1 = "Esta página mostrará toda la información relevante de tus estadísticas generales diarias de la jornada laboral."
    const text2 = "2. Llamada";
    const body2 = "El contenido de esta sección se habilitará cuando se te asigne una llamada. Aquí encontrarás todas las opciones necesarias para manejar la llamada y los datos correspondientes para concretar la venta."
    const text3 = "Pausas";
    const body3 = "En esta sección podrás iniciar y finalizar tus pausas durante la jornada laboral, ya sea tu hora de comida, ida al sanitario o alguna dinámica grupal, tendrás que registrar todas tus pausas. ";
</script>

<template>
    <div id="home" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Inicio</h1>
        <h3 class="text-t-secondary text-2xl mb-4">
            Bienvenido <span class="font-semibold">Cristóbal Gutiérrez</span>, en esta sección podrás encontrar una guía rapida del sistema.
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
                            <div class="mb-2">
                                <ButtonBlockIcon 
                                    bgColor="bg-surface" 
                                    icon="fa-solid fa-desktop" 
                                    text="Conectarme"
                                    padding="px-2 py-1"
                                    textSize="text-sm"
                                />
                            </div>
                            <div class="mb-2">
                                <ButtonBlockIcon 
                                    bgColor="bg-surface" 
                                    icon="fa-solid fa-utensils" 
                                    text="Comida"
                                    padding="px-2 py-1"
                                    textSize="text-sm"
                                />
                            </div>
                            <div class="mb-2">
                                <ButtonBlockIcon 
                                    bgColor="bg-surface" 
                                    icon="fa-solid fa-phone-slash" 
                                    text="Descanso/Dinámica"
                                    padding="px-2 py-1"
                                    textSize="text-sm"
                                />
                            </div>
                            <div class="mb-2">
                                <ButtonBlockIcon 
                                    bgColor="bg-surface" 
                                    icon="fa-solid fa-restroom" 
                                    text="Sanitario"
                                    padding="px-2 py-1"
                                    textSize="text-sm"
                                />
                            </div>
                        </template>
                    </CardFrame>
                </div>
            </div>
        </div>
    </div>
</template>