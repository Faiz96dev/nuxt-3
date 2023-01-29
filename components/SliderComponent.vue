<template>
    <input type="range" :min="props.min" :max="props.max" step="1" v-model="inputVal" @input="$emit('sliderChange', inputVal)"  />
</template>
<script setup >

const inputVal = ref(3)
const props = defineProps({
  min:{
    type: [Number, String],
    default: '0'
  },
  max:{
    type: [Number, String],
    default: '7'
  },
  initial: {
    type: [Number, String],
    default: '3'
  }

})

</script>