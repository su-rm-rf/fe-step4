<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { useState, useGetters, useActions } from '@/hooks'

  const { todoList }: any = useGetters('todo', ['todoList'])
  const { todo_get, todo_toggle, todo_clear, todo_delete }: any = 
    useActions('todo', ['todo_get', 'todo_toggle', 'todo_clear', 'todo_delete'])

  todo_get()

  const del = ({ id }) => {
    todo_delete(id)
  }
  
  const clear = () => {
    if (window.confirm('sure ?')) {
      todo_clear()
    }
  }
</script>

<template>
  <div class="todo_list">
    <ul>
      <li v-for="todo in todoList" 
        :class="todo.completed === 1 ? 'completed' : ''"
      >
        <div class="text" @click="() => todo_toggle(todo)">{{ todo.text }}</div>
        <div class="handler">
          <RouterLink :to="`/todo/edit/${todo.id}`" v-if="todo.completed === 0">编辑</RouterLink>
          <RouterLink :to="`/todo/${todo.id}`">详情</RouterLink>
          <button @click="() => del(todo)">删除</button>
          <!-- <RouterLink :to="`/todo/delete/${todo.id}`">删除</RouterLink> -->
        </div>
      </li>
    </ul>
    <button @click="clear">One Key Clear</button>
  </div>
</template>

<style>
</style>