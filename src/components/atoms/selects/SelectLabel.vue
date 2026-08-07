<script setup lang="ts">
    const model = defineModel<any>();

    withDefaults(defineProps<{
        label?: string,
        labelText?: string,
        textSize?: string,
        size?: string,
        inputSize?: string,
        defaultOption?: string,
        options?: any[]
    }>(), {
        label: '',
        labelText: 'text-sm',
        textSize: 'text-sm',
        size: 'w-full',
        inputSize: 'px-2 py-1',
        defaultOption: 'Seleccione una opción',
        options: () => [],
    })
</script>
<template>
    <div class="relative">
        <label :for="label" :class="`${labelText} text-t-primary mb-0.5`"> {{ label }} </label>
        <select 
            v-model="model"
            :class="`rounded border border-border rounded-md text-t-primary bg-surface ${size} ${inputSize} ${textSize} cursor-pointer`"
        >
            <option value="" selected disabled>{{ defaultOption }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
        </select>
    </div>
</template>