import Login from '../common/login.vue'
import Home from '../components/Home'

let routes = [
  {
    path:'/login',
    component:Login
  },{
    path:'/',
    component:Home
  }
]


export default routes;