<script setup lang="ts">
    import ModalBase from '@/components/molecules/modals/ModalBase.vue';
    import FormClientInfo from '@/components/organisms/form/FormClientInfo.vue';
    import TableAction from '@/components/organisms/tables/TableAction.vue';
    import SelectLabel from '@/components/atoms/selects/SelectLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import { ref } from 'vue';

    const isOpen = defineModel<boolean>({ default: false });
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
    const statuses = ref<Array<any>>([
        { name: 'Aprobado', value: 'approved' },
        { name: 'Rechazado', value: 'rejected' },
        { name: 'Analizando', value: 'analyzing' }
    ]);
    const status = ref<string>('');
    const notes = ref<string>('');
</script>

<template>
    <ModalBase
        v-model="isOpen"
        modalId="modal-validate-sale"
        modalSize="w-full sm:w-3/4"
        title="Validar venta"
        titleSize="text-2xl"
        textColor="text-t-primary"
    >
        <template #modal-content>
            <FormClientInfo />
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
            <div>
                <h4 class="text-t-primary text-lg mb-1">
                    Calificación
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div class="col-span-2">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                            <div class="col-span-1">
                                <SelectLabel v-model="status" name="status" label="Estatus de la venta" labelText="text-xs" selectText="text-xs" textColor="text-t-secondary" :options="statuses" />
                            </div>
                            <div class="col-span-2">
                                <label for="notes" class="text-xs text-t-secondary mb-0.5">Notas</label>
                                <textarea
                                    id="notes"
                                    v-model="notes"
                                    class="w-full resize-none rounded border border-border text-sm"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #modal-footer>
            <ButtonBlockIcon
                bgColor="bg-surface"
                text="Enviar"
                size="w-auto"
                padding="px-2 py-0.5"
                textSize="text-sm"
            />
        </template>
    </ModalBase>
</template>