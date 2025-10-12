<script setup lang="ts">
import { ref, computed } from 'vue'
import SiteHeader from './components/SiteHeader.vue';
import Home from './Home.vue'

import Research from './research/Research.vue';

import Projects from './projects/Projects.vue';
import BigHybrid from './projects/big_hybrid/BigHybrid.vue';
import RESoft from './projects/resoft/RESoft.vue';

import HonorsAndAwards from './HonorsAndAwards.vue';

const routes = {
  '/': Home,
  
  '/research': Research,
  
  '/projects': Projects,
  '/projects/big_hybrid': BigHybrid,
  '/projects/resoft': RESoft,
  
  '/honors_and_awards': HonorsAndAwards,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <!-- <div id="app" class="flex min-h-screen flex-col"> -->
  <div class="flex-none">
    <SiteHeader />
    <component :is="currentView" class="main-content" />
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
  padding-top: 70px; /* Render below header */
}
</style>


<!-- <button class="btn btn-primary">Button</button> -->
<!-- <input type="text" placeholder="Type here" class="input" /> -->

<!-- <input type="range" min="0" max="100" value="40" class="range" /> -->

<!-- <label class="input"> -->
  <!-- <span class="label">Fill level</span> -->
  <!-- <input type="range" min="0" max="100" value="70" class="range" /> -->
  <!-- <input type="text" placeholder="70%" /> -->
<!-- </label> -->

<!-- <label class="select"> -->
  <!-- <span class="label">Oxidizer</span> -->
  <!-- <select> -->
    <!-- <option>Nitrous Oxide</option> -->
    <!-- <option>Oxygen</option> -->
  <!-- </select> -->
<!-- </label> -->

<!-- <label class="input"> -->
  <!-- <input type="text" placeholder="domain name" /> -->
  <!-- <span class="label">.com</span> -->
<!-- </label> -->

<!-- <div class="skeleton h-32 w-32"></div> -->

<!-- <style scoped> -->
<!-- header { -->
  <!-- line-height: 1.5; -->
<!-- } -->

<!-- @media (min-width: 1024px) { -->
  <!-- header { -->
    <!-- display: flex; -->
    <!-- place-items: center; -->
    <!-- padding-right: calc(var(--section-gap) / 2); -->
  <!-- } -->

  <!-- header .wrapper { -->
    <!-- display: flex; -->
    <!-- place-items: flex-start; -->
    <!-- flex-wrap: wrap; -->
  <!-- } -->
<!-- } -->
<!-- </style> -->
