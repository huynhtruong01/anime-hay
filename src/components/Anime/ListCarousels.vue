<template>
    <div :class="className" v-if="animeList.length">
        <Container>
            <div class="flex items-center justify-between mb-6">
                <h3 class="border-l-4 border-red-600 pl-4 text-xl font-bold">
                    {{ title }}
                </h3>
                <NuxtLink :to="link" class="flex items-center font-medium underline gap-2 text-red-600">See all
                    <ArrowLongRightIcon class="w-5 text-white" />
                </NuxtLink>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
                <AnimeCard v-for="anime of animeList" :key="anime.mal_id" :anime="anime" :link="link" />
            </div>
        </Container>
    </div>
</template>
  
<script setup lang="ts">
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid"
import type { IAnime } from "../models"

const { title, url, link } = defineProps({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: false,
    },
})

const animeList: Ref<IAnime[]> = ref([])
const { data } = await useListFetch<IAnime>(url, {
    page: 0,
    limit: 5,
})

animeList.value = data.value.data
</script>
  
<style scoped></style>
  