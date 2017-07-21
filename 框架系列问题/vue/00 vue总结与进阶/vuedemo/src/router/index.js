import Hello from '../components/Hello.vue'
import Condition from '../components/condition.vue'
import Cchild from '../components/cchild.vue'
import Event from '../components/event.vue'
import Form from '../components/form.vue'
import Com from '../components/compt.vue'


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
      {
      path:'/e',
      name:'event',
      component:Event
      },
      {
        path:'/f',
        name:'form',
        component:Form
      },
      {
        path:'/g',
        name:'com',
        component:Com
      }
]

export default routes;
