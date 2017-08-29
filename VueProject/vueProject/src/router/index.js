import Home from '../components/Home.vue'
import Email from '../components/Email.vue'
import Conect from '../components/Conect.vue'
import Set from '../components/Set.vue'
import Newslist from '../components/news/newslist.vue'
import Newsshow from '../components/news/newsshow.vue'
import Testvuex from '../components/sets/testvuex.vue'

let routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path:'/news/newslist',
    name:'newslist',
    component:Newslist
  },
  {
    path:'/news/newsshow/:newsid',
    name:'newsshow',
    component:Newsshow
  },
  {
    path:'/sets/testvuex',
    name:'testvuex',
    component:Testvuex
  },
  {
    path:'/Email',
    name:'Email',
    component:Email
  },
  {
    path:'/Conect',
    name:'Conect',
    component:Conect
  },
  {
    path:'/Set',
    name:'Set',
    component:Set
  }
];

export default routes;
