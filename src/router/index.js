import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Index from '@/pages/Index'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
