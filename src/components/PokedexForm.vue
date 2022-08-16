<template>
  <div class="container" v-if="pokemon">
    <div class="pokedex">
      <div class="pokedex__left">
        <div class="pokedex__left__top">
          <svg height="100" width="300px">
            <polyline
              points="0,96 100,96 120,50 300,50"
              style="fill: none; stroke: black; stroke-width: 4"
            />
          </svg>
          <div class="pokedex__left__top__cicle"></div>
          <div class="pokedex__left__top__cicle__mini-green"></div>
          <div class="pokedex__left__top__cicle__mini-yellow"></div>
          <div class="pokedex__left__top__cicle__mini-red"></div>
        </div>
        <div class="pokedex__left__middle">
          <div class="pokedex__left__middle__container">
            <div
              class="
                pokedex__left__middle__container__cicle__mini
                pokedex__left__middle__container__cicle__mini-left
              "
            ></div>
            <div
              class="
                pokedex__left__middle__container__cicle__mini
                pokedex__left__middle__container__cicle__mini-right
              "
            ></div>
            <!-- <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png"
              alt="Pokemon_img"
            /> -->
            <img :src="getUrlImage" alt="Pokemon_img">
            <div class="pokedex__left__middle__container__cicle"></div>
            <div class="pokedex__left__middle__container__line"></div>
          </div>
        </div>
        <div class="pokedex__left__bottom">
          <div class="pokedex__left__bottom__button"></div>
          <div class="pokedex__left__bottom__ligth-red"></div>
          <div class="pokedex__left__bottom__ligth-blue"></div>
          <div class="pokedex__left__bottom__cursor">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="pokedex__right">
        <div class="pokedex__right__top">
          <svg height="100" width="300px">
            <polyline
              points="0,0 0,50 180,50 204,96 300,96 305,0 0,0"
              style="fill: #c9c8c8; stroke: none; stroke-width: 3"
            />
            <polyline
              points="0,50 180,50 204,96  300,96"
              style="fill: none; stroke: black; stroke-width: 4"
            />
          </svg>
        </div>
        <div class="pokedex__right__container">
          <div class="pokedex__right__container__info">
            <h2> {{ pokemon.name }}</h2>
            <h3>Height: {{pokemon.height}} ft</h3>
            <h3>Weight: {{pokemon.weight}} lbs</h3>
          </div>
          <div class="pokedex__right__container__grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="pokedex__right__container__type">
            <div>
              <h3>{{ getTypes }}</h3>
              <h3># {{pokemon.id}}</h3>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokedexForm",
  props: [ 'pokemon' ],
  methods:{},
  computed:{
    getUrlImage (){
        if (this.pokemon.sprites.other.home.front_default) {
            return this.pokemon.sprites.other.home.front_default;
        }else{
            return this.pokemon.sprites.front_default;
        }
    },
    getTypes(){
       return this.pokemon.types.map( type => type.type.name).join(' - ')
      //return this.pokemon ? ' Types ' : 'Types 2'
      //return true;
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .pokedex {
    width: 608px;
    height: 500px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    &__left {
      position: relative;
      height: 100%;
      border-radius: 10px 10px 0 10px;
      border: 5px solid #000;
      background-color: #ff3c41;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.55);
      &__top {
        height: 100px;
        border-radius: 10px;
        position: relative;
        &__cicle {
          width: 76px;
          height: 76px;
          background-color: rgb(198, 198, 198);
          position: absolute;
          border-radius: 50%;
          border: 4px solid #000;
          top: 8px;
          left: 15px;
          box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.55);
          &::before {
            content: "";
            position: absolute;
            inset: 2px;
            background-color: #3c95c8;
            border: 4px solid #000;
            border-radius: 50px;
          }
          &::after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #9ad1df9f;
            top: 15px;
            left: 15px;
            border-radius: 50px;
          }
        }
        &__cicle__mini-green {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #47cf73;
          border-radius: 50px;
          border: 3px solid #000;
          top: 10px;
          right: 20px;
          box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.55);
          &::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #9ad1dfdd;
            top: 5px;
            left: 5px;
            border-radius: 50px;
          }
        }
        &__cicle__mini-yellow {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #ffdd40;
          border-radius: 50px;
          border: 3px solid #000;
          top: 10px;
          right: 55px;
          box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.55);
          &::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #e3e4e8;
            top: 5px;
            left: 5px;
            border-radius: 50px;
          }
        }
        &__cicle__mini-red {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: #ff3c41;
          border-radius: 50px;
          border: 3px solid #000;
          top: 10px;
          right: 90px;
          box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.55);
          &::after {
            content: "";
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #e3e4e8;
            top: 5px;
            left: 5px;
            border-radius: 50px;
          }
        }
      }
      &__middle {
        height: 270px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &__container {
          width: 260px;
          height: 260px;
          border: 5px solid #000;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0 0 0 40px;
          background-color: rgb(211, 210, 210);
          position: relative;
          &__cicle {
            position: absolute;
            width: 22px;
            height: 22px;
            background-color: #f72a31;
            border-radius: 50px;
            border: 3px solid #000;
            bottom: 2px;
            left: 25px;
            box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.55);
            &::after {
              content: "";
              position: absolute;
              width: 5px;
              height: 5px;
              background-color: #e3e4e8d4;
              top: 4px;
              left: 3px;
              border-radius: 50px;
            }
          }
          &__cicle__mini {
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #f72a31;
            border-radius: 50px;
            border: 3px solid #000;
            top: 4px;
            box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.55);
          }
          &__cicle__mini-left {
            left: 140px;
          }
          &__cicle__mini-right {
            right: 140px;
          }
          &__line {
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: #000;
            bottom: 5px;
            right: 25px;
            &::before {
              content: "";
              position: absolute;
              width: 30px;
              height: 3px;
              background-color: #000;
              bottom: 6px;
            }
            &::after {
              content: "";
              position: absolute;
              width: 30px;
              height: 3px;
              background-color: #000;
              bottom: 11px;
            }
          }
          img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border: 4px solid #000;
            border-radius: 10px;
            background-color: rgb(230, 227, 227);
          }
        }
      }
      &__bottom {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: end;
        &__button {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: #666b7a;
          border-radius: 50%;
          border: 4px solid #000;
          top: 40px;
          left: 30px;
        }
        &__ligth-red {
          position: absolute;
          width: 75px;
          height: 10px;
          background-color: #ff0008;
          border: 4px solid #000;
          border-radius: 6px;
          top: 0;
          right: 160px;
        }
        &__ligth-blue {
          position: absolute;
          width: 75px;
          height: 10px;
          background-color: #3c95c8;
          border: 4px solid #000;
          border-radius: 6px;
          top: 0;
          right: 60px;
        }
        &__cursor {
          position: relative;
          display: grid;
          width: 90px;
          grid-template-columns: repeat(3, 25px);
          grid-template-rows: repeat(3, 25px);
          margin-top: 30px;
          margin-right: 30px;
          justify-content: center;
          div:nth-child(2) {
            background-color: #666b7a;
            border-top: 3px solid #000;
            border-left: 3px solid #000;
            border-right: 3px solid #000;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          div:nth-child(4) {
            background-color: #666b7a;
            border-top: 3px solid #000;
            border-left: 3px solid #000;
            border-bottom: 3px solid #000;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          div:nth-child(5) {
            background-color: #666b7a;
            &::before {
              content: "";
              position: absolute;
              border: 4px solid #000;
              inset: -10px;
              border-radius: 50%;
              box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.55);
            }
            &::after {
              content: "";
              position: absolute;
              border: 3px solid #000;
              width: 20px;
              height: 20px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 50%;
            }
          }
          div:nth-child(6) {
            background-color: #666b7a;
            border-top: 3px solid #000;
            border-right: 3px solid #000;
            border-bottom: 3px solid #000;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          div:nth-child(8) {
            background-color: #666b7a;
            border-left: 3px solid #000;
            border-right: 3px solid #000;
            border-bottom: 3px solid #000;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      }
    }
    &__right {
      align-self: flex-end;
      height: 500px;
      width: 300px;
      //background-color: #ff3c41;
      background: linear-gradient(0deg, rgba(255,60,65,1) 0%, rgba(255,60,65,1) 98%, rgba(255,60,65,0) 98%);
      border-radius: 0px 0px 10px 0;
      &__top {
        height: 100px;
        width: 300px;
      }
      &__container {
        height: 400px;
        width: 300px;
        padding-top: 10px;
        border-radius: 0px 0px 10px 0;
        border-left: 1px solid #000;
        border-right: 5px solid #000;
        border-bottom: 5px solid #000;
        &__info {
          margin: 0 auto;
          width: 250px;
          background-color: rgb(230, 227, 227);
          border-radius: 10px;
          padding: 5px 5px;
          border: 4px solid #000;
          h2 {
            text-align: center;
            padding: 5px;
            font-family: "Roboto";
            font-size: 2rem;
            text-transform: capitalize;
          }
          h3 {
            padding-left: 5px;
            padding: 5px 0;
            font-family: "Roboto";
            font-weight: 400;
          }
        }
        &__grid {
          display: grid;
          grid-template-columns: repeat(5, 40px);
          grid-template-rows: repeat(2, 40px);
          justify-content: center;
          margin: 10px 0;
          padding: 10px 0;
          gap: 10px;
          div {
            width: 40px;
            height: 40px;
            border: 3px solid #000;
            border-radius: 5px;
            background-color: #3c95c8;
            box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.55);
          }
        }
        &__type {
          margin: 0 auto;
          width: 250px;
          h3 {
            background-color: rgb(230, 227, 227);
            margin: 10px;
            padding: 5px;
            text-align: center;
            border-radius: 5px;
            border: 4px solid #000;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .container {
    margin: 0 auto;
    height: 950px;
    width: 300px;
    .pokedex {
        width: 305px;
        grid-template-columns: 305px;
        &__left{
            margin-top: 20px;
            border-radius: 10px;
        } 
        &__right{
            margin-top: 20px;
            height: 400px;
            width: 305px;
            border: 5px solid #000;
            background-color: #ff3c41;
            border-radius: 10px;
            &__top{
                display: none;
            }
            &__container {
                width: 305px;
                border: none;
            }
        }   
    }
  }
}
</style>