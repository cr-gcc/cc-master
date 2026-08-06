<script setup lang="ts">
    import { ref } from 'vue';
    import WrapperFormGrid from '@/components/molecules/wrappers/WrapperFormGrid.vue';
    import SelectLabel from '@/components/atoms/selects/SelectLabel.vue';
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalReportsInfo from '@/domains/admin/components/modals/ModalReportsInfo.vue';

    const isOpenReportsInfo = ref<boolean>(false);
    const loading = ref<boolean>(false);
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const report = ref<string>('');
    const campaign = ref<string>('');    
    const status = ref<string>('');    
    const dataInit = ref<string>('');    
    const dataEnd = ref<string>('');    
    const filterByReport = ref<Array<any>>([
        {value: '1', name: 'Ventas generales'},
        {value: '2', name: 'Productividad de validadores'},
        {value: '3', name: 'Productividad de agentes de venta'}
    ])
    const filterByCampaign = ref<Array<any>>([
        {value: '0', name: 'Todos'},
        {value: '1', name: 'Anti fraude'},
        {value: '2', name: 'Seguro de vida'},
        {value: '3', name: 'Seguro de mascota'}
    ])
    const filterByStatus = ref<Array<any>>([
        {value: '0', name: 'Todos'},
        {value: '1', name: 'Aprobado'},
        {value: '2', name: 'Rechazado'},
        {value: '3', name: 'Pendiente'}
    ])
    const openReportsInfoModal = () => {
        isOpenReportsInfo.value = true;
    }
    const downloadReport = async () => {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
        }, 1000);
    }
    const scheduleReport = async () => {
        loading.value = true;
        alertMessage.value = '';
        alertType.value = '';
        setTimeout(() => {
            loading.value = false;
            alertMessage.value = 'Se ha programado el reporte. Consulte la seccion de reportes generados para descargar su archivo.';
            alertType.value = 'success';
        }, 1000);
    }
</script>

<template>
    <div id="reports" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Reportes</h1>
        <div class="rounded-xl border border-border p-2 mb-4">
            <h3 class="text-t-primary text-2xl mb-1">Generar reporte</h3>
            <div class="flex justify-end items-center mt-1">
                <ButtonBlockIcon 
                    @click="openReportsInfoModal"
                    margin="mb-0" 
                    bgColor="bg-surface" 
                    size="w-auto"
                    icon="fa-solid fa-circle-question" 
                    textSize="text-sm" 
                    text="Tipos de reportes"
                />    
            </div>
            <div class="mt-2">
                <WrapperFormGrid 
                    gridCols="grid grid-cols-1 md:grid-cols-4" 
                    :loading="loading"
                    :alertMessage="alertMessage"
                    :alertType="alertType"
                >
                    <template #inputs-button>
                        <div class="bg-surface rounded-md col-span-full">
                            <SelectLabel 
                                v-model="report"
                                name="filter_by_campaign"
                                defaultOption="Seleccione el tipo de reporte que desea generar"
                                :options="filterByReport"
                            />
                        </div>
                        <div class="bg-surface rounded-md">
                            <SelectLabel 
                                v-model="campaign"
                                name="filter_by_campaign"
                                defaultOption="Seleccione una campaña"
                                :options="filterByCampaign"
                            />
                        </div>
                        <div class="bg-surface rounded-md">
                            <SelectLabel 
                                v-model="status"
                                name="filter_by_status"
                                defaultOption="Seleccione un estatus"
                                :options="filterByStatus"
                            />
                        </div>
                        <div class="bg-surface rounded-md">
                            <InputLabel 
                                v-model="dataInit"
                                name="start_date"
                                type="date"
                            />
                        </div>
                        <div class="bg-surface rounded-md">
                            <InputLabel 
                                v-model="dataEnd"
                                name="end_date"
                                type="date"
                            />
                        </div>
                        <div class="col-span-2"></div>
                        <div>
                            <ButtonBlockIcon 
                                @click="scheduleReport"
                                margin="mb-0" 
                                bgColor="bg-surface" 
                                icon="fa-solid fa-gears" 
                                textSize="text-sm" 
                                text="Programar" 
                            />
                        </div>
                        <div>
                            <ButtonBlockIcon 
                                @click="downloadReport"
                                margin="mb-0" 
                                bgColor="bg-surface" 
                                icon="fa-solid fa-file-arrow-down" 
                                textSize="text-sm" 
                                text="Descargar" 
                            />
                        </div>
                    </template>
                </WrapperFormGrid>
            </div>
        </div>
        
    </div>
    <ModalReportsInfo v-model="isOpenReportsInfo" />
</template>