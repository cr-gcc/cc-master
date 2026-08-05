<script setup lang="ts">
    import CardFrameForm from '@/components/atoms/cards/CardFrameForm.vue';
    
    const props = withDefaults(defineProps<{
        headers: Array<string>
        data: Array<any>
        textSize?: string
        lastRowBold?: boolean
    }>(), {
        headers: () => [],
        data: () => [],
        textSize: 'text-xs',
        lastRowBold: false,
    });
</script>

<template>
    <CardFrameForm>
        <template #customized-form>
            <div class="overflow-x-auto">
                <table :class="[textSize, 'min-w-full divide-y-2 divide-gray-200']">
                    <thead class="text-left text-t-primary">
                        <tr>
                            <th v-for="(header, index) in headers" :key="index" class="px-3 py-2 whitespace-nowrap">
                                {{ header }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr class="text-t-secondary" v-for="(rows, index) in data" :key="index">
                            <td :class="['px-3 py-0.5', index == data.length - 1 && lastRowBold ? 'font-semibold text-error' : '']" v-for="(column, key) in rows" :key="key">
                                {{ column }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </CardFrameForm>
</template>