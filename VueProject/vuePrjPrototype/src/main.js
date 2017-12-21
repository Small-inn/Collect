import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import flexible from 'flexible.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
flexible(750,640); 


Vue.config.productionTip = false
Vue.use(iView)


axios.defaults.timeout = 15000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
