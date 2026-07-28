import { type RouteRecordRaw } from "vue-router";
import Admin from "@/domains/admin/pages/AdminPage.vue";

const adminRoutes: RouteRecordRaw[] = [
    {
        path: "/admin",
        name: "admin",
        component: Admin,
        meta: { layout: 'main' },
    },
];

export default adminRoutes;