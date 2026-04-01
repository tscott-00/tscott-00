<template>
  <main>
    <ul class="list bg-base-100 rounded-box shadow-md">
      <li class="list-row">Sole Developer</li>
      <li class="list-row">Used from 2022-present at the Student Space Technology Association, University of Tennessee Knoxville</li>
      <li class="list-row">Peng-Robinson real-gas law</li>
      <li class="list-row">Custom constant pressure, enthalpy Gibb's free energy minimization solver based on NASA's CEA algorithm</li>
    </ul>
    
    <p> My software, distributed under the name Student Space Technology Simulator, has been validated against several hybrid and liquid rocket engines. The primary motivation for development was supporting simulation of liquid-vapor equilibrium of real-gas mixtures, particularly Nitrous-Oxide+Oxygen aka Nytrox. While lacking perfect time-series agreement due to lack of a two-phase injector and transient boiling models, my software predicts overall performance and design-relevant operation conditions (mean thrust, maximum operating pressure, etc.) accurately. </p>
    
    <h1 class="text-4xl">Gallery of Engines using My Software</h1>
    
    <div class="flex flex-wrap">
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src="./thumb.jpg" alt="test" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Big Liquid
            <div class="badge badge-secondary">2024</div>
          </h2>
          <p>Oxidizer: 1100psi nytrox; fuel: 98% ethanol, 2% water. Won first place in the liquid bracket at 2025 Oxidizers Uninhibited Tournament in Mojave, CA!</p>
        </div>
      </div>
      
      <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
          <RouterLink to="/projects/big-hybrid">
            <img src="./big_hybrid_sim.png"/>
          </RouterLink>
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            <RouterLink to="/projects/big-hybrid">Big Hybrid</RouterLink>
            <div class="badge badge-secondary">2023</div>
          </h2>
          <p>Oxidizer: 750psi nitrous oxide; fuel: aluminized plastisol. Won first place in the highest altitude bracket at the 2024 Oxidizers Uninhibited Tournament in Mojave, CA!</p>
        </div>
      </div>
    </div>


    <!-- <p> -->
    
    <!-- </p> -->
  </main>
</template>

<script>
export default {
  name: 'RESoft',
}
</script>
