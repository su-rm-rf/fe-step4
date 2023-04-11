<script setup lang="ts">
  import { ref, TextareaHTMLAttributes } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useActions, useGetters } from '@/hooks'

  const { params }:any = useRoute()
  const { todo_detail, todo_save }: any = useActions('todo', ['todo_detail', 'todo_save'])

  todo_detail(params.id)

  const router = useRouter()

  const { todo }: any = useGetters('todo', ['todo'])

  const text = ref('')

  const save = () => {
    todo_save({
      ...todo.value,
      text: (text.value as TextareaHTMLAttributes).value,
    }).then(() => {
      router.back()
    })
  }
</script>

<template>
  <div class="todo_detail">
    <ul>
      <li>
        <label>ID: </label>
        <span>{{ todo.id }}</span>
      </li>
      <li>
        <label>Text: </label>
        <textarea ref="text">{{ todo.text }}</textarea>
      </li>
      <li>
        <label>Completed: </label>
        <span>{{ todo.completed === 1 ? 'Y' : todo.completed === 0 ? 'N' : '' }}</span>
      </li>
      <li>
        <button @click="save">保存</button>
      </li>
    </ul>
  </div>
</template>

<style>
</style>