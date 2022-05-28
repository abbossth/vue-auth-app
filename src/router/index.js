import VueRouter from 'vue-router'

import Home from '../views/Home'
import Registration from '../views/Register'

const Routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/register',
    name: 'RegistrationForm',
    component: Registration
  }
]

const router = new VueRouter({
  routes: Routes,
})

export default router
