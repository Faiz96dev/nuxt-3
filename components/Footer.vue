<template>
 <footer class="flex items-center justify-center pt-[100px] pb-[50px] ">
  <span class="mr-[20px]">Powered by </span>
  <img  class="rounded-sm h-[80px]"  :src="`@/assets/openAI.png`" />
 </footer>
</template>

<script setup lang="ts">
import { useDataCombiner } from "~~/store/dataCombiner"
const store  = useDataCombiner()
</script>

<style>
</style>