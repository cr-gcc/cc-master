<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    const isOpen = defineModel<boolean>({ default: false });
    
</script>
    
<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-reports-info"
        modalSize="w-full sm:w-1/2"
        title="Tipos de reportes"
        titleSize="text-xl"
        textColor="text-t-primary">
        <template #modal-content>
            <p class="text-t-secondary mb-4 text-sm">A continuación se describen los diferentes tipos de reportes que puedes generar:</p>
            <ul class="space-y-4">
                <li class="flex items-start bg-surface p-3 rounded-md border border-border">
                    <span class="text-blue-500 mr-3 mt-0.5"><i class="fa-solid fa-chart-pie"></i></span>
                    <div>
                        <span class="block font-semibold text-t-primary text-sm">Ventas generales</span>
                        <p class="text-sm text-t-secondary text-justify leading-tight mt-0.5">Muestra un desglose completo de todas las ventas registradas, permitiendo cruzar datos por campaña y estatus, dependiendo del filtrado que se use.</p>
                    </div>
                </li>
                <li class="flex items-start bg-surface p-3 rounded-md border border-border">
                    <span class="text-sky-500 mr-3 mt-0.5"><i class="fa-solid fa-user-check"></i></span>
                    <div>
                        <span class="block font-semibold text-t-primary text-sm">Productividad de validadores</span>
                        <p class="text-sm text-t-secondary text-justify leading-tight mt-0.5">Mide el rendimiento del equipo de validación, mostrando la cantidad de registros revisados por cada uno.</p>
                    </div>
                </li>
                <li class="flex items-start bg-surface p-3 rounded-md border border-border">
                    <span class="text-cyan-500 mr-3 mt-0.5"><i class="fa-solid fa-headset"></i></span>
                    <div>
                        <span class="block font-semibold text-t-primary text-sm">Productividad de agentes de venta</span>
                        <p class="text-sm text-t-secondary text-justify leading-tight mt-0.5">Mide el rendimiento del equipo de ventas, mostrando la cantidad de ventas realizadas por cada uno.</p>
                    </div>
                </li>
            </ul>
        </template>
    </ModalBase>
</template>