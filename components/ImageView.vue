<script setup lang="ts">
const props = defineProps<{
  src: string;
  alt: string;
}>();

function getImageUrl(path: string) {
  const pathArr = path.split('.');
  if (pathArr.length < 2) return undefined;

  const url = `../assets/${pathArr[0]}.${pathArr[1]}`;  // change the path

  return new URL(url, import.meta.url).href;
}
</script>

<template>
  <img :src="getImageUrl(props.src)" :alt="props.alt" />
</template>