<script setup lang="ts">
    import CardFrameForm from '@/components/atoms/cards/CardFrameForm.vue';
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
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
            <h4 class="text-t-primary text-lg mb-1">
                Cliente
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <div>
                    <InputLabel name="name" type="text" label="Nombre" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div class="md:col-span-2">
                    <InputLabel name="lastname" type="text" label="Apellidos" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="age" type="number" label="Edad" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="email" type="email" label="Email" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="phone" type="number" label="Teléfono" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
            </div>
            <h4 class="text-t-primary text-lg mb-1">
                Dirección
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <InputLabel name="street" type="text" label="Calle" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="number_ext" type="number" label="Número Ext" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="number_int" type="number" label="Número Int" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="neighborhood" type="text" label="Colonia" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="city" type="text" label="Ciudad" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="state" type="text" label="Estado" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
                <div>
                    <InputLabel name="zip_code" type="number" label="Código Postal" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
                </div>
            </div>
        </template>
    </CardFrameForm>
</template>