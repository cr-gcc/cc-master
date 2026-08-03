<script setup lang="ts">
    import { ref } from 'vue';
    import CardFrame from '@/components/atoms/cards/CardFrame.vue';
    import ButtonBlockIcon from '@/components/atoms/buttons/ButtonBlockIcon.vue';
    import ModalClassifyCall from '@/domains/seller/components/modals/ModalClassifyCall.vue'
    import { useSplashStore } from '@/stores/useSplashScreenStore';
    
    const splash = useSplashStore();
    const showClassifyCall = ref<boolean>(false);
    const body = "<p>Excelente, gracias por su confianza.</p><p>Confirmo que hoy está realizando la contratación de su <strong>Protección Antifraude</strong>, la cual quedará asociada a su tarjeta de crédito conforme a las condiciones informadas durante esta llamada.</p><p>Recibirá la información correspondiente a su contratación por los medios registrados con el banco.</p><p>¿Tiene alguna duda antes de finalizar la llamada?</p><p>En nombre de <strong>Banco X</strong>, agradecemos su preferencia y le deseamos un excelente día.</p>";

    const saveSale = () => {
        splash.show();
        setTimeout(() => {
            splash.hide();
            showClassifyCall.value = true;
        }, 2000);
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