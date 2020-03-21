import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import BasicInputParent from "./parent/BasicInputParent";
import BasicParent from "./parent/BasicParent";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    {path: '/', component: BasicParent},
    {path: '/msg', component: BasicInputParent}
];

const router = new VueRouter({routes});


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
