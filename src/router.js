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

import Vue from 'vue';
import Router from 'vue-router';
import CategoryList from './components/album/CategoryList';
import PostList from './components/album/PostList';
import PostDetail from './components/album/PostDetail';
import CategoryMngt from './components/album/CategoryMngt';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'category',
      component: CategoryList,
    },
    {
      path: '/category',
      name: 'categoryMngt',
      component: CategoryMngt
    },
    {
      path: '/:categoryId',
      name: 'list',
      component: PostList
    },
    {
      path: '/:categoryId/:postId',
      name: 'detail',
      component: PostDetail
    }
  ]
});
