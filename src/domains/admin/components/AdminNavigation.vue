<script setup lang="ts">
    import BaseNavLink from '@/components/atoms/links/BaseNavLink.vue';

    defineProps<{
        isMobile?: boolean;
        role?: string;
    }>();

    const emit = defineEmits(['close-mobile-menu']);

    const closeMobileMenu = () => {
        emit('close-mobile-menu');
    };
</script>

<template>
    <li v-if="['admin', 'super-admin', 'coordinator', 'supervisor'].includes(role || '')">
        <BaseNavLink
            @click="closeMobileMenu"
            :to="{name: 'admin-sales-dashboard'}"
            :is-mobile="isMobile">
            Dashboard
        </BaseNavLink>
    </li>
    <li v-if="['admin', 'super-admin', 'coordinator'].includes(role || '')">
        <BaseNavLink
            @click="closeMobileMenu"
            :to="{name: 'admin-sales'}"
            :is-mobile="isMobile">
            Ventas
        </BaseNavLink>
    </li>
    <li v-if="['admin', 'super-admin', 'coordinator'].includes(role || '')">
        <BaseNavLink
            @click="closeMobileMenu"
            :to="{name: 'admin-reports'}"
            :is-mobile="isMobile">
            Reportes
        </BaseNavLink>
    </li>
</template>
