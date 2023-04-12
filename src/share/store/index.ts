import { createStore } from "vuex"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

import todo from './todo'

export const getStore = (preloadedState) => {
  return createStore({
    strict: process.env.NODE_ENV !== 'production',
    state() {
      return {
        ...preloadedState,
        loading: false,
      }
    },
    mutations,
    getters,
    actions,

    modules: {
      todo,
    }
  })
}