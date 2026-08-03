<script setup lang="ts">
    import { ref } from 'vue';
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalClassifyCall from '@/domains/seller/components/modals/ModalClassifyCall.vue'
    import { useSplashStore } from '@/stores/useSplashScreenStore';
    
    const splash = useSplashStore();
    const showClassifyCall = ref<boolean>(false);
    const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

    const saveSale = () => {
        splash.show();
        /*
        setTimeout(() => {
            splash.hide();
            showClassifyCall.value = true;
        }, 3000);
        */
    }

</script>

<template>
    <CardFrame 
        titleSize="text-2xl" 
        textSize="text-md" 
        title="Finalizar venta" 
        :body="body" 
    >
        <template #options>
            <div class="flex justify-end">
                <ButtonBlockIcon 
                    bgColor="bg-surface" 
                    icon="fa-solid fa-save" 
                    text="Guardar" 
                    padding="px-2 py-1" 
                    textSize="text-sm" 
                    @click="saveSale()"/>
            </div>    
        </template>
    </CardFrame> 
    <ModalClassifyCall v-model="showClassifyCall" />
</template>