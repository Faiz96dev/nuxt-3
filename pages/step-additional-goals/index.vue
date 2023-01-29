<template>
<div class="w-full h-full flex justify-center aligh-center">
  <QuizComponent :quize-data="QUIZE"  />
  <nuxt-link class="text-white" to="choose-body-type">next</nuxt-link>
</div>
</template>

<script setup lang="ts">
import {QUIZE} from "@/business/choose-body.js";
</script>
