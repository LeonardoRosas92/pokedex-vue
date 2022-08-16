/* eslint-disable no-unused-vars */
import { createStore } from 'vuex';
import {getAllPokemon, getPokemonByUrl, getPokemonById} from '@/Api/getPokemonApi';
import axios from 'axios';
export default createStore({
  state: {
    pokemons: [],
    url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
  },
  getters: {
    getPokemons(state){
      return state.pokemons
    },
    getPokemonById : ( state ) => ( id ) => {
      console.log(id);
      return state.pokemons.filter( pokemon => pokemon.id == id)
    }
  },
  mutations: {
    setPokemons(state, pokemons){
      state.pokemons = [...state.pokemons, ...pokemons]
    },
    setUrl(state, url){
      state.url = url;
    },
    setPokemon(state, pokemon){
      console.log('set');
      console.log(pokemon);
      const str = JSON.stringify(pokemon);
      state.pokemon = JSON.parse(str);
      console.log('state');
      console.log(state.pokemon);
    }
  },
  actions: {
    async getPokemonsAPI({commit, state}){
      const pokemons = await getAllPokemon(state.url);

      const arrayPokemon = 
        await axios.all(
          pokemons.results.map( ( pokemonUrl ) => getPokemonByUrl(pokemonUrl.url)
            .then( (pokemon) => {
              return pokemon
            }) 
          )
        ).then( (pokemons) => { return pokemons});

      commit('setUrl', pokemons.next);
      commit('setPokemons', arrayPokemon);
    }
  }
})
