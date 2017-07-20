import Hello from '../components/Hello.vue'
import Condition from '../components/condition.vue'
import Cchild from '../components/cchild.vue'


let routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path:'/c',
    name:'condition',
    component:Condition,
    children:[
      {
        path:'/c/cc',
        name:'cchild',
        component:Cchild
      }
    ]
  },
  // {
  //   path:'/cc',
  //   name:'cchild',
  //   component:Cchild
  //     }
]

export default routes;
