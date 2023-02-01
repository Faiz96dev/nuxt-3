<template>
  <div class="w-full h-full flex">
    <div class="h-1/2 flex justify-center w-1/2">
      <nuxt-img class="image" height="600" :src="`/${SLIDER_VALUES[currentActive].value}.webp`" />
    </div>
    <div class="h-1/2 flex items-center justify-center flex-col align-center w-1/2">
      <slider-component max="7" min="0"  :initial="3" @sliderChange="handleSlide" />
      <button-component @click="$processData(SLIDER_VALUES[currentActive].title)" title="Contiune"/>
    </div>
    <span>{{ SLIDER_VALUES[currentActive].title }}</span>
  </div>
</template>

<script setup lang="ts">
const { $processData } = useNuxtApp();
const currentActive = ref(3)
const  SLIDER_VALUES = [
  {
    title: '5-9%',
    value: 'FROM_5_TO_9' 
  },
  {
    title: '10-14%',
    value: 'FROM_10_TO_14'
  },
  {
    title: '15-19%',
    value: 'FROM_15_TO_19'
  },
  {
    title: '20-24%',
    value: 'FROM_20_TO_24'
  },
  {
    title: '25-29%',
    value: 'FROM_25_TO_29'
  },
  {
    title: '30-34%',
    value: 'FROM_30_TO_34'
  },
  {
    title: '35-39%',
    value: 'FROM_35_TO_39'
  },
  {
  title: '> 40%',
  value: 'MORE_THAN_40'
  }
]
function handleSlide (val: any){
  currentActive.value = val
}
const quizeData = {
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
