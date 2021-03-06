// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { MockContainer } from "./mock/MockContainer";

Vue.config.productionTip = false
Vue.prototype.$http = axios

const isDev = true

if (isDev) {
  new MockContainer(axios);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
