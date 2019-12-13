import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// views
import Index from './components/Index.vue'
import Home from './components/Home.vue'
import Load from './components/Load.vue'
import Salvo from './components/Salvo.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/load',
    component: Load
  },
  {
    path: '/salvo',
    component: Salvo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

