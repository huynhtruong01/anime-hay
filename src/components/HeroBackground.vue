<template>
  <div
    :class="
      twMerge(
        `relative h-full bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/10 to-[#0f0f0f] ${className}`
      )
    "
    :style="{
      backgroundImage: `url(${url})`,
    }"
  />
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"
defineProps({
  url: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
    required: false,
  },
})
</script>

<style scoped></style>
