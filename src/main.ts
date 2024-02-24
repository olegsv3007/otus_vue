import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import router from "./router";
import mitt, {Emitter} from "mitt";

const emitter: Emitter<Events> = mitt<Events>();
const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.provide('emitter', emitter);

app.mount('#app')
