import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})

import 'bootstrap/dist/js/bootstrap.js'

