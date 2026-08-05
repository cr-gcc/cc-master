<script setup lang="ts">
    import WrapperFormGrid from '@/components/molecules/wrappers/WrapperFormGrid.vue';
    import TableAction from '@/components/organisms/tables/TableAction.vue';
    import SelectLabel from '@/components/atoms/selects/SelectLabel.vue';
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import { customFormatDate } from '@/utils/dateFormat';
    import { ref } from 'vue';

    const campaign = ref<string>('');
    const saleStatusFilter = ref<string>('');
    const dateFilter = ref<string>('');
    const alertMessage = ref<string>('');
    const alertType = ref<string>('');
    const loading = ref<boolean>(false);
    const columns = ref<Array<any>>([
        { label: 'Campaña', key: 'campaign' },
        { label: 'Venta', key: 'sale_date', custom:true },
        { label: 'Validación', key: 'validation_date', custom:true },
        { label: 'Agente', key: 'agent' },
        { label: 'Cliente', key: 'client' },
        { label: 'Estatus', key: 'status', custom:true },
        { label: 'Opciones', key: 'options', custom:true }
    ]);
    const data = ref<Array<any>>([]);
    const dataFake = ref<Array<any>>([
        {   
            id: 1,
            campaign: 'Anti fraude',
            sale_date: '2026-01-01',
            validation_date: '2026-01-03',
            agent: 'Juan Perez Santana',
            client: 'Pedro Lopez Hernandez',
            status: 'Aprobado',
            locked: true
        },
        {
            id: 2,
            campaign: 'Anti fraude',
            sale_date: '2026-02-01',
            validation_date: '',
            agent: 'Roberto Perez Ruiz',
            client: 'Maria Hernandez Lopez',
            status: 'Pendiente',
            locked: true
        },
        {
            id: 3,
            campaign: 'Seguro de vida',
            sale_date: '2026-03-01',
            validation_date: '2026-03-02',
            agent: 'Mariana Flores Sanchez',
            client: 'Miguel Torres Hernandez',
            status: 'Aprobado',
            locked: true
        },  
        {
            id: 4,
            campaign: 'Seguro de mascota',
            sale_date: '2026-04-01',
            validation_date: '',
            agent: 'Carlos Santana Ruiz',
            client: 'Ana Garcia Hernandez',
            status: 'Rechazado',
            locked: false
        }
    ]);
    const filterByCampaign = ref<Array<any>>([
        {value: '0', name: 'Todos'},
        {value: '1', name: 'Anti fraude'},
        {value: '2', name: 'Seguro de vida'},
        {value: '3', name: 'Seguro de mascota'}
    ]);
    const filterByDate = ref<Array<any>>([
        {value: '0', name: 'Todos'},
        {value: '1', name: 'Fecha validación'},
        {value: '2', name: 'Fecha venta'}
    ]);

    const searchSales = () => {
        alertMessage.value = '';
        alertType.value = '';
        data.value = [];
        
        if(campaign.value == '') {
            alertMessage.value = 'Debe seleccionar una campaña';
            alertType.value = 'error';
            return;
        }

        if(saleStatusFilter.value == '') {
            alertMessage.value = 'Debe seleccionar un estatus';
            alertType.value = 'error';
            return;
        }

        if(dateFilter.value == '') {
            alertMessage.value = 'Debe seleccionar una fecha';
            alertType.value = 'error';
            return;
        }

        const body = {
            campaign: campaign.value,
            sale_status: saleStatusFilter.value,
            date_filter: dateFilter.value
        }
        console.log(body)
        loading.value = true;
        setTimeout(() => {
            /*
            data.value = dataFake.value.map(item => ({
                ...item,
                sale_date: item.sale_date !== '' ? customFormatDate(new Date(item.sale_date + 'T00:00:00'), 'diag') : '-',
                validation_date: item.validation_date !== '' ? customFormatDate(new Date(item.validation_date), 'diag') : '-'
            }));
            */
            data.value = dataFake.value;
            loading.value = false;
        }, 2000);
    }    
    const getSaleRecord = (idSale: number) => {
        alert(`Obteniendo registro de venta ${idSale}`);
    }
</script>

<template>
    <div id="sales" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Ventas</h1>
        <div class="rounded-xl border border-border px-2 py-1">
            <div class="mt-2">
                <WrapperFormGrid 
                    gridCols="grid grid-cols-1 md:grid-cols-4" 
                    :loading="loading"
                    :alertMessage="alertMessage"
                    :alertType="alertType"
                >
                    <template #inputs-button>
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
                                v-model="saleStatusFilter"
                                name="filter_by_date"
                                defaultOption="Seleccione un estatus"
                                :options="filterByDate"
                            />
                        </div>
                        <div class="bg-surface rounded-md">
                            <InputLabel 
                                v-model="dateFilter"
                                name="date_filter"
                                type="date"
                            />
                        </div>
                        <div>
                            <ButtonBlockIcon @click="searchSales()" margin="mb-0" bgColor="bg-surface" icon="fa-solid fa-search" textSize="text-sm" text="Buscar" />    
                        </div>
                    </template>
                </WrapperFormGrid>
                <TableAction 
                    :columns="columns" 
                    :data="data" 
                    textSize="text-md"
                >
                    <template #cell-sale_date="{ item }">
                        {{ customFormatDate(item.sale_date, 'diag') }}
                    </template>
                    <template #cell-validation_date="{ item }">
                        {{ customFormatDate(item.validation_date, 'diag') }}
                    </template>
                    <template #cell-status="{ item }">
                        <div class="w-full flex justify-center gap-2">
                            <i v-if="item.locked==true" 
                                class="fa-solid fa-lock text-error"
                                title="En validación/Validado"
                            ></i>
                            <i v-else 
                                class="fa-solid fa-unlock text-success"
                                title="Disponible"
                            ></i>
                        </div>
                    </template>
                    <template #cell-options="{ item }">
                        <div class="w-full flex justify-center gap-2">
                            <ButtonBlockIcon 
                                @click="getSaleRecord(item.id)"
                                bgColor="bg-surface"
                                padding="px-2 py-0.5"
                                margin="mb-0" 
                                icon="fa-solid fa-file-lines" 
                                textSize="text-sm"
                                size="w-auto"
                                title="Ver"
                            />
                            <ButtonBlockIcon 
                                bgColor="bg-surface"
                                padding="px-2 py-0.5"
                                margin="mb-0" 
                                icon="fa fa-trash-alt" 
                                textSize="text-sm"
                                size="w-auto"
                                title="Eliminar"
                            />
                        </div>
                    </template>
                </TableAction>
            </div>
        </div>
    </div>
</template>
