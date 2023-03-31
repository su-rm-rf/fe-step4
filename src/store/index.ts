import { createStore } from "vuex"

import todo from './todo'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {
      
    }
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  },

  modules: {
    todo,
  }
})

export default store