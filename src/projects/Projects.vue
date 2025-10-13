<template>
  <main>
    <h1>Projects</h1>
    
    <div class="flex flex-wrap">
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <RouterLink to="/projects/resoft">
            <img src="./resoft/thumb.jpg"/>
          </RouterLink>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <RouterLink to="/projects/resoft">Rocket Engine Simulations</RouterLink>
            <div class="badge badge-secondary">2022-2024</div>
          </h2>
          <p>Rocket engine simulation software I developed for hybrid and liquid engines with emphasis on atypical oxidizer combinations that present additional modeling challenges compared to prexisting software. Used by University of Tennesse, Knoxville to design multiple flight-competition-winning sounding rockets featuring experimental engines.</p>
          <!-- <div class="card-actions justify-end"> -->
            <!-- <div class="badge badge-outline">Fashion</div> -->
            <!-- <div class="badge badge-outline">Products</div> -->
          <!-- </div> -->
        </div>
      </div>
      
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <RouterLink to="/projects/big-hybrid">
            <img src="./big_hybrid/thumb.jpg"/>
          </RouterLink>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <RouterLink to="/projects/big-hybrid">Big Hybrid</RouterLink>
            <div class="badge badge-secondary">2023</div>
          </h2>
          <p>A hybrid rocket engine I lead the design, devlopment, and testing of. Facilitated by my propulsion simulation software. Won first place in the highest altitude bracket at the 2024 Oxidizers Uninhibited Tournament in Mojave, CA!</p>
          <!-- <div class="card-actions justify-end"> -->
            <!-- <div class="badge badge-outline">Fashion</div> -->
            <!-- <div class="badge badge-outline">Products</div> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style scoped>
</style>
