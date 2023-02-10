
<template>
  <div class="flex flex-col items-center">
    <div class="flex-col mb-[30px] ">
      <h2>Set your age</h2>
    </div>
    <div class="flex flex-col">
      <input-component label="age" type="number" placeholder="" @handleChange="changeAge"  :min="13" :max="90" />
    </div>
    <button-component class="mt-[30px]" @click="$processData(ageVal)" title="Contiune"/>
  </div>
</template>

<script lang="ts" setup>
const { $processData } = useNuxtApp();
const ageVal = ref(null)
function changeAge(value: any){
  ageVal.value = value
}

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


