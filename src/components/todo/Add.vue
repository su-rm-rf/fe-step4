<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useActions } from '@/hooks'

  const store = useStore()

  const { todo_set, todo_add }: any = useActions('todo', ['todo_set', 'todo_add'])

  let text = computed({
    get() {
      return store.state.todo._todo.text
    },
    set(value) {
      todo_set(value)
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