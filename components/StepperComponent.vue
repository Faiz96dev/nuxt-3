<template>
  <div v-if="pageExists" class="w-full flex align-center items-center justify-center mt-[15px]">
    <div @click="goToPrewPage" class="bg-gray-500 cursor-pointer p-[5px]">
      <nuxt-img height="10" src="left-arrow.png" />
    </div>
    <nuxt-link class="text-white" :to="getRouteTo">NEXT</nuxt-link>

    <div class="border-[1px] w-full border-gray-500 mx-[15px]">
      <div class="h-[8px] bg-red-500" :style="`width: ${getWidth}%`"></div>
    </div>

    <span
      >{{ PAGES_HELPER[route.path.replace("/", "")].order }}/{{
        Object.keys(PAGES_HELPER).length
      }}</span
    >
  </div>
</template>

<script lang="ts" setup >
import { PAGES_HELPER } from "@/helpers/pagesHelper.js";
const router = useRouter();
const pageExists = computed(() => {
  // @ts-ignore
  return PAGES_HELPER[route.path.replace("/", "")];
});
const route = useRoute();
const getRouteTo = computed(() => {
  // @ts-ignore
  const currentPageIndex = PAGES_HELPER[route.path.replace("/", "")].order;
  // @ts-ignore
  return Object.keys(PAGES_HELPER)[currentPageIndex]
    ? `/${Object.keys(PAGES_HELPER)[currentPageIndex]}`
    : "/";
});
function goToPrewPage() {
  // @ts-ignore
  const currentPageIndex = PAGES_HELPER[route.path.replace("/", "")].order ? PAGES_HELPER[route.path.replace("/", "")].order : null;
  const prewPage = Object.keys(PAGES_HELPER)[currentPageIndex - 2];
  if (prewPage) {
    return router.push(`/${prewPage}`);
  }
  return "/";
}
const getWidth = computed(() => {
  const increaseOn = 100 / Object.keys(PAGES_HELPER).length;
  // @ts-ignore
  return PAGES_HELPER[route.path.replace("/", "")]
    ? PAGES_HELPER[route.path.replace("/", "")].order * increaseOn
    : "/";
});
</script>

<style>
</style>