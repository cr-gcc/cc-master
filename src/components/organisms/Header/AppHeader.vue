<script setup lang="ts">
    import { ref } from 'vue';
    import DropdownBase from '@components/molecules/DropdownBasic.vue';
    import ModalProfileUser from '@components/organisms/modals/ModalProfileUser.vue';
    import { useThemeStore } from '@/stores/themeStore';
    import { lightTheme, darkTheme } from '@/themes/defaults';

    const themeStore = useThemeStore();

    const showProfileUserModal = ref(false);

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
                        <img v-if="themeStore.theme.slug === 'dark'" src="/images/logos/cc_w.png" alt="CC Master" class="h-12 w-auto">
                        <img v-else src="/images/logos/cc_b.png" alt="CC Master" class="h-12 w-auto">
                    </a>
                </div>
                <div class="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" class="hidden md:block">
                        <ul class="flex items-center gap-6 text-md">
                            <li>
                                <router-link :to="{name: 'seller-home'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Inicio
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'seller-statistics'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Estadísticas
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'seller-call'}" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                    Llamada
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
                                        <a href="#" class="transition text-t-secondary hover:text-t-primary dark:text-t-primary dark:hover:text-t-secondary">
                                            <i class="fas fa-user-circle text-2xl"></i>
                                        </a>
                                    </template>
                                    <template #menu>
                                      <div>
                                        <a
                                          href="#"
                                          @click.prevent="showProfileUserModal = true"
                                          class="block px-3 py-2 text-sm font-medium text-t-primary transition-colors hover:bg-main"
                                          role="menuitem"
                                        >
                                          Perfil
                                        </a>
                                      </div>
                                      <button
                                        type="button"
                                        class="block w-full px-3 py-2 text-sm font-medium text-error transition-colors hover:bg-main ltr:text-left rtl:text-right cursor-pointer"
                                      >
                                        Cerrar sesión
                                      </button>
                                    </template>
                                </DropdownBase>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex items-center gap-4">
                        <div class="block md:hidden">
                            <button
                            class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                            >
                            <span class="sr-only">Toggle menu</span>

                            <svg
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <ModalProfileUser v-model="showProfileUserModal" />
</template>