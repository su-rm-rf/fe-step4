import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/components/Dashboard.vue'
import Todo from '@/components/todo/index.vue'
import About from '@/components/About.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/todo',
    component: Todo
  },
  {
    path: '/about',
    component: About
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router