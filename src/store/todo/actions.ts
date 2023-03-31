import constants from '@/constants'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8602'

export default {
  set_todo: ({ commit }, text) => {
    commit(constants.TODO_ADD, text)
  },

  todo_get: ({ commit }) => {
    axios.get('/todo/list').then(res => {
      commit(constants.TODO_GET, res.data.data)
    })
  },

  todo_add: ({ commit, dispatch }, text) => {
    axios.post('/todo/add', {
      text,
      completed: 0
    }).then(res => {
      dispatch('todo_get')
    })
  },

  todo_filter: ({ commit }, filter) => {
    commit(constants.TODO_FILTER, filter)
    axios.get('/todo/list', {
      params: {
        completed: filter
      }
    }).then(res => {
      commit(constants.TODO_GET, res.data.data)
    })
  },
  
  todo_toggle: ({ state, dispatch }, todo) => {
    axios.post('/todo/update', {
      id: todo.id,
      completed: todo.completed === 0 ? 1 : 0
    }).then(res => {
      dispatch('todo_filter', state.filter)
    })
  },

  todo_clear: ({ dispatch }) => {
    axios.post('/todo/clear').then(res => {
      // commit(constants.TODO_CLEAR)
      dispatch('todo_get')
    })
  }
}