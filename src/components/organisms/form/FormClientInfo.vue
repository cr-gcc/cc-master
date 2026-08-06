<script setup lang="ts">
    import InputLabel from '@/components/atoms/inputs/InputLabel.vue';
</script>

<template>
    <div>
        <h4 class="text-t-primary text-lg mb-1">
            Cliente
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-9 gap-2 mb-2">
            <div class="col-span-2">
                <InputLabel name="name" type="text" label="Nombre" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="lastname" type="text" label="Apellidos" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="birth_date" type="date" label="Fecha de nacimiento" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-1">
                <InputLabel name="age" type="number" label="Edad" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="rfc" type="text" label="RFC" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="email" type="email" label="Email" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="phone" type="number" label="Teléfono" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
        </div>
        <h4 class="text-t-primary text-lg mb-1">
            Dirección
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-9 gap-2 mb-2">
            <div class="col-span-3">
                <InputLabel name="street" type="text" label="Calle" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-1">
                <InputLabel name="number_ext" type="number" label="No. Ext" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-1">
                <InputLabel name="number_int" type="number" label="No. Int" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="neighborhood" type="text" label="Colonia" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="city" type="text" label="Delegación / Municipio" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-2">
                <InputLabel name="state" type="text" label="Estado" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
            <div class="col-span-1">
                <InputLabel name="zip_code" type="number" label="CP" labelText="text-xs" inputText="text-xs" textColor="text-t-secondary" />
            </div>
        </div>
    </div>  
</template>