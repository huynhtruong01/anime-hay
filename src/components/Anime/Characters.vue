<template>
    <div :class="twMerge(className)">
        <h3 class="mb-3 font-semibold text-xl">Characters</h3>
        <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6">
            <div v-for="character in newCharacters" :key="character.character.mal_id">
                <AnimeImage :srcImage="character.character.images.webp.image_url" :title="character.character.name"
                    className="" />
                <span class="block mt-2 text-center text-sm font-medium">{{
                    character.character.name
                }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import type { ICharacter } from "../models"

const { characters } = defineProps({
    characters: {
        type: Array as PropType<ICharacter[]>,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
})

const newCharacters = computed(() => characters.slice(0, 10))
</script>
  
<style scoped></style>
  