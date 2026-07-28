import { type RouteRecordRaw } from "vue-router";
import Seller from "@/domains/sellers/pages/SellerPage.vue";

const sellerRoutes: RouteRecordRaw[] = [
    {
        path: "/seller",
        name: "seller",
        component: Seller,
        meta: { layout: 'main' },
    },
];

export default sellerRoutes;