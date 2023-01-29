<template>
  <div class="w-full flex align-center items-center justify-center mt-[15px]">
    <div @click="goToPrewPage" class="bg-gray-500 cursor-pointer p-[5px]">
      <nuxt-img height="10" src="left-arrow.png" />
    </div>
    <nuxt-link class="text-white" :to="getRouteTo">NEXT</nuxt-link>

    <div class="border-[1px] w-full border-gray-500 mx-[15px]">
      <div class="h-[8px] bg-red-500" :style="`width: ${getWidth}%`"></div>
    </div>

    <span
      >{{ STEPS_PAGES[route.path.replace("/", "")] }}/{{
        Object.keys(STEPS_PAGES).length
      }}</span
    >
  </div>
</template>

<script lang="ts" setup >
import { STEPS_PAGES } from "@/helpers/stepperHelper.js";
const router = useRouter();
const route = useRoute();
const getRouteTo = computed(() => {
  // @ts-ignore
  const currentPageIndex = STEPS_PAGES[route.path.replace("/", "")];
  return Object.keys(STEPS_PAGES)[currentPageIndex]
    ? `/${Object.keys(STEPS_PAGES)[currentPageIndex]}`
    : "/";
});
function goToPrewPage() {
  // @ts-ignore
  const currentPageIndex = STEPS_PAGES[route.path.replace("/", "")];
  const prewPage = Object.keys(STEPS_PAGES)[currentPageIndex - 2];
  if (prewPage) {
    return router.push(`/${prewPage}`);
  }
  return "/";
}
const getWidth = computed(() => {
  const increaseOn = 100 / Object.keys(STEPS_PAGES).length;
  // @ts-ignore
  return STEPS_PAGES[route.path.replace("/", "")]
    ? STEPS_PAGES[route.path.replace("/", "")] * increaseOn
    : "/";
});
</script>

<style>
</style>