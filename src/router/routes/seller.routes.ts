import { type RouteRecordRaw } from "vue-router";
import Home from "@/domains/seller/pages/HomePage.vue";
import Statistics from "@/domains/seller/pages/StatisticsPage.vue";
import Call from "@/domains/seller/pages/CallPage.vue";

const sellerRoutes: RouteRecordRaw[] = [
    {
        path: "/seller",
        alias: "/seller/home",
        name: "seller-home",
        component: Home,
        meta: { layout: 'main', requiresAuth: true, role: 'seller' },
    },
    {
        path: "/seller/statistics",
        name: "seller-statistics",
        component: Statistics,
        meta: { layout: 'main', requiresAuth: true, role: 'seller' },
    },
    {
        path: "/seller/call",
        name: "seller-call",
        component: Call,
        meta: { layout: 'main', requiresAuth: true, role: 'seller' },
    },
];

export default sellerRoutes;