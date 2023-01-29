<template>
  <div
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
    "
  >
    <span>{{ props.cardData.title }}</span>
    <nuxt-img class="image" height="150" src="/fat.webp" />
  </div>
</template>

<script setup lang="ts">
let props = defineProps({ cardData: {
      type: Object,
      required: true,
    }})
</script>

<style>
.card {
  width: 470px;
  height: 168px;
}
.image-wrapper {
  align-self: flex-start;
  margin-left: auto;
  margin-right: -16px;
  margin-top: -16px;
}
</style>