import axios from 'axios'
import api from '@/components/api'

function install (Vue) {
  axios.defaults.baseURL = api.host
  axios.defaults.withCredentials = true
  // 兼容后台ajax判断
  axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
  Vue.prototype.$http = axios
}

export default install
