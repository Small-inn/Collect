// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
//上面的代码和下面的等价的
new Vue({
  el:'#app',
  router,
  render:h=>h(App)
})
