<template>
 <footer class="flex items-center justify-center pt-[100px] pb-[50px] ">
  <span class="mr-[20px]">Powered by </span>
  <nuxt-img  class="rounded-sm" height="80" :src="`/openAI.png`" />
 </footer>
</template>

<script setup lang="ts">
import { useDataCombiner } from "~~/store/dataCombiner"
const store  = useDataCombiner()
</script>

<style>
</style>