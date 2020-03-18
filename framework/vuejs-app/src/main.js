import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import HelloWorldParent from "./parent/HelloWorldParent";
import BasicInputParent from "./parent/BasicInputParent";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HelloWorldParent },
  { path: '/msg', component: BasicInputParent }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App),
  data: {
    msg: 'Hello Vue!'
  }
}).$mount('#app');
