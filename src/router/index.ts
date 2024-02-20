import { createRouter, createWebHistory} from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import CartPage from "../pages/CartPage.vue";

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
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

export default router;