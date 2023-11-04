<template>
    <div :class="twMerge('inline-flex gap-3 items-center flex-wrap', className)">
        <div v-for="genre of genres" :key="genre.mal_id">
            <span class="inline-block rounded-full text-sm px-2.5 py-1 border border-slate-100">{{ genre.name }}</span>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import type { IGenre } from "../models"
import { twMerge } from "tailwind-merge"

defineProps({
    genres: {
        type: Array as PropType<IGenre[]>,
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
  