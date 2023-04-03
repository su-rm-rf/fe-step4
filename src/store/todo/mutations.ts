import constants from "@/constants"

export default {
  [constants.TODO_ADD](state, text) {
    state._todo = {
      text,
      completed: false
    }
  },
  [constants.TODO_GET](state, list) {
    state.todoList = list
  },
  [constants.TODO_DETAIL_START](state) {
    state.todo = {}
  },
  [constants.TODO_DETAIL](state, todo) {
    state.todo = todo
  },
  [constants.TODO_FILTER](state, filter) {
    state.filter = filter
  },
}