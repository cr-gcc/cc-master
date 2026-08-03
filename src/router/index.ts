import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NotFound from "@/pages-error/NotFoundPage.vue";
import authRoutes from "@/router/routes/auth.routes.ts";
import adminRoutes from "@/router/routes/admin.routes.ts";
import sellerRoutes from "@/router/routes/seller.routes.ts";
import { useAuthStore } from '@/stores/useAuthStore';

const base = import.meta.env.VITE_BASE_URL || "/";

const errorRoutes: RouteRecordRaw[] = [
    {
        path: '/404',
        name: 'not-found',
        component: NotFound,
        meta: { layout: 'blank' },
    }
]

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    ...authRoutes,
    ...adminRoutes,
    ...sellerRoutes,
    ...errorRoutes,
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(base),
    routes,
})

router.beforeEach((to, _from, next) => {
    const authStore = useAuthStore()
    const isAuthenticated = !!authStore.user
    const userRole = authStore.user?.role

    if (to.meta.requiresAuth) {
        if (!isAuthenticated) {
            return next({ name: 'login' })
        }
        if (to.meta.role) {
            const allowedRoles = Array.isArray(to.meta.role) ? to.meta.role : [to.meta.role];
            if (!allowedRoles.includes(userRole)) {
                return next({ name: 'not-found' })
            }
        }
    }

    if (to.name === 'login' && isAuthenticated) {
        if (userRole === 'seller') {
            return next({ name: 'seller-home' })
        }
        return next({ name: 'admin' })
    }

    next()
})

export default router