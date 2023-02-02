
<template>
  <div class="flex flex-col items-center">
    <div class="flex-col mb-[30px] ">
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
      title: "Loose Weight",
      img: "image26.webp",
    },
    {
      title: "Gain Muscle Mass",
      img: "image23.webp",
    },
    {
      title: "Get Shredded",
      img: "image27.webp",
    },
  ],
};
</script>


