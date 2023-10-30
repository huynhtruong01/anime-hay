<template>
    <div :class="className">
        <Container>
            <div class="flex items-center justify-between mb-6">
                <h3 class="border-l-4 border-red-600 pl-4 text-xl font-bold">{{ title }}</h3>
                <NuxtLink :to="link" class="flex items-center font-medium underline gap-2 text-red-600">See all
                    <ArrowLongRightIcon class="w-5 text-white" />
                </NuxtLink>
            </div>
            <div v-show="animes" class="grid grid-cols-5 gap-6">
                <div v-for="anime of animes.slice(0, 5)" :key="anime.mal_id">
                    <AnimeCard :anime="anime" :link="link" />
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
const { title, url, link } = defineProps<{
    title: string,
    url: string,
    link: string,
    className?: string
}>()
const animes = ref([])

const { data } = await useFetch<any[]>(`https://api.jikan.moe/v4${url}`)
animes.value = data?._rawValue?.data
</script>

<style scoped></style>