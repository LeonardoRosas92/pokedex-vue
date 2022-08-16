import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: () => import(/* webpackChunkName: "PokemonList" */ '@/components/PokemonList.vue')
  },
  {
    path: '/:pokemonId',
    name: 'PokedexPokemon',
    component: () => import(/* webpackChunkName: "PokedexPokemon" */ '@/components/PokedexPokemon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
