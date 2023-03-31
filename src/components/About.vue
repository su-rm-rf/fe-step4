<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore, mapState, mapActions } from 'vuex'
  import { useActions, useGetters, useMutations, useState } from '@/hooks'
  import constants from '@/constants'

  const store = useStore()

  const ss:any = mapState('todo', ['todoList'])
  const ss1:any = computed(ss.todoList.bind({ $store: store })).value

  const ac = mapActions('todo', ['todo_toggle'])
  const ac1 = computed(() => ac.todo_toggle.bind({ $store: store })).value

  const { todo }:any = useState('todo', ['todo'])

  const state:any = useState('todo', ['todoList'])
  // console.log(state.todoList.value)
  const { todoList }:any = useGetters('todo', ['todoList'])
  // console.log(todoList.value)

  const { todo_toggle }: any = useActions('todo', ['todo_toggle'])
  const mutations = useMutations('todo', [constants.TODO_GET])

  // console.log(mutations)
  // console.log(mutations[constants.TODO_GET])

  const toggle = () => {
    ac1(ss1[0])
    todo_toggle(todoList.value[1])
    todo_toggle(state.todoList.value[2])

    setTimeout(() => {
      mutations[constants.TODO_GET]([])
    }, 2000)
  }
</script>

<template>
  <div class="todo-about">
    {{ ss1.length }}
    <button @click="toggle">toggle</button>
    {{ todo }}
    {{ state.todoList.value.length }} -
    {{ todoList.length }}
  </div>
</template>

<style>
</style>