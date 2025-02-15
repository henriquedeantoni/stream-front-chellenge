// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './routerVue/routes';
import  './GlobalStyle.css';

const app = createApp(App);
app.use(router);
app.mount('#app');