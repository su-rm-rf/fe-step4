import constants from '@/constants'
import axios from '@/utils/axios'

export default {
  todo_set: ({ commit }, text) => {
    commit(constants.TODO_ADD, text)
  },

  todo_get: ({ state, commit }, filter) => {
    filter = filter || state.filter
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.get(`/todo/list?completed=${filter}`).then(res => {
      commit(constants.TODO_GET, res.data.data)
      commit(constants.SHOW_LOADING, false, { root: true })
    })
  },

  todo_detail: ({ commit }, id) => {
    commit(constants.TODO_DETAIL_START)
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.get(`/todo/${id}`).then(res => {
      commit(constants.TODO_DETAIL, res.data.data)
      commit(constants.SHOW_LOADING, false, { root: true })
    })
  },

  todo_add: ({ commit, dispatch }, text) => {
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.post('/todo/add', {
      text,
      completed: 0
    }).then(res => {
      commit(constants.SHOW_LOADING, false, { root: true })
      dispatch('todo_get')
    })
  },

  todo_save: ({ commit }, todo) => {
    commit(constants.SHOW_LOADING, true, { root: true })
    return new Promise<void>((resolve, reject) => {
      axios.post('/todo/update', todo).then(res => {
        commit(constants.SHOW_LOADING, false, { root: true })
        resolve()
      })
    })
  },

  todo_filter: ({ commit }, filter) => {
    // filter = filter === constants.SHOW_ALL ? '' : filter
    commit(constants.TODO_FILTER, filter)
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.get(`/todo/list?completed=${filter}`).then(res => {
      commit(constants.TODO_GET, res.data.data)
      commit(constants.SHOW_LOADING, false, { root: true })
    })
  },
  
  todo_toggle: ({ state, commit, dispatch }, todo) => {
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.post('/todo/update', {
      id: todo.id,
      completed: todo.completed === 0 ? 1 : 0
    }).then(res => {
      commit(constants.SHOW_LOADING, false, { root: true })
      dispatch('todo_filter', state.filter)
    })
  },

  todo_delete: ({ commit, dispatch }, id) => {
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.post('/todo/delete', {
      id
    }).then(res => {
      commit(constants.SHOW_LOADING, false, { root: true })
      dispatch('todo_get')
    })
  },

  todo_clear: ({ commit, dispatch }) => {
    commit(constants.SHOW_LOADING, true, { root: true })
    axios.post('/todo/clear').then(res => {
      commit(constants.SHOW_LOADING, false, { root: true })
      dispatch('todo_get')
    })
  }
}