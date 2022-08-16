<template>
  <div class="stats" v-if="pokemon">
    <div class="stat">
        <img src="@/assets/hp.png" alt="hp_img">
        <h2>HP</h2>
        <h2>{{pokemon.stats[0].base_stat}}</h2>
    </div>
    <div class="stat">
        <img src="@/assets/attack.png" alt="hp_img">
        <h2>Attack</h2>
        <h2>{{pokemon.stats[1].base_stat}}</h2>
    </div>
    <div class="stat">
        <img src="@/assets/defense.png" alt="hp_img">
        <h2>Defense</h2>
        <h2>{{pokemon.stats[2].base_stat}}</h2>
    </div>
    <div class="stat">
        <img src="@/assets/special-attack.png" alt="hp_img">
        <h2>Special Attack</h2>
        <h2>{{pokemon.stats[3].base_stat}}</h2>
    </div>
    <div class="stat">
        <img src="@/assets/special-defense.png" alt="hp_img">
        <h2>Special Defense</h2>
        <h2>{{pokemon.stats[4].base_stat}}</h2>
    </div>
    <div class="stat">
        <img src="@/assets/speed.png" alt="hp_img">
        <h2>Speed</h2>
        <h2>{{pokemon.stats[5].base_stat}}</h2>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "PokemonStats",
  props: {
    pokemon: {}
  }
};
</script>

<style lang="scss" scoped >
.stats {
  padding: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  display: flex;
  flex-wrap: wrap;
  .stat{
    height: 200px;
    max-width: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img{
      width: 80px;
      height: 80px;
    }
    h2{
      text-align: center;
      display: inline-block;
      width: 100%;
    }
  }
}

</style>