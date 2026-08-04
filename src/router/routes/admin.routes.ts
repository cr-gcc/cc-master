import { type RouteRecordRaw } from "vue-router";
import SalesDashboard from "@/domains/admin/pages/SalesDashboard.vue";
import Sales from "@/domains/admin/pages/Sales.vue";

const adminRoutes: RouteRecordRaw[] = [
    {
        path: "/admin",
        alias: "/admin/sales-dashboard",
        name: "admin-sales-dashboard",
        component: SalesDashboard,
        meta: {
            layout: 'main',
            requiresAuth: true,
            role: ['super-admin', 'admin', 'supervisor', 'coordinator']
        },
    },
    {
        path: "/admin/sales",
        name: "admin-sales",
        component: Sales,
        meta: {
            layout: 'main',
            requiresAuth: true,
            role: ['super-admin', 'admin', 'coordinator']
        },
    },
];

export default adminRoutes;