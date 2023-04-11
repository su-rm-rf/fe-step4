// import store from '../store'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Dashboard.vue'),
  },
  {
    path: '/todo',
    component: () => import('@/components/todo/index.vue'),
  },
  {
    path: '/todo/:id',
    component: () => import('@/components/todo/Detail.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/todo/edit/:id',
    component: () => import('@/components/todo/Edit.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    component: () => import('@/components/About.vue')
  },
]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// router.beforeEach((to, from, next) => {
//   // console.log(store.state)
//   next()
// })

export default (history) => createRouter({
  history,
  routes
})