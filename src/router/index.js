import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Application from '@/components/Application'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    }
  ]
})
