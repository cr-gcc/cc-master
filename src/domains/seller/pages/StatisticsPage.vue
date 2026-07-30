<script setup lang="ts">
    import CardInfComponent from '@/domains/seller/components/cards/CardInfComponent.vue';
    import CardTimeComponent from '@/domains/seller/components/cards/CardTimeComponent.vue';
</script>

<template>
    <div id="statistics" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Estadísticas</h1>
        <h3 class="text-t-secondary text-2xl mb-4">Resumen <span class="font-semibold">28 de julio de 2026</span></h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!--<div class="md:col-span-2">-->
            <div>
                <CardInfComponent />
            </div>
            <div>
                <CardTimeComponent />
            </div>
        </div>
    </div>
</template>