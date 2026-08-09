import { defineStore } from 'pinia';

export interface PhoneSession {
    user: string;
    password: string;
    extension: string;
    domain: string;
}

export interface PhoneSessionState {
    phoneSession: PhoneSession | null;
    isOnline: boolean;
}

const phoneSessionFake: PhoneSession =
{
    user: 'XXXX000000',
    password: 'xxxx000000',
    extension: '8400',
    domain: 'example.com.mx'
};

export const usePhoneSessionStore = defineStore('phoneSession', {
    state: (): PhoneSessionState => ({
        phoneSession: null,
        isOnline: false
    }),
    getters: {
        isPhoneSessionInitialized: (state): boolean => state.phoneSession !== null
    },
    actions: {
        /**
         * Verifica si la sesión guardada sigue activa en la plataforma de telefonía.
         * TODO: reemplazar la simulación con una llamada real al endpoint.
         */
        async checkSession(): Promise<void> {
            if (!this.phoneSession) return;
            // TODO: llamar al endpoint de la plataforma de telefonía
            // Por ahora: si hay sesión guardada, se asume que sigue online
            this.isOnline = true;
        },

        setPhoneSession(phoneSession: PhoneSession) {
            this.phoneSession = phoneSession;
        },
        setOnline(value: boolean) {
            this.isOnline = value;
        },
        login(user: string, password: string, extension: string, domain: string): boolean {
            const match =
                phoneSessionFake.user === user &&
                phoneSessionFake.password === password &&
                phoneSessionFake.extension === extension &&
                phoneSessionFake.domain === domain;
            if (match) {
                this.setPhoneSession(phoneSessionFake);
                this.isOnline = true;
                return true;
            }
            return false;
        },
        logout() {
            this.phoneSession = null;
            this.isOnline = false;
            setTimeout(() => {
                localStorage.removeItem('phoneSession');
            }, 0);
        }
    },
    persist: {
        pick: ['phoneSession.user', 'isOnline']
    }
});
