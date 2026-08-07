<script setup lang="ts">
    import ReportsGenerator from '@/domains/admin/components/wrappers/ReportsGenerator.vue';
    import ReportsFiles from '@/domains/admin/components/wrappers/ReportsFiles.vue';
</script>

<template>
    <div id="reports" class="container mx-auto mb-10">
        <h1 class="text-t-primary text-5xl mb-4">Reportes</h1>
        <ReportsGenerator />
        <ReportsFiles />
    </div>  
</template>