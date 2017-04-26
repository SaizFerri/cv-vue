import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/Home'
import AppProjects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome
    },
    {
      path: '/Projects/',
      name: 'Projects',
      component: AppProjects
    }
  ]
})
