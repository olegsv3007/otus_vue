import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage,
    },
    {
        path: '/products/:productId',
        name: 'product',
        component: ProductDetailPage,
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;