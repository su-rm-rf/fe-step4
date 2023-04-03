<script setup lang="ts">
  import { defineComponent } from 'vue'
  import constants from '@/constants'
  import { useState, useActions } from '@/hooks'

  const { todo_filter }: any = useActions('todo', ['todo_filter'])
  const { filter }: any = useState('todo', ['filter'])

  // defineComponent('FilterItem', {
  //   template: '<div></div>',
  // })
  defineComponent({
    name: 'FilterItem',
    setup() {
      return '<div>123</div>'
    }
  })
</script>

<template>
  <ul class="todo-filter">
    <li :class="{ active: filter === constants.SHOW_ALL }"
      @click="() => todo_filter(constants.SHOW_ALL)"
    >All</li>
    <li :class="{ active: filter === constants.SHOW_COMPLETED }"
      @click="() => todo_filter(constants.SHOW_COMPLETED)"
    >Completed</li>
    <li :class="{ active: filter === constants.SHOW_INCOMPLETE }"
      @click="() => todo_filter(constants.SHOW_INCOMPLETE)"
    >InComplete</li>
  </ul>
</template>

<style>
</style>