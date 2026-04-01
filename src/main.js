import './assets/main.css'

import { createApp } from 'vue'
// Note can't use web history as don't have control over redirecting in GitHub Pages
// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './home/Home.vue'

import Research from './research/Research.vue';

import Projects from './projects/Projects.vue';
import BigHybrid from './projects/big_hybrid/BigHybrid.vue';
import RESoft from './projects/resoft/RESoft.vue';

import HonorsAndAwards from './HonorsAndAwards.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    
    { path: '/research', component: Research },
    
    { path: '/projects', component: Projects },
    { path: '/projects/big-hybrid', component: BigHybrid },
    { path: '/projects/resoft', component: RESoft },
    
    { path: '/honors-and-awards', component: HonorsAndAwards },
  ],
})

createApp(App).use(router).mount('#app')
