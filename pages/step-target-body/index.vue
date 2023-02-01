<template>
  <div class="w-full h-full flex justify-center aligh-center">
    <QuizComponent @cardClick="$processData"  :quizeData="quizeData" />
  </div>
</template>

<script setup lang="ts">
const { $processData } = useNuxtApp();
let quizeData = {
  title: "Ok, so your goal is to Lose Weight",
  lead: "Choose the body you want",
  cards: [
    {
      title: "Slim body ",
      img: "https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg",
    },
    {
      title: "Slim, shredded body ",
      img: "https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg",
    },
  ],
};
</script>
