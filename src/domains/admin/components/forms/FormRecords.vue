<script setup lang="ts">
    import TableAction from '@/components/organisms/tables/TableAction.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import { ref } from 'vue';
    
    const miniFrame = ref<boolean>(true);
    const columns = ref<Array<any>>([
        { label: 'Nombre', key: 'filename' },
        { label: 'Duración', key: 'time' },
        { label: 'Opciones', key: 'options', custom: true },
        { label: 'Adjuntar', key: 'attachment', custom: true },
    ]);
    const data = ref<Array<any>>([
        {   
            id: 1,
            filename: '20260102_130153_CAF.mp3',
            time: '00:12:09'   
        },
        {   
            id: 2,
            filename: '20260103_110410_CAF.mp3',
            time: '00:06:22'   
        },
        {   
            id: 3,
            filename: '20260104_110122_CAF_DEFRREWR_BNM.mp3',
            time: '00:04:22'   
        },
        {   
            id: 4,
            filename: '20260105_120122_CAF.mp3',
            time: '00:01:25'   
        },
        {   
            id: 5,
            filename: '20260106_130412_CAF.mp3',
            time: '00:12:42'   
        }
    ]);
</script>

<template>
    <div>
        <h4 class="text-t-primary text-lg mb-1">
            Grabaciones
        </h4>
        <div class="mb-2">
            <TableAction 
                :columns="columns"
                :data="data"
                textSize="text-sm"
                headerTextCenter="text-center"
                :miniFrame="miniFrame"
            >
                <template #cell-options>
                    <div class="w-full flex justify-center gap-2">
                        <ButtonBlockIcon
                            bgColor="bg-surface"
                            padding="px-2 py-0.5"
                            margin="mb-0" 
                            icon="fa-solid fa-play" 
                            textSize="text-sm"
                            size="w-auto"
                            title="Escuchar"    
                        />
                        <ButtonBlockIcon
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
                <template #cell-attachment="{ item }">
                    <div class="w-full flex justify-center gap-2">
                        <input type="checkbox" class="size-4 rounded border-bg-secondary cursor-pointer" :id="`attachment-${item.id}`" name="attachment" :value="item.id" />
                    </div>
                </template>
            </TableAction>
        </div>
    </div>
</template>