<script setup lang="ts">
    import FormLogin from "@/domains/auth/components/FormLogin.vue";

    const mainBanner = `${import.meta.env.BASE_URL}images/banners/login_banner.png`
</script>

<template>
    <div class="bg-cover bg-no-repeat bg-center" :style="`background-image: url('${mainBanner}');`">
        <div class="flex justify-center h-screen">
            <div class="hidden lg:block lg:w-2/3 h-full"></div>
            <div class="flex items-start lg:items-center w-full max-w-md px-6 ml-auto lg:w-2/6 bg-black opacity-80 pt-24 lg:pt-0">
                <FormLogin />
            </div>
        </div>
    </div>
</template>
