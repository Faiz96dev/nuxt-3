<template>
  <div
  @mouseover="handleHover"
  @mouseleave="handleLeave"
    v-if="props.cardData"
    class="
      card
      bg-gray-800
      hover:bg-gray-700
      mt-[15px]
      flex
      justify-between
      cursor-pointer
      text-white
      items-center
      p-[22px]
      relative
    "
  >
    <span>{{ props.cardData.title }}</span>
      <img  class="h-[150px]" :src="`@/assets/${props.cardData.img}`" />
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});
  function handleHover() {
    // console.log("hover", props.cardData);
  }
  function handleLeave() {
    // console.log("leave", props.cardData);
  }
</script>

<style>
.cropped1 {
    width: 200px; /* width of container */
    height: 200px; /* height of container */
    object-fit: cover;
    border: 5px solid black;
}
.card {
  width: 470px;
  height: 168px;
}
.image-wrapper {
  align-self: flex-start;
  margin-left: auto;
}
</style>