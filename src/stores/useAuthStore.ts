import { defineStore } from 'pinia';
import { useThemeStore } from '@/stores/themeStore';

export interface User {
    id: number;
    user: string;
    name: string;
    lastName: string;
    role: string;
    role_name: string;
    password: string;
    email: string;
}

const usersFake: User[] = [
    {
        id: 1,
        user: 'XXXX000000',
        name: 'Carlos',
        lastName: 'Flores Vasquez',
        role: 'seller',
        role_name: 'Agente de ventas',
        password: 'xxxx000000',
        email: ''
    },
    {
        id: 2,
        user: 'XXXX000001',
        name: 'Hannia',
        lastName: 'Vega Mondragon',
        role: 'coordinator',
        role_name: 'Coordinador de calidad',
        password: 'xxxx000001',
        email: 'hannia.mondragon@exe.com'
    }
];

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null
    }),
    actions: {
        setUser(user: User | null) {
            this.user = user;
        },
        login(username: string, password: string): boolean {
            const foundUser = usersFake.find(
                (u) => u.user === username && u.password === password
            );
            if (foundUser) {
                this.setUser(foundUser);
                return true;
            }
            return false;
        },
        logout() {
            this.setUser(null);
            
            const themeStore = useThemeStore();
            themeStore.clearTheme();

            setTimeout(() => {
                localStorage.removeItem('auth');
            }, 0);
        }
    },
    persist: true
});