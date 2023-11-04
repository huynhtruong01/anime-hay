<template>
    <div :class="twMerge(className)">
        <NuxtLink :to="`${link}/${anime.mal_id}`" class="block">
            <AnimeImage :srcImage="anime.images.webp.large_image_url || anime.images.webp.image_url
                " :title="anime.title"
                class="w-full h-[403px] sm:h-[237px] md:h-[270px] xl:h-[320px] 3xl:h-[276px] border-2 border-white group" />
            <h4 class="line-clamp-1 mt-2.5 text-center text-sm hover:text-red-700 hover:underline">
                {{ anime.title || anime.name }}
            </h4>
        </NuxtLink>
    </div>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import type { IAnime } from "../models"

defineProps({
    anime: {
        type: Object as PropType<IAnime>,
        required: true,
    },
    link: {
        type: String,
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
  