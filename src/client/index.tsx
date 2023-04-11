import { createSSRApp } from 'vue'

import { getStore} from '../share/store'

import createRouter from '../share/router'
import { createWebHistory } from 'vue-router'

import '@/styles'
import App from '../share/App.vue'

const store = getStore((window as any).__PRELOADED_STATE__)
delete (window as any).__PRELOADED_STATE__

const router = createRouter(createWebHistory())

// console.log(process.env.NODE_ENV)
// console.log(process.env.BASE_ENV)

createSSRApp(App)
.use(store)
.use(router)
.mount('#root')