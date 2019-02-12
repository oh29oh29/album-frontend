// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

Vue.config.productionTip = false
Vue.prototype.$http = axios

const isDev = true

if (isDev) {
  let mock = new MockAdapter(axios)
  const responseData = [
    {
      id: 1,
      title: 'mock Test',
      description: 'desc'
    },
    {
      id: 2,
      title: 'mock Test2',
      description: 'desc'
    },
    {
      id: 3,
      title: 'mock Test3',
      description: 'desc'
    },
    {
      id: 4,
      title: 'mock Test4',
      description: 'desc'
    }
  ]
  mock.onGet('/categories').reply(200, responseData);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
