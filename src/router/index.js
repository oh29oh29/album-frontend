import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/album/Category'
import List from '@/components/album/List'
import Detail from '@/components/album/Detail'

Vue.use(Router)

export default new Router({
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
