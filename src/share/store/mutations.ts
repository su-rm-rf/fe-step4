import constants from "@/constants";

export default {
  [constants.TODO_GET_START](state) {
    state.loading = true
  },
  [constants.TODO_GET_SUCCESS](state) {
    state.loading = false
  },
  [constants.SHOW_LOADING](state, show) {
    state.loading = show
  },
}