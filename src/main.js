import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory} from 'vue-router';
import homePage from './page/homePage.vue'
import RestaurantPage from './page/Restaurant.vue'

const routes = [
    { path: '/', component: homePage},
    { name: 'restaurant', path: '/restaurant/:name',component: RestaurantPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)

VueApp.use(router)
VueApp.mount('#app');


 