import Home from '../components/Home.vue'
import Email from '../components/Email.vue'
import Shopcar from '../components/Shopcar.vue'
import Set from '../components/Set.vue'
import Newslist from '../components/news/newslist.vue'
import Newsshow from '../components/news/newsshow.vue'
import Testvuex from '../components/sets/testvuex.vue'
import Good from '../components/good/good.vue'
import Word from '../components/words/words.vue'

let routes = [
  {
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    name: 'Home',
    component: Home
  }, {
    path: '/news/newslist',
    name: 'newslist',
    component: Newslist
  }, {
    path: '/news/newsshow/:newsid',
    name: 'newsshow',
    component: Newsshow
  }, {
    path: '/sets/testvuex',
    name: 'testvuex',
    component: Testvuex
  }, {
    path: '/good/good',
    name: 'good',
    component: Good
  }, {
    path: '/Email',
    name: 'Email',
    component: Email
  }, {
    path: '/Shopcar',
    name: 'Shopcar',
    component: Shopcar
  }, {
    path: '/Set',
    name: 'Set',
    component: Set
  },{
    path: '/word',
    name: 'word',
    component: Word
  }
];

export default routes;
