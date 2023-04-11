import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import constants from '@/constants'

const Todo = {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  state() {
    return {
      _todo: {
        text: '',
        completed: 0
      },
      filter: constants.SHOW_ALL,
      todo: {},
      todoList: [],
    }
  },

  getters: {
    ...getters
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }, 
}

export default Todo