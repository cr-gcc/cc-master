<script setup lang="ts">
import CardBasicInfo from '@/components/molecules/cards/CardBasicInfo.vue';

const activities = [
    { icon: 'fa-solid fa-desktop', label: 'Tiempo de conexión', value: '00:00:00' },
    { icon: 'fa-solid fa-utensils', label: 'Tiempo de comida', value: '00:00:00' },
    { icon: 'fa-solid fa-phone-slash', label: 'Tiempo de descanso', value: '00:00:00' },
    { icon: 'fa-solid fa-restroom', label: 'Tiempo sanitario', value: '00:00:00' }
];
</script>

<template>
    <CardBasicInfo 
        textSize="text-2xl"
        title="Actividades" 
        icon="fas fa-clock" 
        :items="activities"
    >
        <template #default="{ item }">
            <p class="text-t-primary">
                <i :class="[item.icon, 'mr-2']"></i> {{ item.label }}
            </p>
            <p><span class="text-t-secondary">{{ item.value }}</span></p>
        </template>
    </CardBasicInfo>
</template>