<template>
  <div
    class="w-full h-full flex justify-center items-center flex-col aligh-center"
  >
    <QuizComponent @cardClick="$processData"  :quize-data="quizeData" />

    <div
      class="
        p-[15px]
        border border-2px border-gray-300
        w-[470px]
        mt-[10px]
        flex-col
      "
    >
      <div class="flex justify-around">
        <h3 class="">Test to determine your body type</h3>
        <nuxt-img height="10" src="hand.svg" />
      </div>
      <p class="my-[15px]">
        Grip your opposite wrist using the thumb and an index finger. If you’re
        right-handed, use your right hand to grab your left wrist.
      </p>
      <div>
        <p>
          <strong>Thumb and index finger:</strong>
        </p>
        <p>
          <b>Ectomorph</b> — wrapping around with ease.<br /><b>Mesomorph</b> —
          touching each other.<br /><b>Endomorph</b> — doesn’t come into
          contact.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $processData } = useNuxtApp();
const quizeData = {
    title: 'Choose your body type',
    lead: 'Choose the one that is most similar to yours now. There are no good or bad body types.',
    cards:[
        {
            title: 'Ectomorph', 
            img: 'https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg'
        },
        {
            title: 'Mesomorph ',
            img: 'https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg'
        },
        {
            title: 'Endomorph ',
            img: 'https://www.healthyfood.com/wp-content/uploads/2019/04/lose-weight.jpg'
        }
    ]
}
</script>
<style scoped>
</style>
