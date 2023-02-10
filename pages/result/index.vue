
<template>
  <div
    class="w-full h-full flex justify-center items-center flex-col aligh-center"
  >
  <div v-if="!store.loading" class="w-1/2 flex justify-center align-center mt-[20px]">
    <div class="text-white" >
      <h3>Your program:</h3>
      <div v-html="store.output"></div>

    </div>
  </div>
  <LoaderComponent class="mt-[150px]" v-if="store.loading"/>
  </div>
</template>

<script setup lang="ts">
import { useDataCombiner } from "~~/store/dataCombiner"
  const store = useDataCombiner()
  onMounted(() => {
    store.combineDataInPrompt()
  })
</script>
<style scoped>
</style>
