<template>
  <TopListContainer :animeList="animeList" :isLoading="isLoading" title="Top Characters" link="top-characters"
    urlHeroImage="/images/top-characters-hero.png" :elementRef="elementRef">
    <div ref="elementRef"></div>
  </TopListContainer>
</template>

<script setup lang="ts">
import type { IAnime } from '~/src/models';

useHead({
  title: "Top Characters",
})

const animeList: Ref<IAnime[]> = ref([])
const page: Ref<number> = ref(0)
const totalPage: Ref<number> = ref(1)

const getAnimeList = async () => {
  if (totalPage.value <= page.value) {
    isLoading.value = false
    return
  }
  const { data } = await useListFetch<IAnime>("/top/characters", {
    page: page.value,
    limit: 15,
  })
  totalPage.value = Math.ceil((data.value?.pagination.items.total || 0) / 25)
  page.value += 1
  animeList.value.push(...data.value.data)
}

const { isLoading, elementRef } = useObserver(getAnimeList)
</script>

<style scoped></style>
