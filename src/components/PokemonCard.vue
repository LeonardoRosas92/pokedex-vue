<template>
  <div class="card">
    <div class="card__container">
      <div class="card__container__picture" @click.prevent="goPokedex(pokemon.id)">
        <img src="@/assets/pokeball_1.png" alt="Pokeball_img" class="pokeball">
        <img :src="getUrl" alt="Pokemon_img" class="pokemon" />
      </div>
      <div class="card__container__texts">
        <h2>#{{pokemon.id}} - {{pokemon.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
export default {
  name: "PokemonCard",
  props: {
    pokemon:{
        type: Object,
        required: true
    }
  },
  methods : {
    goPokedex(id){
        console.log('GoPokedex id: ' + id);
        router.push( { name: 'PokedexPokemon' , params: { pokemonId : id}} )
    }
  },
  computed : {
    getUrl (){
        if (this.pokemon.sprites.other.home.front_default) {
            return this.pokemon.sprites.other.home.front_default;
        }else{
            return this.pokemon.sprites.front_default;
        }
    }
  }
};
</script>

<style lang="scss">
.card {
  width: 275px;
  height: 340px;
  border-radius: 10px;
  background: #d5a100;
  padding: 10px;
  box-shadow: 5px 5px 14px 1px rgba(0,0,0,0.65);
  transition: all .5s;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
  &__container {
    height: 100%;
    background-color: #0075BE;
    border-radius: 10px;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__picture {
      width: 100%;
      border-radius: 10px;
      //background: linear-gradient(to bottom, #C0C0C0 0%, #B1B1B1 100%);
      background-color: #00f2ffd1;
      padding-bottom: 10px;
      position: relative;
      z-index: 1;
      &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        background-color: #4DAD5B;
      }
      .pokeball {
        position: absolute;
        width: 25px;
        height: 25px;
        opacity: .8;
        top: 4px;
        right: 4px;
      }
      .pokemon {
        position: relative;
        width: 235px;
        height: 235px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
        filter: drop-shadow(5px 12px 15px #000);

      }
    }
    &__texts{
        text-align: center;
        h2{
            font-family: 'Roboto';
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: capitalize;
        }
    }
  }
}
</style>