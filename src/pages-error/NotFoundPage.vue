<script setup lang="ts">
    import { useAuthStore } from "@/stores/useAuthStore.ts"

    const authStore = useAuthStore()
    const mainBanner = `${import.meta.env.BASE_URL}images/banners/error_banner.png`
</script>

<template>
    <div class="bg-cover bg-no-repeat bg-center" :style="`background-image: url('${mainBanner}');`">
        <div class="flex justify-center h-screen">
            <div class="flex items-center justify-center w-full px-6">
                <article class="w-full md:w-1/3 bg-black/70 px-4 py-2 mb-2">
                    <div class="mb-3">
                        <h1 class="text-gray-100 text-5xl mb-2">Error 404</h1>
                        <h2 class="text-gray-200 text-3xl mb-2">Página no encontrada</h2>
                        <p class="text-gray-300 text-md mb-4">Lo sentimos, la página que buscas no existe.
                            <router-link 
                                v-if="authStore.user?.role==='seller'"
                                to="/seller" 
                                class="text-white hover:font-semibold">
                                Regresar al inicio
                            </router-link>
                            <router-link 
                                v-else
                                to="/admin" 
                                class="text-white hover:font-semibold">
                                Regresar al inicio
                            </router-link>
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>