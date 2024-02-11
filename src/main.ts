import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
