import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/album/Category'
import List from '@/components/album/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Category',
      component: Category
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
