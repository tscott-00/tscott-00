import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './Home.vue'

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
    { path: '/projects/big_hybrid', component: BigHybrid },
    { path: '/projects/resoft', component: RESoft },
    
    { path: '/honors_and_awards', component: HonorsAndAwards },
  ],
})

createApp(App).use(router).mount('#app')
