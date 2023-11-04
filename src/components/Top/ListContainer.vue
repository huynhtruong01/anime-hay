<template>
  <section :class="twMerge('pb-16', className)">
    <div class="h-[85vh]">
      <HeroBackground :url="urlHeroImage" />
    </div>
    <Container class="relative -mt-64 min-h-[40vh] z-30">
      <h2
        class="text-3xl font-bold relative py-4 text-center before:absolute before:content-[''] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-14 before:m-auto before:h-1 before:rounded-md before:bg-red-600">
        {{ title }}
      </h2>
      <div class="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
        <AnimeCard v-for="anime in animeList" :anime="anime" :link="link" :key="anime.mal_id" />
      </div>
      <slot />
      <LoadingSpinner :isLoading="isLoading" />
    </Container>
  </section>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

defineProps({
  animeList: {
    type: Array as PropType<any[]>,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  urlHeroImage: {
    type: String,
    required: true,
  },
  elementRef: {
    type: null,
    required: true,
  },
  className: {
    type: String,
    required: false,
    default: "",
  },
})
</script>

<style scoped></style>
