import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue'

import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NOT from '@/views/NOT.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/money'  //根路径直接访问money
  },
  {
    path: '/money',  //路径
    component: Money  //引入的组件
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',//这是代表了除了上面路径之外的所有的路径
    component: NOT
  },
]

const router = new VueRouter({
  routes
})

export default router
