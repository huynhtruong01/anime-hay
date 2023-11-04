<template>
    <AnimeListContainer title="Recommendations" :className="className" listStyle="3xl:grid-cols-5">
        <template #list>
            <div v-for="recommendAnime in newRecommendations" :key="recommendAnime.entry.mal_id">
                <AnimeImage :srcImage="recommendAnime.entry.images.webp.large_image_url"
                    :title="recommendAnime.entry.title" />
                <h3 class="mt-4 text-center font-semibold">
                    <NuxtLink :to="`/${path}/${recommendAnime.entry.mal_id}`" class="hover:text-red-700 hover:underline">
                        {{ recommendAnime.entry.title }}</NuxtLink>
                </h3>
            </div>
        </template>
    </AnimeListContainer>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import type { IRecommendAnime } from "../models"

const route = useRoute()
const path = route.path.split("/")[1]

const { recommendations } = defineProps({
    recommendations: {
        type: Array as PropType<IRecommendAnime[]>,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
})

const newRecommendations = computed(() => recommendations.slice(0, 10))
</script>
  
<style scoped></style>
  