<script setup lang="ts">

</script>

<template>
  <div class="app">
    <nav class="nav-header">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <div class="content-body">
      <RouterView />
    </div>
  </div>
</template>

<style>
</style>