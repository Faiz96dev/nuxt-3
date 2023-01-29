<template>
  <div>
    <AppCard class="mb-[16px]" v-for="(card, index) in GOALS" :key="index" :card-data="card" />
  </div>
</template>

<script setup lang="ts">
import AppCard from "~~/components/AppCard.vue";
import {GOALS} from "@/business/goals.js";
export default {
  name: "GoalSelector",
  components: {
    AppCard,
  },
  data () {
    return {
        GOALS
    };
  },
};
</script>

<style>
</style>