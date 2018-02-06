import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/Main'
import jobMain from '@/pages/job/Main'
import jobList from '@/pages/job/List'
import jobNotice from '@/pages/job/Notice'

import userCenter from '@/pages/user/Center'
import resumeList from '@/pages/resume/List'
import resumeDetail from '@/pages/resume/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/job/:recruitType',
      name: 'jobMain',
      component: jobMain,
      props: true,
      children: [
        {
          path: 'list',
          name: 'jobList',
          component: jobList,
          props: true
        },
        {
          path: 'notice',
          name: 'jobNotice',
          component: jobNotice,
          props: true
        }
      ]
    },
    {
      path: '/user',
      name: 'userCenter',
      component: userCenter,
      props: true,
      children: [
        {
          path: 'resume/list',
          name: 'resumeList',
          component: resumeList,
          props: true
        },
        {
          path: 'resume/list/:recruitType',
          name: 'resumeList',
          component: resumeList,
          props: true
        },
        {
          path: 'resume/detail/:recruitType/:resumeId',
          name: 'resumeDetail',
          component: resumeDetail,
          props: true
        }
      ]
    }
  ]
})
