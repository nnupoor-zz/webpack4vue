// console.log(`I'm a silly entry point`);
// alert('test');

// alert('doodoodoo-');

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './utils/routes'
import HelloWebpack from './pages/HelloWebpack.vue'
import styles from './css/styles.scss';

// Yay! Routes FTW.
Vue.use(VueRouter)
// I've used Vue resource because it was handy, you can use Axios, fetch APIs or any magic wand you want.
Vue.use(VueResource)
// Vue.use(Store) //Get your own vuex store from https://vuex.vuejs.org/en/
Vue.http.interceptors.push((request, next)=> {
  if(request.params === undefined) {
    request.params = {}
  }
  request.params.someToken = 'some-token-you-might-want';
  next();
})

const router = new VueRouter({
  routes: routes.routes
})

Vue.mixin({
  methods:  {
    _veryUsefulMethod() {
      console.log('I am a global mixin. I should be used across the app.')
    }
  }
})

const App = new Vue({
  el:'#app',
  router,
  name: 'App',
  render: h => h(HelloWebpack),
  methods: {
    _someMethodYouWant() {
      console.log('Any method that you want to have!')
    }
  },
  created(){
    console.log('App created....');
  }
})





