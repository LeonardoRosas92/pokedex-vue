<template>
  <div class="container-detail">
    <PokedexForm :pokemon="pokemon" v-if="pokemon" />
    <PokemonStats :pokemon="pokemon" v-if="pokemon"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useRoute } from 'vue-router';
import { getPokemonById } from '@/Api/getPokemonApi';
import PokedexForm from '@/components/PokedexForm.vue';
import PokemonStats from '@/components/PokemonStats.vue';
export default {
    name: 'PokedexPokemon',
    components: { PokedexForm, PokemonStats },
    data(){
      return {
        pokemon : null
      }
    },
    computed:{
      ...mapGetters(['getPokemons','getPokemonById'])
    },
    methods: {
        ...mapActions(['getPokemonByIdAPI'])
    },
    async mounted(){
      const idPokemon = useRoute().params.pokemonId;
      const pokemons = this.getPokemons;
      if (pokemons.length > 0) {
        const findPoke = pokemons.filter( pokemon => {
          if (pokemon.id == idPokemon) {
            return pokemon
          }
        });
        this.pokemon = findPoke[0];
      }else{
        this.pokemon = await getPokemonById(idPokemon);
      }
      
    }
}
</script>

<style lang="scss" scoped>
.container-detail{
  position: relative;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media screen and (max-width: 1000px) {
  .container-detail{
    grid-template-columns: 1fr;
  }
}
</style>