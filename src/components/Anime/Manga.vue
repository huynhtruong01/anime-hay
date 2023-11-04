<template>
    <AnimeListContainer title="Manga" :className="className">
        <template #list>
            <div v-for="manga in newMangaList" :key="manga.manga.mal_id">
                <AnimeImage :srcImage="manga.manga.images.webp.large_image_url" :title="manga.manga.title" />
                <h3 class="mt-2 text-center text-sm xl:text-base">
                    {{ manga.manga.title }}
                </h3>
            </div>
        </template>
    </AnimeListContainer>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import type { ICharacterManga } from "../models"

const { mangaList } = defineProps({
    mangaList: {
        type: Array as PropType<ICharacterManga[]>,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
})

const newMangaList = computed(() => mangaList.slice(0, 8))
</script>
  
<style scoped></style>
  