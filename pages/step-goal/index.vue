
<template>
  <div class="flex flex-col items-center">
    <div class="flex-col pr-[144px] pt-[55px]">
      <h2>BUILD YOUR PERFECT BODY</h2>
      <h3>Get a personalized workout program</h3>
    </div>
    <div class="flex flex-col">
      <QuizComponent @cardClick="$processData" :quizeData="quizeData" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $processData } = useNuxtApp();

const quizeData = {
  title: "Choose your goal",
  cards: [
    {
      title: "loose weight",
      img: "https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg",
    },
    {
      title: "gain Muscle Mass",
      img: "https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg",
    },
    {
      title: "Get Shredded",
      img: "https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg",
    },
  ],
};
</script>


