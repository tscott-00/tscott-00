<script setup>
import SiteHeader from './components/SiteHeader.vue';
</script>

<template>
  <!-- <div id="app" class="flex min-h-screen flex-col"> -->
  <div class="flex-none">
    <SiteHeader />
    <!-- TODO: use <main>? -->
    <RouterView class="main-content" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap');

body {
  margin: 0; /* Reset default body margin */
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Figtree', sans-serif;
}

.main-content {
  padding-top: 70px; /* Render below header, TODO: automatic? */
}
</style>
