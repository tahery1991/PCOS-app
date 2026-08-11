import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PCOSInfo from '../views/PCOSInfo.vue'
import Dashboard from '../views/Dashboard.vue'
import Prediction from '../views/Prediction.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/pcos',
      name: 'PCOSInfo',
      component: PCOSInfo,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },

    {
      path: '/prediction',
      name: 'Prediction',
      component: Prediction,
    },

    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
