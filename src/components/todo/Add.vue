<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useMutations, useActions } from '@/hooks'

  const store = useStore()

  const { set_todo, todo_add }:any = useActions('todo', ['set_todo', 'todo_add'])

  let text = computed({
    get() {
      return store.state.todo.todo.text
    },
    set(value) {
      set_todo(value)
    }
  })

  const add = () => {
    const value = text.value
    if (value) {
      todo_add(value)
      text.value = ''
    }
  }
</script>

<template>
  <div class="todo-add">
    <textarea v-model="text"></textarea>
    <button @click="add">Add</button>
  </div>
</template>

<style>
</style>