<script setup lang="ts">
    import ProgresBar from '@/components/atoms/loaders/ProgresBar.vue';
    import AlertBasic from '@/components/atoms/alerts/AlertBasic.vue';
    const props = withDefaults(defineProps<{
        gridCols?: string;
        loading?: boolean;
        alertMessage?: string;
        alertType?: string;
        }>(), {
        gridCols: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        loading: false,
        alertMessage: '',
        alertType: '',
    });

</script>

<template>
    <div :class="[gridCols, 'gap-2 items-center mb-2']">
        <slot name="inputs-buton" />
        <slot />
        <div v-if="loading" class="col-span-full">
            <ProgresBar />
        </div>
        <div v-if="alertMessage" class="col-span-full text-right">
            <AlertBasic 
                :message="alertMessage"
                :type="alertType"
            />
        </div>
    </div>
</template>