import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Oferta from '../views/Oferta.vue'
import Portfolio from '../views/Portfolio.vue'
import Kontakt from '../views/Kontakt.vue'
import ONas from '../views/ONas.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/oferta', component: Oferta },
  { path: '/portfolio', component: Portfolio },
  { path: '/kontakt', component: Kontakt },
  { path: '/o-nas', component: ONas }
]

export default createRouter({
  history: createWebHistory(),
  routes
})