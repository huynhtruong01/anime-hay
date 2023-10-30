<template>
    <section :class="twMerge('pb-16', className)">
        <div class="h-[85vh]">
            <HeroBackground :url="linkHeroImg" />
        </div>
        <Container class="-mt-32">
            <h2
                class="text-3xl font-bold relative py-4 text-center before:absolute before:content-[''] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-14 before:m-auto before:h-1 before:rounded-md before:bg-red-600">
                {{ title }}</h2>
            <div class="mt-20 grid grid-cols-5 gap-6">
                <div v-for="anime in animes" :key="anime.mal_id">
                    <AnimeCard :anime="anime" :link="link" />
                </div>
            </div>
            <div ref="ref"></div>
            <LoadingSpinner :isLoading="isLoading" />
        </Container>
    </section>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

const { animes, isLoading, ref, linkHeroImg, title, link, className } = defineProps<{
    animes: any[],
    isLoading: boolean,
    linkHeroImg: string,
    title: string,
    link: string,
    ref: HTMLElement | null,
    className?: string
}>()
</script>

<style scoped></style>