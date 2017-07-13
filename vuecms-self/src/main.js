
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import Element from 'element-ui'

import 'element-ui/lib/theme-default/index.css'


// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueRouter)


const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next => {

// }))
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
//上面的代码和下面的等价的
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
