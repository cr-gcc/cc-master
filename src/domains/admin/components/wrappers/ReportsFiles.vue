<script setup lang="ts">
    import TableAction from '@/components/organisms/tables/TableAction.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalDeleteItem from '@/components/organisms/modals/ModalDeleteItem.vue';
    import { customFormatDate } from '@/utils/dateFormat';
    import { ref } from 'vue';

    const isOpenDelete = ref<boolean>(false);
    const reloadPage = ref<boolean>(true);
    const miniFrame = ref<boolean>(true);
    const columns = ref<Array<any>>([
        { label: 'Nombre', key: 'filename' },
        { label: 'Registro', key: 'create_time', custom: true },
        { label: 'Emision', key: 'emission_time', custom: true },
        { label: 'Estatus', key: 'status', custom: true },
        { label: 'Opciones', key: 'options', custom: true },
    ]);
    const data = ref<Array<any>>([
        {   
            id: 1,
            filename: '20260102_130153_CAFERC.mp3',
            create_time: '2026-01-02 13:01:53',
            emission_time: '2026-01-03 11:04:10',
            status: 'finished'   
        },
        {   
            id: 2,
            filename: '20260103_120220_EDCER.mp3',
            create_time: '2026-01-03 12:02:20',
            emission_time: '2026-01-04 10:04:10',
            status: 'pendant'   
        },
        {   
            id: 3,
            filename: '20260104_150021_CAF.mp3',
            create_time: '2026-01-04 15:00:21',
            emission_time: '2026-01-05 10:04:10',
            status: 'error'   
        },
        {   
            id: 4,
            filename: '20260105_120250_EDCER.mp3',
            create_time: '2026-01-05 12:02:50',
            emission_time: '2026-01-06 14:04:10',
            status: 'pendant'   
        }
    ]);

    const openDeleteModal = () => {
        isOpenDelete.value = true;
    }
</script>

<template>
    <div class="rounded-xl border border-border p-2">
        <h3 class="text-t-primary text-2xl mb-1">Reportes programados</h3>
        <div class="mb-2">
            <TableAction 
                :columns="columns"
                :data="data"
                textSize="text-sm"
                headerTextCenter="text-center"
                :miniFrame="miniFrame"
            >   
                <template #cell-create_time="{ item }">
                    <p class="text-t-primary">
                        {{ customFormatDate(item.create_time, 'diag', true) }}
                    </p>
                </template>
                <template #cell-emission_time="{ item }">
                    <p class="text-t-primary">
                        {{ customFormatDate(item.emission_time, 'diag', true) }}
                    </p>
                </template>
                <template #cell-status="{ item }">
                    <span class="text-success font-semibold" v-if="item.status == 'finished'">
                        {{ 'Finalizado' }}
                    </span>
                    <span class="text-error font-semibold" v-else-if="item.status == 'error'">
                        {{ 'Error' }}
                    </span>
                    <span class="text-warning font-semibold" v-else-if="item.status == 'pendant'">
                        {{ 'Pendiente' }}
                    </span>
                </template>
                <template #cell-options="{ item }">
                    <div class="w-full flex justify-center gap-2">
                        <ButtonBlockIcon
                            @click="openDeleteModal()"
                            bgColor="bg-surface"
                            padding="px-2 py-0.5"
                            margin="mb-0" 
                            icon="fa fa-trash-alt" 
                            textSize="text-sm"
                            size="w-auto"
                            title="Eliminar"
                        />
                        <ButtonBlockIcon
                            v-if="item.status == 'finished'"
                            bgColor="bg-surface"
                            padding="px-2 py-0.5"
                            margin="mb-0" 
                            icon="fa-solid fa-download" 
                            textSize="text-sm"
                            size="w-auto"
                            title="Descargar"    
                        />
                    </div>
                </template>
            </TableAction>
        </div>
    </div>
    <ModalDeleteItem 
        v-model="isOpenDelete" 
        modalId="modal-delete-report" 
        :reloadPage="reloadPage"
    />
</template>