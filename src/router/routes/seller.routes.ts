import { type RouteRecordRaw } from "vue-router";
import Seller from "@/domains/seller/pages/SellerPage.vue";
import Statistics from "@/domains/seller/pages/StatisticsPage.vue";
import Call from "@/domains/seller/pages/CallPage.vue";


const sellerRoutes: RouteRecordRaw[] = [
    {
        path: "/seller",
        name: "seller",
        component: Seller,
        meta: { layout: 'main' },
    },
    {
        path: "/seller/statistics",
        name: "seller-statistics",
        component: Statistics,
        meta: { layout: 'main' },
    },
    {
        path: "/seller/call",
        name: "seller-call",
        component: Call,
        meta: { layout: 'main' },
    },
];

export default sellerRoutes;