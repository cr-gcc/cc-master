<script setup lang="ts">
    import CardFrameForm from '@/components/atoms/cards/CardFrameForm.vue';
    
    export interface ColumnConfig {
        label: string;
        key: string;
        custom?: boolean;
    }

    const props = withDefaults(defineProps<{
        columns: Array<ColumnConfig>
        data: Array<any>
        textSize?: string
        lastRowBold?: boolean
        headerTextCenter?: string
        miniFrame?: boolean
    }>(), {
        columns: () => [],
        data: () => [],
        textSize: 'text-xs',
        lastRowBold: false,
        headerTextCenter: 'text-center',
        miniFrame: false
    });
</script>

<template>
    <CardFrameForm :miniFrame="miniFrame">
        <template #customized-form>
            <div class="overflow-x-auto">
                <table :class="[textSize, 'min-w-full divide-y-2 divide-gray-200']">
                    <thead :class="[headerTextCenter, 'text-t-primary']">
                        <tr>
                            <th v-for="(col, index) in columns" :key="index" class="px-3 py-2 whitespace-nowrap">
                                {{ col.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr class="text-t-secondary" v-for="(row, index) in data" :key="index">
                            <td 
                                v-for="(col, colIndex) in columns" 
                                :key="colIndex"
                                :class="['px-3 py-0.5 whitespace-nowrap', index == data.length - 1 && lastRowBold ? 'font-semibold text-error' : '']" 
                            >
                                <slot v-if="col.custom" :name="`cell-${col.key}`" :item="row" :index="index"></slot>
                                <span v-else>{{ row[col.key] }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </CardFrameForm>
</template>
