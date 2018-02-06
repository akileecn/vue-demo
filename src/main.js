// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/components/axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUi from 'element-ui'
import custom from '@/components/custom'

Vue.config.productionTip = false

Vue.use(axios)
Vue.use(ElementUi, { size: 'medium' })
Vue.use(custom)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
