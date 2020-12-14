import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
// 挂载
Vue.prototype.$http = axios
// 每一个Vue组件可以通过this直接访问http 去发起ajax请求

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
