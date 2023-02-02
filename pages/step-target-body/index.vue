<template>
  <div class="w-full h-full flex justify-center aligh-center">
    <QuizComponent @cardClick="$processData"  :quizeData="quizeData" />
  </div>
</template>

<script setup lang="ts">
const { $processData } = useNuxtApp();
let quizeData = {
  title: "",
  lead: "Choose the body you want",
  cards: [
    {
      title: "Athletic",
      img: "image3.webp",
    },
    {
      title: "Hero",
      img: "image24.webp",
    },
    {
      title: "Bodybuilder",
      img: "image25.webp",
    }
  ],
};
</script>
