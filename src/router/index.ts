import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NotFound from "@/pages-error/NotFoundPage.vue";
import authRoutes from "@/router/routes/auth.routes.ts";
import adminRoutes from "@/router/routes/admin.routes.ts";
import sellerRoutes from "@/router/routes/sellers.routes.ts";

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
    ...authRoutes,
    ...adminRoutes,
    ...sellerRoutes,
    ...errorRoutes,
]

const router = createRouter({
    history: createWebHistory(base),
    routes,
})

export default router