<script setup lang="ts">
  import { useState, useGetters, useActions } from '@/hooks'

  const { todoList }:any = useGetters('todo', ['todoList'])
  const { todo_get, todo_toggle, todo_clear }:any = 
    useActions('todo', ['todo_get', 'todo_toggle', 'todo_clear'])

  todo_get()
</script>

<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todoList" 
        :class="todo.completed === 1 ? 'completed' : ''"
        @click="() => todo_toggle(todo)"
      >{{ todo.text }}</li>
    </ul>
    <button @click="todo_clear">One Key Clear</button>
  </div>
</template>

<style>
</style>