<template>
  <TopListContainer
    :animeList="animeList"
    :isLoading="isLoading"
    title="Top Anime"
    link="top-anime"
    urlHeroImage="/images/top-anime-hero.png"
    :elementRef="elementRef"
  >
    <div ref="elementRef"></div>
  </TopListContainer>
</template>

<script setup lang="ts">
useHead({
  title: "Top Anime",
})

const animeList: Ref<any[]> = ref([])
const page: Ref<number> = ref(0)
const totalPage: Ref<number> = ref(1)

const getAnimeList = async () => {
  if (totalPage.value <= page.value) {
    isLoading.value = false
    return
  }
  const { list, data } = await useListFetch("/top/anime", {
    page: page.value,
    limit: 15,
  })
  totalPage.value = Math.ceil((data.value?.pagination.items.total || 0) / 25)
  page.value += 1
  animeList.value.push(...list.value)
}

const { isLoading, elementRef } = useObserver(getAnimeList)
</script>

<style scoped></style>
