import constants from '@/constants'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8602'

export default {
  todo_set: ({ commit }, text) => {
    commit(constants.TODO_ADD, text)
  },

  todo_get: ({ commit }) => {
    axios.get('/todo/list').then(res => {
      commit(constants.TODO_GET, res.data.data)
    })
  },

  todo_detail: ({ commit }, id) => {
    commit(constants.TODO_DETAIL_START)
    axios.get(`/todo/${id}`).then(res => {
      commit(constants.TODO_DETAIL, res.data.data)
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

  todo_save: (context, todo) => {
    return new Promise<void>((resolve, reject) => {
      axios.post('/todo/update', todo).then(res => {
        resolve()
      })
    })
  },

  todo_filter: ({ commit }, filter) => {
    commit(constants.TODO_FILTER, filter)
    filter = filter === constants.SHOW_ALL ? '' : filter
    axios.get(`/todo/list?completed=${filter}`).then(res => {
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

  todo_delete: ({ dispatch }, id) => {
    axios.post('/todo/delete', {
      id
    }).then(res => {
      dispatch('todo_get')
    })
  },

  todo_clear: ({ dispatch }) => {
    axios.post('/todo/clear').then(res => {
      // commit(constants.TODO_CLEAR)
      dispatch('todo_get')
    })
  }
}