<script setup lang="ts">
    const model = defineModel<any>();

    withDefaults(defineProps<{
        label?: string,
        labelText?: string,
        textSize?: string,
        size?: string,
        inputSize?: string,
        options?: any[]
    }>(), {
        label: '',
        labelText: 'text-sm',
        textSize: 'text-sm',
        size: 'w-full',
        inputSize: 'px-2 py-1',
        options: () => [],
    })
</script>
<template>
    <div class="relative">
        <label :for="label" :class="`${labelText} ${textSize} text-t-primary`"> {{ label }} </label>
        <select 
            v-model="model"
            :class="`mt-0.5 rounded border border-border rounded-md focus:outline-none ${size} ${inputSize} ${textSize} cursor-pointer`"
        >
            <option value="" selected disabled>Seleccione una opción</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
        </select>
    </div>
</template>