<template>
  <header class="header">
    <img src="@/assets/pokemon-logo.svg" alt="Pokemon_Logo" class="logo" />

    <img src="@/assets/pokeball_3.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_4.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_1.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_1.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_3.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_1.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_4.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_4.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_3.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_4.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_3.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_1.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_2.png" alt="Pokeball_Img" class="poke" />
    <img src="@/assets/pokeball_1.png" alt="Pokeball_Img" class="poke" />
  </header>
</template>

<script>
export default {
  name: "PokemonHeader",
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient( to bottom, #919191, transparent);
  }
  
  .logo{
    width: 60%;
    min-width: 300px;
    position: relative;
    z-index: 1;
    clip-path: circle(0.0% at 50% 50%);
    animation: showLogo 2s 2s ease-in forwards;
  }
  .poke {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 0px;
    opacity: .7;
    animation-name: movePokeball;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    transform: translateY(100px);
  }
  :nth-child(2){
    left: 0%;
    animation-delay: 1s;
  }
  :nth-child(3){
    left: 5%;
    animation-delay: 3.5s;
  }
  :nth-child(4){
    left: 10%;
    animation-delay: 1.5s;
  }
  :nth-child(5){
    left: 15%;
    animation-delay: 2s;
  }
  :nth-child(6){
    left: 20%;
    animation-delay: 0s;
  }
  :nth-child(7){
    left: 25%;
    animation-delay: 4s;
  }
  :nth-child(8){
    left: 30%;
    animation-delay: 0.5s;
  }
  :nth-child(9){
    left: 35%;
    animation-delay: 1.2s;
    animation-duration: 4s;
  }
  :nth-child(10){
    left: 40%;
    animation-delay: 2.5s;
  }
  :nth-child(11){
    left: 45%;
    animation-delay: 0s;
  }
  :nth-child(12){
    left: 50%;
    animation-delay: 2.1s;
  }
  :nth-child(13){
    left: 55%;
    animation-delay: 0.8s;
  }
  :nth-child(14){
    left: 60%;
    animation-delay: 1.8s;
  }
  :nth-child(15){
    left: 65%;
    animation-delay: 0.3s;
  }
  :nth-child(16){
    left: 70%;
    animation-delay: 3.5s;
  }
  :nth-child(17){
    left: 75%;
    animation-delay: 3s;
  }
  :nth-child(18){
    left: 80%;
    animation-delay: 1.5s;
    animation-duration: 3s;
  }
  :nth-child(19){
    left: 85%;
    animation-delay: 0.5s;
  }
  :nth-child(20){
    left: 90%;
    animation-delay: 2.5s;
  }
  :nth-child(21){
    left: 95%;
    animation-delay: 0s;
    animation-duration: 5s;
  }
}

@keyframes movePokeball {
  100%{
    transform: translateY(-900%);
  }
}

@keyframes showLogo {
  100%{
    clip-path: circle(70.7% at 50% 50%);
  }
}
</style>