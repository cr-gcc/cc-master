<script setup lang="ts">
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import CardFrameForm from '@/components/atoms/cards/CardFrameForm.vue';
</script>

<template>
    <div id="sales-dashboard" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Dashboard de ventas</h1>
        <div class="rounded-xl border border-border p-2">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-2 items-center mb-2">
                <div></div>
                <div class="bg-surface rounded-md">
                    <InputLabel name="start_date" type="date" />
                </div>
                <div class="bg-surface rounded-md">
                    <InputLabel name="end_date" type="date" />
                </div>
                <ButtonBlockIcon margin="mb-0" bgColor="bg-surface" icon="fa-solid fa-search" textSize="text-sm" text="Buscar" />
            </div>
            <CardFrameForm>
                <template #customized-form>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y-2 divide-gray-200">
                            <thead class="text-left text-t-primary">
                                <tr>
                                    <th class="px-3 py-2 whitespace-nowrap">
                                        Campaña
                                    </th>
                                    <th class="px-3 py-2 whitespace-nowrap">
                                        Exitosas
                                    </th>
                                    <th class="px-3 py-2 whitespace-nowrap">
                                        Rechazadas
                                    </th>
                                    <th class="px-3 py-1 whitespace-nowrap">
                                        Pendientes
                                    </th>
                                    <th class="px-3 py-1 whitespace-nowrap">
                                        En evaluación
                                    </th>
                                    <th class="px-3 py-1 whitespace-nowrap">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr class="text-t-secondary">
                                    <td class="px-3 py-1">Anti fraude</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                </tr>
                                <tr class="text-t-secondary">
                                    <td class="px-3 py-1">Seguro de vida</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                    <td class="px-3 py-1">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </template>
            </CardFrameForm>
        </div>

    </div>
</template>
