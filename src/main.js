import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router' 
import store from './store'
import './style/common' //加载公共less
import './config/rem' // 字体自适应

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history' //默认hash模式， history 去掉url的 /#/ 为了更美观 
})

new Vue({
  router,
  store
  //render: h => h(App)
}).$mount('#app')
