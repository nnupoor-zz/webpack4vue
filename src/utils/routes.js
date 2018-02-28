import Hello from '../pages/Hi.vue'
import Bye from '../pages/Bi.vue'

const routes = [
  {path: '/hello', name: 'hello', component: Hello},
  {path: '/bye', name: 'bye', component: Bye},
  {path: '', name:'default'}
]

export default  {
  routes
}