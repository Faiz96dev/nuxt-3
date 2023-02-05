<template>
  <header class="flex w-full justify-between">
    <nav class="w-full justify-between flex">
      <logo class="cursor-pointer" @click="router.push('/')" />
      <nav class="flex">
      </nav>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useDataCombiner } from "~~/store/dataCombiner"
const store  = useDataCombiner()
const router = useRouter()
</script>

<style>
</style>