<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
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
  </div>
</template>

<style>
</style>