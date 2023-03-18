<template>
  <div class="w-full h-full items-center justify-center flex">
    <div class="h-1/3 flex justify-end w-1/3">
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_5_TO_9'"  class="h-[600px] image" src="@/assets/FROM_5_TO_9.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_10_TO_14'"   class="h-[600px] image" src="@/assets/FROM_10_TO_14.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_15_TO_19'"   class="h-[600px] image" src="@/assets/FROM_15_TO_19.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_20_TO_24'"   class="h-[600px] image" src="@/assets/FROM_20_TO_24.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_25_TO_29'"   class="h-[600px] image" src="@/assets/FROM_25_TO_29.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_30_TO_34'"   class="h-[600px] image" src="@/assets/FROM_30_TO_34.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'FROM_35_TO_39'"   class="h-[600px] image" src="@/assets/FROM_35_TO_39.webp" />
      <img v-show="SLIDER_VALUES[currentActive].value === 'MORE_THAN_40'"   class="h-[600px] image" src="@/assets/MORE_THAN_40.webp" />
    </div>
    <div class="h-1/3 flex items-center justify-center flex-col align-center w-1/2">
      <span>Use slider to set your body fat</span>
      <slider-component max="7" min="0"  :initial="3" @sliderChange="handleSlide" class="mb-[30px] w-[200px]" />
      <span class="my-[20px]">{{ SLIDER_VALUES[currentActive].title}}</span>
      <button-component @click="$processData(SLIDER_VALUES[currentActive].title)" title="Get program"/>
    </div>
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
