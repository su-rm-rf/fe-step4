import { createApp } from 'vue'

import store from '@/store'
import router from '@/router'

import '@/styles'
import App from '@/App.vue'

console.log(process.env.NODE_ENV)
console.log(process.env.BASE_ENV)

createApp(App)
.use(store)
.use(router)
.mount('#root')