import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Home
        },
        {
          path: '/student',
          name: 'student',
          component: () => import('../views/Student/Student.vue'),
        },
        {
          path: '/teacher',
          name: 'teacher',
          component: () => import('../views/Teacher/Teacher.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }

  ]
})

export default router
