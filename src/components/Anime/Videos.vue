<template>
    <AnimeListContainer title="Episodes" listStyle="grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4" :className="className">
        <template #list>
            <div v-for="video in newVideos" :key="video.mal_id" class="cursor-pointer">
                <div class="relative aspect-video rounded-md overflow-hidden group">
                    <img :src="video.images.jpg.image_url" :alt="video.title" />
                    <div class="absolute inset-0 flex justify-center items-center"
                        @click="setLinkVideo('https://www.youtube.com/embed/2oeRluCuAis')">
                        <div
                            class="absolute top-0 left-0 bg-black/60 opacity-50 group-hover:opacity-100 w-full h-full ease-in-out duration-300">
                        </div>
                        <button
                            class="relative rounded-full bg-red-700 border border-red-700 p-3 hover:bg-transparent z-30">
                            <PlayIcon class="w-6 h-6 text-white ease-in-out duration-200" />
                        </button>
                    </div>
                </div>
                <article class="mt-3">
                    <h3 class="text-lg font-semibold hover:text-red-700 hover:underline cursor-pointer">
                        {{ video.episode }}
                    </h3>
                    <p class="text-sm line-clamp-2 mt-1">{{ video.title }}</p>
                </article>
            </div>
        </template>
        <template #modal>
            <ModalVideo :showModal="showModalVideo" :linkVideo="linkVideo" @close-modal="handleCloseModalVideo" />
        </template>
    </AnimeListContainer>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"
import type { IVideos } from "../models"
import { PlayIcon } from "@heroicons/vue/24/solid"

const showModalVideo: Ref<boolean> = ref(false)
const linkVideo = ref("")

const setLinkVideo = (link: string) => {
    linkVideo.value = link
    showModalVideo.value = true
}

const handleCloseModalVideo = () => {
    linkVideo.value = ""
    showModalVideo.value = false
}

const { videos } = defineProps({
    videos: {
        type: Object as PropType<IVideos>,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
})

const newVideos = computed(() => videos.episodes.slice(0, 12))
</script>
  
<style scoped></style>
  