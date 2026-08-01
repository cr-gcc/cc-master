<script setup lang="ts">
    import { ref } from 'vue';
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import CardCallOptComponent from '@/domains/seller/components/cards/CardCallOptComponent.vue';
    import ButtonCircleIcon from '@/components/atoms/buttons/ButtonCircleIcon.vue';

    const text1 = "Presentación agente";
    const text2 = "Presentación producto";
    const text3 = "Captura de información";
    const body1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";
    const body2 = "<strong>There are many variations of passages of Lorem Ipsum available</strong>, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    const body3 = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br>The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.';  
    const activeTab = ref('tab-1');
    const indexTab = ref(1);
    const maxIndexTab = ref(3);

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
        <!-- Datos del usuarios -->
        <article class="rounded-xl border border-border bg-surface px-3 py-2 mt-3 mb-3">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-1">
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
                    <p class="text-t-secondary">Edad: <span class="font-semibold">35</span></p>
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
                        titleSize="text-lg" 
                        textSize="text-md" 
                        :title=text1 
                        :body=body1 
                    />
                    <CardFrame 
                        v-else-if="activeTab === 'tab-2'"               
                        titleSize="text-lg" 
                        textSize="text-md" 
                        :title=text2 
                        :body=body2 
                    />
                    <CardFrame 
                        v-else-if="activeTab === 'tab-3'" 
                        titleSize="text-lg" 
                        textSize="text-md" 
                        :title=text3 
                        :body=body3 
                    />
                    <div class="flex items-center justify-center gap-1">
                        <ButtonCircleIcon
                            v-if="indexTab > 1"
                            @click="previousTab()"
                            bgColor="bg-surface" 
                            icon="fa-solid fa-arrow-left" 
                            alt="Anterior" 
                        />
                        <ButtonCircleIcon 
                            v-if="indexTab < maxIndexTab"
                            @click="nextTab()"
                            bgColor="bg-surface" 
                            icon="fa-solid fa-arrow-right" 
                            alt="Siguiente" 
                        />
                    </div>    
                </div>
            </div>
            <div class="md:col-span-1">
                <CardCallOptComponent />
            </div>
        </div>
        
    </div>
</template>
