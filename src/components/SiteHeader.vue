<template>
  <div class="app-header navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl">Thomas A. Scott</RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/research">Research</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/honors-and-awards">Honors and Awards</RouterLink></li>
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
