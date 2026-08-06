<script setup lang="ts">
    import CardFrameForm from '@/components/atoms/cards/CardFrameForm.vue';
    import FormClientInfo from '@/components/organisms/form/FormClientInfo.vue';
</script>

<template>
    <CardFrameForm>
        <template #customized-form>
            <h3 class="text-t-primary text-2xl mb-1">
                Captura de información
            </h3>
            <p class="text-t-primary mb-1">
                Por favor, permitame corroborar su información para que podamos brindarle el mejor servicio.
            </p>
            <FormClientInfo />
        </template>
    </CardFrameForm>
</template>