<template>
    <div v-if="anime">
        <Container>
            <section class="grid grid-cols-1 xl:grid-cols-[255px_1fr] items-start gap-8">
                <div class="relative rounded-md overflow-hidden w-full max-w-[255px] mx-auto max-h-[400px]">
                    <img :src="anime.images.webp.large_image_url || anime.images.webp.image_url
                        " :alt="anime.title" class="rounded-md" />
                    <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 flex flex-col justify-end">
                        <div class="flex flex-col items-center w-[70%] mx-auto">
                            <button
                                class="bg-transparent gap-1 text-white border border-white font-medium rounded-md text-sm px-4 py-2 w-full mx-auto mb-3 hover:bg-red-700"
                                @click="handleShowModalVideo">
                                Trailer
                            </button>
                            <button
                                class="bg-red-600 gap-1.5 text-white font-medium rounded-md text-sm px-4 py-2 w-full mx-auto mb-3 hover:bg-red-700"
                                @click="handleShowModalVideo">
                                <PlayIcon class="w-4 h-4" /> Watch now
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between gap-6">
                        <h1 class="text-2xl 2xl:text-3xl font-bold w-[75%]">
                            {{ anime.title || anime.name }}
                        </h1>
                        <div class="inline-flex items-center gap-2 text-base xl:text-lg font-medium" v-if="anime.score">
                            {{ anime.score }}
                            <StarIcon class="w-5 h-5 xl:w-6 xl:h-6 text-yellow-500" />
                        </div>
                    </div>
                    <div class="mt-4 flex items-center flex-wrap gap-3" v-if="anime.genres?.length">
                        <span v-if="anime.year || anime.published?.from">{{ anime.year || getYear(anime.published?.from ||
                            new Date()) }}
                            {{ "\u2022" }}</span>

                        <AnimeGenres :genres="anime.genres" />
                        {{ "\u2022" }}
                        <span class="text-sm">{{ anime.status }}</span>
                        {{ "\u2022" }}
                        <span class="inline-block text-white bg-red-600 px-2.5 py-1 rounded-full text-sm font-medium"
                            v-if="anime.duration || anime.chapters">{{ anime.duration || `${anime.chapters || "~"} Chapters`
                            }}</span>
                    </div>
                    <article>
                        <p :class="twJoin('mt-6 leading-relaxed font-extralight', !isReadMore && 'line-clamp-4')
                            " v-html="anime.synopsis || anime.about"></p>
                        <span class="text-red-500 underline text-sm cursor-pointer" @click="toggleReadMore">{{
                            textBtnDescription }}</span>
                    </article>
                    <AnimeCharacters :characters="characterList" className="mt-6" v-if="characterList?.length" />
                </div>
            </section>
            <AnimeVideos :videos="videos" v-if="videos && videos.episodes?.length" className="mt-10 mb-16" />
            <AnimeManga v-if="mangaList?.length" :mangaList="mangaList" className="mt-20 mb-10" />
            <AnimeRecommendations :recommendations="recommendList" className="mt-20 mb-10" v-if="recommendList?.length" />
        </Container>
        <ModalVideo :showModal="showModal" :linkVideo="anime?.trailer?.embed_url || ''" @close-modal="showModal = false" />
    </div>
</template>
  
<script setup lang="ts">
import type {
    IAnime,
    ICharacter,
    ICharacterManga,
    IMediaType,
    IRecommendAnime,
    IVideos,
} from "../models"
import { StarIcon } from "@heroicons/vue/24/solid"
import { PlayIcon } from "@heroicons/vue/24/solid"
import { getYear } from "../../utils"
import { MediaType } from "../../enums"
import { twJoin } from "tailwind-merge"

const { id, titleGenre } = defineProps({
    id: {
        type: Number,
        required: true,
    },
    titleGenre: {
        type: String as PropType<IMediaType>,
        required: true,
    },
})

const typeAnime = ref(titleGenre.toLowerCase())
const videos: Ref<IVideos | null> = ref(null)
const mangaList: Ref<ICharacterManga[]> = ref([])
const characterList: Ref<ICharacter[]> = ref([])
const recommendList: Ref<IRecommendAnime[]> = ref([])
const showModal: Ref<boolean> = ref(false)
const isReadMore: Ref<boolean> = ref(false)

const textBtnDescription = computed(() =>
    isReadMore.value ? "Less more" : "Read more"
)

const toggleReadMore = () => {
    isReadMore.value = !isReadMore.value
}

const { data: anime } = await useDetailById<IAnime>(
    `https://api.jikan.moe/v4/${typeAnime.value}/${id}/full`
)

const handleShowModalVideo = () => {
    showModal.value = true
}

if (titleGenre !== MediaType.CHARACTERS) {
    const { data: characters } = await useListById<ICharacter[]>(
        `https://api.jikan.moe/v4/${typeAnime.value}/${id}/characters`,
        []
    )

    const { data: recommendations } = await useListById<IRecommendAnime[]>(
        `https://api.jikan.moe/v4/${typeAnime.value}/${id}/recommendations`,
        []
    )
    characterList.value = characters.value
    recommendList.value = recommendations.value
}

if (titleGenre === MediaType.ANIME) {
    const { data: videoList } = await useListById<IVideos | null>(
        `https://api.jikan.moe/v4/${typeAnime.value}/${id}/videos`,
        null
    )
    videos.value = videoList.value
}

if (titleGenre === MediaType.CHARACTERS) {
    const { data: manga } = await useListById<ICharacterManga[]>(
        `https://api.jikan.moe/v4/${typeAnime.value}/${id}/manga`,
        []
    )
    mangaList.value = manga.value
}

if (anime.value) {
    const animeValue = anime.value
    const title = anime.value.title || anime.value.name
    const description = anime.value.background || anime.value.about
    useSeoMeta({
        title: `${title} | ${titleGenre}`,
        ogTitle: title,
        description,
        ogDescription: description,
        ogImage: animeValue.images.webp.large_image_url,
    })
}
</script>
  
<style scoped></style>
  