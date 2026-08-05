<script setup lang="ts">
    import WrapperFormGrid from '@/components/molecules/wrappers/WrapperFormGrid.vue';
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import TableBasic from '@/components/molecules/tables/TableBasic.vue';
    import { ref } from 'vue';

    const dataInit = ref<string>('');
    const dataEnd = ref<string>('');
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const loading = ref<boolean>(false);
    const lastRowBold = ref<boolean>(true);
    const headers = ref<Array<string>>([
        'Campaña',
        'Exitosas',
        'Rechazadas',
        'Pendientes',
        'En evaluación',
        'Total'
    ]);
    const data = ref<Array<any>>([]);
    const dataFakeCampaign = ref<Array<any>>([
        {
            campaign: 'Anti fraude',
            exit: '1',
            rejections: '0',
            pending: '3',
            in_evaluation: '2',
            total: '6'
        },
        {
            campaign: 'Seguro de vida',
            exit: '10',
            rejections: '2',
            pending: '12',
            in_evaluation: '6',
            total: '30'
        },
        {
            campaign: 'Seguro de mascota',
            exit: '0',
            rejections: '0',
            pending: '3',
            in_evaluation: '1',
            total: '4'
        },
        {
            campaign: 'Totales',
            exit: '11',
            rejections: '2',
            pending: '18',
            in_evaluation: '9',
            total: '40'
        }
    ]);

    function searchGlobalSales(){
        alertMessage.value = '';
        alertType.value = '';
        data.value = [];

        if(dataInit.value == '') {
            alertMessage.value = 'Debe seleccionar una fecha de inicio';
            alertType.value = 'error';
            return;
        }
        if(dataEnd.value == '') {
            alertMessage.value = 'Debe seleccionar una fecha de fin';
            alertType.value = 'error';
            return;
        }
        if(dataInit.value > dataEnd.value) {
            alertMessage.value = 'La fecha de inicio debe ser menor a la fecha de fin';
            alertType.value = 'error';
            return;
        }
        
        loading.value = true;
        setTimeout(() => {
            data.value = dataFakeCampaign.value;
            loading.value = false;
        }, 2000);
    }

</script>

<template>
    <div id="sales-dashboard" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Dashboard de ventas</h1>
        <div class="rounded-xl border border-border p-2">
            <WrapperFormGrid 
                gridCols="grid grid-cols-1 md:grid-cols-4" 
                :loading="loading"
                :alertMessage="alertMessage"
                :alertType="alertType"
            >
                <template #inputs-button>
                    <div></div>
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
                    <ButtonBlockIcon @click="searchGlobalSales()" margin="mb-0" bgColor="bg-surface" icon="fa-solid fa-search" textSize="text-sm" text="Buscar" />    
                </template>
            </WrapperFormGrid>
            <TableBasic 
                :headers="headers" 
                :data="data" 
                textSize="text-md" 
                :lastRowBold="lastRowBold" 
            />
        </div>
    </div>
</template>
