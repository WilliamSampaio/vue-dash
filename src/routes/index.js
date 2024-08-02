import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/teste', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;