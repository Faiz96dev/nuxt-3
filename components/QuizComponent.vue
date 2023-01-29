<template >
  <div class="flex align-center w-full justify-center items-center flex-col">
    <div
      v-if="quizeData"
      class="flex-col items-center justify-center align-center w-[470px]"
    >
      <h2>{{ quizeData.lead }}</h2>
      <h3>{{ quizeData.title }}</h3>
    </div>
    <div v-if="quizeData.cards"  class="flex flex-col align-center w-full items-center justify-center">
      <div @click="handleCardClick(card)"  v-for="(card, index) in quizeData.cards" :key="index">
        <AppCard
        :cardData="card"
      />
      </div>
    </div>
  </div>
</template>
  
  <script lan="ts" setup>
const props = defineProps({
  quizeData: {
    type: Object,
  },
});
function handleCardClick(card) {
  console.log("handleCardClick", card);
}
</script>
  
  <style>
</style>