// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'
//
// Vue.use(Router)
//
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import Category from './components/album/Category'
import List from './components/album/List'
import Detail from './components/album/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'category',
      component: Category
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
