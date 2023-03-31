import constants from "@/constants"

export default {
  [constants.TODO_ADD](state, text) {
    state.todo = {
      text,
      completed: false
    }
  },
  [constants.TODO_GET](state, list) {
    state.todoList = list
  },
  [constants.TODO_FILTER](state, filter) {
    state.filter = filter
  },
}