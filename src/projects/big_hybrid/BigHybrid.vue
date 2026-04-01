<template>
  <main>
    <div class="flex items-center">
      <p class="text-7xl">Big Hybrid</p>
      
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">Peak Thrust</div>
          <div class="stat-value">1,850 lbf</div>
          <div class="stat-desc"></div>
        </div>

        <div class="stat">
          <div class="stat-title">Impulse</div>
          <div class="stat-value">4,200 lbf-s</div>
          <div class="stat-desc">Half O-motor</div>
        </div>

        <div class="stat">
          <div class="stat-title">ISP</div>
          <div class="stat-value">211s</div>
          <div class="stat-desc"></div>
        </div>
      </div>
    </div>

    <!-- <h1> -->
    <!-- <p class="blog"> -->
    <p>
    <!-- Highest in history of lab, since its founding in 1999 -->
    During 2023, I led a team to design, simulate, and test this hybrid rocket engine. The year after, it was flown on a sounding rocket at the Friends of Amateur Rocketry Oxidizers Uninhibited Tournament, where it won first place in the highest altitude bracket and second place in best sounding engines. My personal contributions, aside from leadership, were the design and simulation of the engine as a whole.
    </p>
    
    <!-- Early testing mishaps. -->
    <!-- The initial design featured an ablative nozzle to save on material costs. While our composite formulation showed promisinly low ablation on small-scale tests featuring lower pressures and temperatures, it was intenable on the full engine where the exhaust completely  -->
    
    <!-- After replacing with a graphite nozzle, which is more conventional for amateur rocketry, the -->
    <p>
    This project was done under the Student Space Technology Association (SSTA) at the University of Tennessee, Knoxville. The static fire was the most successful in the SSTA's history in terms of highest efficiency, thrust, and impulse. At 211s of specific impulse, this became one of the most efficient student-built hybrid rocket engines from any university, most of which are also self-pressurizing nitrous oxide based systems, but often feature less efficient fuel choices and injectors. The aluminized plastisol fuel we used in Big Hybrid facilitated high performance, which is seldom adopted due to the significant challenges of manufacturing large, high quality fuel grains. The manufacturing process we developed at the SSTA took several years of iteration, culminating in James Cooper and Jakob Cielo's positive-pressure manufacturing process, to achieve consistently void-free grains at this scale. Finally, the vortex injector we used, which was designed by Drew Nickel, helped us achieve the high efficiency.
    
  <!-- UTK's highest impulse, thrust, and efficiency rocket engine ever, which won first place in its altitude category at FAR-OUT 2024! -->

  <!-- 11 ft - length, 5" Diameter -->
    </p>
    
    <!-- might look cool to have these on RHS of text, but would need to still be vertical for mobile -->
    <div class="flex">
      <img src="./departure.jpg" class="w-1/2"/>
      <img src="./firing.png" class="w-1/2"/>
    </div>
    
    <!-- Seciton on fuel grains? -->
    
    <p>Special thanks to Alexander van Bruggen for serving as the in-house machinist for this project, as well as Ricardo Crescencio and Meghan Smitherman for leading the sounding rocket project the following year that used Big Hybrid as its engine.</p>
  </main>
</template>

<script>
export default {
  name: 'BigHybrid',
}
</script>

<style scoped>
.blog {
  width: 75%;
}
</style>
