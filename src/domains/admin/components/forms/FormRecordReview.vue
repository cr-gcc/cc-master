<script setup lang="ts">
    import SelectLabel from '@/components/atoms/selects/SelectLabel.vue';
    import { ref } from 'vue';

    const statuses = ref<Array<any>>([
        { name: 'Aprobado', value: 'approved' },
        { name: 'Rechazado', value: 'rejected' },
        { name: 'Analizando', value: 'analyzing' }
    ]);
    const status = ref<string>('');
    const notes = ref<string>('');
</script>

<template>
    <div>
        <h4 class="text-t-primary text-lg">
            Evaluación
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