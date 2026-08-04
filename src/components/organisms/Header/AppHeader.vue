<script setup lang="ts">
    import { ref } from 'vue';    
    import { useRouter } from 'vue-router';
    import DropdownBase from '@components/molecules/DropdownBasic.vue';
    import ModalProfileUser from '@components/organisms/modals/ModalProfileUser.vue';
    import { useThemeStore } from '@/stores/themeStore';
    import { lightTheme, darkTheme } from '@/themes/defaults';
    import { useSplashStore } from '@/stores/useSplashScreenStore';
    import { useAuthStore } from '@/stores/useAuthStore';

    const router = useRouter();
    const themeStore = useThemeStore();
    const splashScreen = useSplashStore();
    const showProfileUserModal = ref(false);
    const authStore = useAuthStore();
    const isMobileMenuOpen = ref(false);

    const logoWhite = `${import.meta.env.BASE_URL}images/logos/cc_w.png`;
    const logoBlack = `${import.meta.env.BASE_URL}images/logos/cc_b.png`;

    const logout = () => {
        splashScreen.show();
        
        setTimeout(() => {
            splashScreen.hide();
            authStore.logout();
            
            router.push({name: 'login'});
        }, 2000);
    }

    const toggleTheme = () => {
        if (themeStore.theme.slug === 'dark') {
            themeStore.setTheme(lightTheme);
        } else {
            themeStore.setTheme(darkTheme);
        }
    };
</script>

<template>
    <header id="header" class="bg-header">
        <div class="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block" href="#">
                        <span class="sr-only">Home</span>
                        <img v-if="themeStore.theme.slug === 'dark'" :src="logoWhite" alt="CC Master" class="h-12 w-auto">
                        <img v-else :src="logoBlack" alt="CC Master" class="h-12 w-auto">
                    </a>
                </div>
                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-md">
                            <li v-if="authStore.user?.role === 'seller'">
                                <router-link :to="{name: 'seller-home'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Inicio
                                </router-link>
                            </li>
                            <li v-if="authStore.user?.role === 'seller'">
                                <router-link :to="{name: 'seller-statistics'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Estadísticas
                                </router-link>
                            </li>
                            <li v-if="authStore.user?.role === 'seller'">
                                <router-link :to="{name: 'seller-call'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Llamada
                                </router-link>
                            </li>
                            <li v-if="['admin', 'super-admin', 'coordinator','supervisor'].includes(authStore.user?.role as string)">
                                <router-link :to="{name: 'admin-sales-dashboard'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Dashboard
                                </router-link>
                            </li>
                            <li v-if="['admin', 'super-admin', 'coordinator'].includes(authStore.user?.role as string)">
                                <router-link :to="{name: 'admin-sales'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Ventas
                                </router-link>
                            </li>
                            <li class="border-l-2 border-t-secondary h-8"></li>
                            <li>
                                <button @click="toggleTheme" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary cursor-pointer" :title="themeStore.theme.slug === 'light' ? 'Tema oscuro' : 'Tema claro'">
                                    <i v-if="themeStore.theme.slug === 'light'" class="fa-solid fa-moon text-2xl"></i>
                                    <i v-else class="fa-solid fa-circle text-2xl"
                                    ></i>
                                </button>
                            </li>
                            <li>
                                <DropdownBase>
                                    <template #trigger>
                                        <button 
                                            type="button"
                                            class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary cursor-pointer">
                                            <i class="fas fa-user-circle text-2xl"></i>
                                        </button>
                                    </template>
                                    <template #menu>
                                        <div>
                                            <button
                                                type="button"
                                                @click.prevent="showProfileUserModal = true"
                                                class="block w-full px-3 py-2 text-sm font-medium ltr:text-left rtl:text-right text-t-primary transition-colors hover:bg-main cursor-pointer"
                                                role="menuitem"
                                            >
                                                Perfil
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                @click.prevent="logout()"
                                                class="block w-full px-3 py-2 text-sm font-medium text-error transition-colors hover:bg-main ltr:text-left rtl:text-right cursor-pointer"
                                            >
                                                Cerrar sesión
                                            </button>
                                        </div>
                                    </template>
                                </DropdownBase>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex items-center gap-4">
                        <div class="block md:hidden">
                            <button
                            @click="isMobileMenuOpen = !isMobileMenuOpen"
                            class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 cursor-pointer"
                            >
                                <span class="sr-only">Toggle menu</span>
                                <svg
                                    v-if="!isMobileMenuOpen"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg 
                                    v-else 
                                    aria-hidden="true" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="size-5" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    stroke-width="2"
                                >
                                    <path 
                                    stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
                <ul class="flex flex-col gap-4 text-md">
                    <li v-if="authStore.user?.role === 'seller'">
                        <router-link :to="{name: 'seller-home'}" @click="isMobileMenuOpen = false" class="block transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                            Inicio
                        </router-link>
                    </li>
                    <li v-if="authStore.user?.role === 'seller'">
                        <router-link :to="{name: 'seller-statistics'}" @click="isMobileMenuOpen = false" class="block transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                            Estadísticas
                        </router-link>
                    </li>
                    <li v-if="authStore.user?.role === 'seller'">
                        <router-link :to="{name: 'seller-call'}" @click="isMobileMenuOpen = false" class="block transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                            Llamada
                        </router-link>
                    </li>
                    <li v-if="['admin', 'super-admin', 'coordinator','supervisor'].includes(authStore.user?.role as string)">
                        <router-link :to="{name: 'admin-sales-dashboard'}" @click="isMobileMenuOpen = false" class="block transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                            Dashboard
                        </router-link>
                    </li>
                    <li v-if="['admin', 'super-admin', 'coordinator'].includes(authStore.user?.role as string)">
                        <router-link :to="{name: 'admin-sales'}" @click="isMobileMenuOpen = false" class="block transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                            Ventas
                        </router-link>
                    </li>
                    <li class="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <button @click="toggleTheme" class="flex items-center gap-2 transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary cursor-pointer">
                            <span>{{ themeStore.theme.slug === 'light' ? 'Tema obscuro' : 'Tema claro' }}</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            @click.prevent="showProfileUserModal = true; isMobileMenuOpen = false"
                            class="block w-full text-left text-md text-t-secondary cursor-pointer"
                        >
                            Perfil
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            @click.prevent="logout()"
                            class="block w-full text-left text-md text-error cursor-pointer"
                        >
                            Cerrar sesión
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <ModalProfileUser v-model="showProfileUserModal" />
</template>