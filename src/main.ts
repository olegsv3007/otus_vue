import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(PrimeVue);
app.mount('#app')
