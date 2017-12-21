import Vue from 'vue'
import VueRouter from 'vue-router'

import Join from '../components/join/join.vue';
import Rater from '../components/rater/rater.vue';

let routes = [
  {
    path:'/',
    redirect:{name:'join'}
  },
  {
    path: '/join',
    name: 'join',
    component: Join,
    meta: {
      title: '乐享健康服务调研'
    }
  }, {
    path: '/rater', 
    name: 'rater',
    component: Rater,
    meta: {
      title: '乐享健康服务调研'
    }
  }
];

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  next();
  document.title = to.meta.title;
  window.scrollTo(0,0);
})

export default router;
