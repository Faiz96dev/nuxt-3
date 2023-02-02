
<template>
  <div
    class="w-full h-full flex justify-center items-center flex-col aligh-center"
  >
  <span v-if="!store.loading" class="w-1/2 mt-[20px]">
    {{store.output}}
  </span>
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
