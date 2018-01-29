import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/Main'
import jobList from '@/pages/job/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/job/list/:recruitType',
      name: 'jobList',
      component: jobList,
      props: true
    }
  ]
})
