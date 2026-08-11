import { createRouter, createWebHistory } from 'vue-router'
import PCOSInfo from '../views/PCOSInfo.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Prediction from '../views/Prediction.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home,
    },

    {
      path: '/pcos',
      name: 'PCOSInfo',
      component: PCOSInfo,
    },

    {
      path: '/dashboard',
      component: Dashboard,
    },

    {
      path: '/prediction',
      component: Prediction,
    },

    {
      path: '/about',
      component: About,
    },
  ],
})

export default router
