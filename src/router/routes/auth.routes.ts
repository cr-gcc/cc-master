import { type RouteRecordRaw } from "vue-router";
import Login from "@/domains/auth/pages/LoginPage.vue";

const authRoutes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: { layout: 'blank' },
    },
];

export default authRoutes;