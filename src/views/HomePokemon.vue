<template>
  <PokemonHeader/>
  <router-view></router-view>
</template>

<script>
import PokemonHeader from '@/components/PokemonHeader.vue'
export default {
    name: 'HomePokemon',
    components: { PokemonHeader }
}
</script>