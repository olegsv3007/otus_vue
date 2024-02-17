import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.mount('#app')
