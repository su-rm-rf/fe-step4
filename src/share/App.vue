<script setup lang="ts">
  import { useState } from '@/hooks';
import { RouterLink, RouterView } from 'vue-router'

  const { loading }: any = useState(['loading'])
</script>

<template>
  <div class="layout">
    <div class="content_body">
      <RouterView />
    </div>
    <nav class="nav_header">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div class="loading" v-if="loading">处理中</div>
  </div>
</template>

<style>
</style>