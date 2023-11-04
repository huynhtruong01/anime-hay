<template>
  <TopListContainer
    :animeList="animeList"
    :isLoading="isLoading"
    title="Top Manga"
    link="top-manga"
    urlHeroImage="/images/top-manga-hero.png"
    :elementRef="elementRef"
  >
    <div ref="elementRef"></div>
  </TopListContainer>
</template>

<script setup lang="ts">
useHead({
  title: "Top Manga",
})

const animeList: Ref<any[]> = ref([])
const page: Ref<number> = ref(0)
const totalPage: Ref<number> = ref(1)

const getAnimeList = async () => {
  if (totalPage.value <= page.value) {
    isLoading.value = false
    return
  }
  const { list, data }: any = await useListFetch("/top/manga", {
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
