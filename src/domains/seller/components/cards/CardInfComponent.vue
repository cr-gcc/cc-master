<script setup lang="ts">
    import CardBasicInfo from '@/components/molecules/cards/CardBasicInfo.vue';

    const results = [
        { textSize: 'text-2xl', icon: 'fa-solid fa-check-circle', label: 'Exitosas', value: 1 },
        { textSize: 'text-2xl', icon: 'fa-solid fa-xmark-circle', label: 'Rechazadas', value: 0 },
        { textSize: 'text-2xl', icon: 'fa-solid fa-exclamation-circle', label: 'Pendientes de revisión', value: 0 },
        { textSize: 'text-2xl', icon: 'fa-solid fa-hourglass-start', label: 'En evaluación', value: 0 },
        { textSize: 'text-2xl', icon: 'fa-solid fa-calendar-check', label: 'Agendadas', value: 0 }
    ];
</script>

<template>
    <CardBasicInfo 
        textSize="text-2xl"
        title="Resultados del día (Llamadas)" 
        icon="fas fa-chart-line" 
        :items="results"
    >
        <template #default="{ item }">
            <p class="text-t-primary">
                <i :class="[item.icon, 'mr-2']"></i> {{ item.label }} <span class="text-t-secondary font-semibold pl-2">{{ item.value }}</span>
            </p>
        </template>
    </CardBasicInfo>
</template>