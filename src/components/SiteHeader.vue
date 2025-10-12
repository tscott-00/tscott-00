<template>
  <!-- <header class="app-header"> -->
    <!-- <!-- <h1 class="header-title">Thomas Scott</h1> --> -->
  <!-- </header> -->
  <div class="app-header navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">Thomas A. Scott</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#/">Home</a></li>
        <li><a href="#/research">Research</a></li>
        <li><a href="#/projects">Projects</a></li>
        <li><a href="#/honors_and_awards">Honors and Awards</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>

<style scoped>
.app-header {
  /* Positioning */
  position: fixed; /* Fixes the header to the viewport */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensures it stays on top of other content */

  /* Sizing */
  width: 100%; /* Span the full screen width */
  
}
</style>

<!-- box-sizing: border-box; /* Includes padding in the element's total width */ -->

  <!-- /* Styling */ -->
  <!-- background-color: #2c3e50; /* A dark background color */ -->
  <!-- color: white; /* White text */ -->
  <!-- padding: 15px 30px; /* Adds some space inside the header (top/bottom, left/right) */ -->
  <!-- box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */ -->

<!-- <template> -->
  <!-- <header class="bg-slate-800 text-white shadow-md"> -->
    <!-- <div class="mx-auto flex max-w-6xl items-center justify-between px-8 py-4"> -->
      
      <!-- <a href="/" class="text-2xl font-bold no-underline">My Website</a> -->

      <!-- <nav class="relative"> -->
        <!-- <button  -->
          <!-- @click="toggleDropdown"  -->
          <!-- class="rounded-md bg-blue-500 px-4 py-2 text-base transition-colors duration-300 hover:bg-blue-600" -->
        <!-- > -->
          <!-- Menu ☰ -->
        <!-- </button> -->
        
        <!-- <Transition -->
          <!-- enter-active-class="transition ease-out duration-100" -->
          <!-- enter-from-class="transform opacity-0 scale-95" -->
          <!-- enter-to-class="transform opacity-100 scale-100" -->
          <!-- leave-active-class="transition ease-in duration-75" -->
          <!-- leave-from-class="transform opacity-100 scale-100" -->
          <!-- leave-to-class="transform opacity-0 scale-95" -->
        <!-- > -->
          <!-- <ul v-if="isDropdownOpen" class="absolute right-0 z-50 mt-2 min-w-[160px] list-none rounded-md bg-white py-2 text-gray-800 shadow-lg"> -->
            <!-- <li v-for="link in navLinks" :key="link.name"> -->
              <!-- <a  -->
                <!-- :href="link.path"  -->
                <!-- class="block px-6 py-3 text-slate-800 no-underline transition-colors duration-200 hover:bg-gray-100" -->
              <!-- > -->
                <!-- {{ link.name }} -->
              <!-- </a> -->
            <!-- </li> -->
          <!-- </ul> -->
        <!-- </Transition> -->

      <!-- </nav> -->
    <!-- </div> -->
  <!-- </header> -->
<!-- </template> -->

<!-- <script setup> -->
<!-- import { ref } from 'vue'; -->

<!-- // A reactive variable to control the dropdown's visibility. -->
<!-- const isDropdownOpen = ref(false); -->

<!-- // Function to toggle the dropdown state. -->
<!-- const toggleDropdown = () => { -->
  <!-- isDropdownOpen.value = !isDropdownOpen.value; -->
<!-- }; -->

<!-- // An array of objects for the navigation links. -->
<!-- const navLinks = [ -->
  <!-- { name: 'Home', path: '/' }, -->
  <!-- { name: 'Products', path: '/products' }, -->
  <!-- { name: 'About Us', path: '/about' }, -->
  <!-- { name: 'Contact', path: '/contact' } -->
<!-- ]; -->
<!-- </script> -->