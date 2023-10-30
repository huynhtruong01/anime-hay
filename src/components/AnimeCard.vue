<template>
    <NuxtLink :to="`${link}/${anime.mal_id}`">
        <div>
            <img :src="anime.images.webp.image_url" :alt="anime.title"
                class="rounded-md object-cover border-2 border-white" />
        </div>
        <h4 class="line-clamp-1 mt-2.5 text-center text-sm">{{ anime.title || anime.name }}</h4>
    </NuxtLink>
</template>

<script setup lang="ts">
const { anime, link } = defineProps<{
    anime: any,
    link: string
}>()
</script>

<style scoped></style>