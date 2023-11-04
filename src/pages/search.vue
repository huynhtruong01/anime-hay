<template>
  <section class="mt-[100px] mb-20">
    <Container>
      <h1 class="text-2xl xl:text-3xl font-bold mb-6">
        Search result for
        <span class="text-red-700">"{{ searchWords }}"</span>
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6"
      >
        <AnimeCard
          v-for="anime in animeList"
          :anime="anime"
          :key="anime.mal_id"
          link="top-anime"
        />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import type { IAnime, IRespond } from "../models"

const animeList: Ref<IAnime[]> = ref([])
const query = useRoute().query
const searchWords = ref(query.q)

onMounted(async () => {
  const { data } = await useFetch<IRespond<IAnime>>(
    `https://api.jikan.moe/v4/anime?q=${searchWords.value}&limit=20`
  )
  animeList.value = data.value?.data || []
})

useSeoMeta({
  title: `Search for result: ${searchWords.value}`,
})
</script>

<style scoped></style>
