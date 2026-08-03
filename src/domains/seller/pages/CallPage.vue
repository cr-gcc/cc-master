<script setup lang="ts">
    import { ref } from 'vue';
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import ButtonCircleIcon from '@/components/atoms/buttons/ButtonCircleIcon.vue';
    import CardCallOptComponent from '@/domains/seller/components/cards/CardCallOptComponent.vue';
    import CardSupportMaterial from '@/domains/seller/components/cards/CardSupportMaterial.vue';
    import FormInfoCall from '@/domains/seller/components/forms/FormInfoCall.vue';
    import FormSaveSale from '@/domains/seller/components/forms/FormSaveSale.vue';
    
    const text1 = "Agente";
    const text2 = "Producto";
    const body1 = "<p>Buenos días/tardes. Mi nombre es <strong>{Nombre del Agente}</strong> y le llamo de <strong>Banco X</strong>.</p><p>El motivo de mi llamada es brindarle información sobre una solución de <strong>protección antifraude</strong> diseñada para ayudar a proteger las compras y operaciones realizadas con su tarjeta de crédito.</p><p>¿Me permite unos minutos para explicarle cómo funciona?</p>";
    const body2 = "<p>El servicio de protección antifraude le brinda respaldo ante posibles eventos de fraude relacionados con el uso de su tarjeta de crédito, ofreciendo apoyo económico conforme a las condiciones de la cobertura contratada.</p><p>Entre sus principales beneficios se encuentran:</p><ul><li>Protección ante cargos no reconocidos cubiertos por la póliza.</li><li>Mayor tranquilidad al utilizar su tarjeta en establecimientos físicos y en línea.</li><li>Respaldo y acompañamiento en caso de un incidente de fraude.</li></ul><p>Es una forma sencilla de contar con mayor seguridad para sus operaciones financieras.</p>";
    const activeTab = ref('tab-1');
    const indexTab = ref(1);
    const maxIndexTab = ref(4);

    function previousTab() {
        if (indexTab.value > 1) {
            indexTab.value--;
            activeTab.value = `tab-${indexTab.value}`;
        }
    }

    function nextTab() {
        if (indexTab.value < maxIndexTab.value) {
            indexTab.value++;
            activeTab.value = `tab-${indexTab.value}`;
        }
    }
</script>

<template>
    <div id="sale-call" class="container mx-auto mb-10">
        <article class="rounded-xl border border-border bg-surface px-3 py-2 mt-3 mb-3">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-x-1 gap-y-0">
                <div class="md:col-span-2">
                    <p class="text-t-primary font-bold">Tarjeta de crédito</p>
                </div>
                <div class="md:col-span-2">
                    <p class="text-t-primary font-bold">Anti fraude</p>
                </div>
                <div>
                    <p class="text-t-secondary">Cliente: <span class="font-semibold">Juan Pérez López</span></p>
                </div>
                <div>
                    <p class="text-t-secondary">Correo: <span class="font-semibold">usuario@exemplo.com</span></p>
                </div>
                <div>
                    <p class="text-t-secondary">Teléfono: <span class="font-semibold">55 5555 5555</span></p>
                </div>
                <div>
                    <p class="text-t-secondary">Fecha de nacimiento: <span class="font-semibold">28-Julio-1991</span></p>
                </div>
                <div>
                    <p class="text-t-secondary">Edad: <span class="font-semibold">35</span></p>
                </div>
                <div>
                    <p class="text-t-secondary">RFC: <span class="font-semibold">PELJ9107289B7</span></p>
                </div>
                <div class="md:col-span-4">
                    <p class="text-t-secondary">Dirección: <span class="font-semibold">Calle Falsa 123, Colonia Centro, Ciudad de México, CDMX, C.P. 12345</span></p>
                </div>
            </div>
        </article>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div class="md:col-span-3">
                <div class="rounded-xl border border-border p-2">
                    <CardFrame 
                        v-if="activeTab === 'tab-1'" 
                        titleSize="text-2xl" 
                        textSize="text-md" 
                        :title=text1 
                        :body=body1 
                    />
                    <CardFrame 
                        v-else-if="activeTab === 'tab-2'"               
                        titleSize="text-2xl" 
                        textSize="text-md" 
                        :title=text2 
                        :body=body2 
                    />
                    <FormInfoCall
                        v-else-if="activeTab === 'tab-3'"
                    />     
                    <FormSaveSale
                        v-else-if="activeTab === 'tab-4'"
                    />         
                    <div class="flex items-center justify-center gap-1">
                        <ButtonCircleIcon
                            v-if="indexTab > 1"
                            @click="previousTab()"
                            bgColor="bg-surface" 
                            icon="fa-solid fa-arrow-left"
                        />
                        <ButtonCircleIcon 
                            v-if="indexTab < maxIndexTab"
                            @click="nextTab()"
                            bgColor="bg-surface" 
                            icon="fa-solid fa-arrow-right"
                        />
                    </div>    
                </div>
            </div>
            <div class="md:col-span-1">
                <div class="mb-3">
                    <CardSupportMaterial />
                </div>
                <div class="mb-3">
                    <CardCallOptComponent />
                </div>
            </div>
        </div>
    </div>
</template>
