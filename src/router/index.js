import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },

  {
    path: '/help',
    name: 'help',
    meta: { layout: 'main' },
    component: () => import('../views/Help.vue')
  },
  {
    path: '/physical',
    name: 'physical',
    meta: { layout: 'main' },
    component: () => import('../views/Physical.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
