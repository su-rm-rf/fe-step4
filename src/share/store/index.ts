import { createStore } from "vuex"

import todo from './todo'

export const getStore = (preloadedState) => {
  return createStore({
    strict: process.env.NODE_ENV !== 'production',
    state() {
      return {
        ...preloadedState,
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
}