import Vue from 'vue'
import VueRouter from 'vue-router';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver} from 'vee-validate'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import Router from './router'

Vue.use(VueRouter)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})

import 'bootstrap/dist/js/bootstrap.js'

