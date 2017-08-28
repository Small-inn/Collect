// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import moment from 'moment'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'

import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(moment)

// 注册全局过滤器
Vue.filter('datafmt',function(input,fmtstr){
  fmtstr = fmtstr?fmtstr:'YYYY:MM:DD'
  return moment(input).format(fmtstr)
})

const router = new VueRouter({
  mode:'history',
  routes,
  linkActiveClass :'mui-active',
})


new Vue({
  router,
  render:h=>h(App),
  mounted() {
    console.log(this);
  }
}).$mount('#app')