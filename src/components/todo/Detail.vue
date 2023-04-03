<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useActions, useGetters, useState } from '@/hooks'

  const { params }:any = useRoute()
  const { todo_detail }: any = useActions('todo', ['todo_detail'])

  todo_detail(params.id)

  const { todo }: any = useGetters('todo', ['todo'])
</script>

<template>
  <div class="todo-detail">
    <ul>
      <li>
        <label>ID: </label>
        <span>{{ todo.id }}</span>
      </li>
      <li>
        <label>Text: </label>
        <span>{{ todo.text }}</span>
      </li>
      <li>
        <label>Completed: </label>
        <span>{{ todo.completed === 1 ? 'Y' : todo.completed === 0 ? 'N' : '' }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
</style>