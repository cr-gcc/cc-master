<script setup lang="ts">
    import AdminNavigation from '@/domains/admin/components/AdminNavigation.vue';
    import SellerNavigation from '@/domains/seller/components/SellerNavigation.vue';
    import DropdownBase from '@components/molecules/wrappers/DropdownBasic.vue';
    import ModalProfileUser from '@components/organisms/modals/ModalProfileUser.vue';
    import { ref } from 'vue';  
    import { useRouter } from 'vue-router';
    import { useThemeStore } from '@/stores/useThemeStore';
    import { lightTheme, darkTheme } from '@/themes/defaults';
    import { useAuthStore } from '@/stores/useAuthStore';
    import { usePhoneSessionStore } from '@/stores/usePhoneSessionStore';
    import { useSplashStore } from '@/stores/useSplashScreenStore';

    const router = useRouter();
    const themeStore = useThemeStore();
    const authStore = useAuthStore(); 
    const phoneSessionStore = usePhoneSessionStore();
    const splashScreen = useSplashStore();

    const logoWhite = `${import.meta.env.BASE_URL}images/logos/cc_w.png`;
    const logoBlack = `${import.meta.env.BASE_URL}images/logos/cc_b.png`;
    const showProfileUserModal = ref(false);
    const isMobileMenuOpen = ref(false);
    
    const logout = () => {
        splashScreen.show();
        
        setTimeout(() => {
            splashScreen.hide();
            phoneSessionStore.logout();
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
                        <img 
                            v-if="themeStore.theme.slug === 'dark'" 
                            :src="logoWhite" 
                            alt="CC Master" 
                            class="h-12 w-auto"
                        >
                        <img 
                            v-else 
                            :src="logoBlack" 
                            alt="CC Master" 
                            class="h-12 w-auto"
                        >
                    </a>
                </div>
                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-md">
                            <SellerNavigation 
                                v-if="authStore.user?.role === 'seller'" 
                                :is-mobile="false" 
                            />
                            <AdminNavigation 
                                v-if="authStore.user?.role !== 'seller'"
                                :is-mobile="false"
                                :role="authStore.user?.role" 
                            />
                            <li class="border-l-2 border-t-secondary h-8"></li>
                            <li>
                                <button 
                                    @click="toggleTheme"
                                    type="button"
                                    class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary cursor-pointer" 
                                    :title="themeStore.theme.slug === 'light' ? 'Tema oscuro' : 'Tema claro'">
                                    <i v-if="themeStore.theme.slug === 'light'" class="fa-solid fa-moon text-2xl"></i>
                                    <i v-else class="fa-solid fa-circle text-2xl"></i>
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
                    <SellerNavigation 
                        @close-mobile-menu="isMobileMenuOpen = false"
                        v-if="authStore.user?.role === 'seller'" 
                        :is-mobile="true"
                    />
                    <AdminNavigation
                        @close-mobile-menu="isMobileMenuOpen = false"
                        v-if="authStore.user?.role !== 'seller'" 
                        :role="authStore.user?.role"
                        :is-mobile="true"  
                    />
                    <li class="border-t-2 border-border"></li>
                    <li>
                        <button
                            type="button"
                            @click="toggleTheme"
                            class="block w-full text-left text-md text-t-secondary cursor-pointer">
                            <span>{{ themeStore.theme.slug === 'light' ? 'Tema obscuro' : 'Tema claro' }}</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            @click.prevent="showProfileUserModal = true; isMobileMenuOpen = false"
                            class="block w-full text-left text-md text-t-secondary cursor-pointer"
                        >
                            <span>Perfil</span>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            @click.prevent="logout()"
                            class="block w-full text-left text-md text-error cursor-pointer"
                        >
                            <span>Cerrar sesión</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <ModalProfileUser v-model="showProfileUserModal" />
</template>