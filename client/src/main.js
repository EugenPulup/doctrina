import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import createApi from './adapters/api';
import './assets/styles/main.css';

import router from './routes';

const pinia = createPinia();
const app = createApp(App);
const api = new createApi();

app.provide('api', api);

app.use(pinia);
app.use(router);
app.use(api);

app.mount('#app');
