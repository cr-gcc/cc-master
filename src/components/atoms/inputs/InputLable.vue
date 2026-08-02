<script setup lang="ts">
    withDefaults(defineProps<{
        textColor?: string
        inputSize?: string
        inputText?: string
        labelText?: string
        label?: string
        name?: string
        type?: string
        modelValue?: string
        disabled?: boolean
    }>(), {
        textColor: 'text-t-primary',
        inputSize: 'p-1',
        inputText: 'text-sm',
        labelText: 'text-sm',
        label: '',
        name: '',
        type: 'text',
        modelValue: '',
        disabled: false
    })
</script>

<template>
    <div>
        <label :for="name" :class="`${labelText} ${textColor} block mb-0`">
            {{ label }}
        </label>
        <input :id="name" :name="name" :type="type" :value="modelValue" :disabled="disabled" :class="`w-full ${inputSize} ${inputText} ${textColor} border border-border rounded-md`" />
    </div>
</template>