<template>
  <div
    :class="
      twMerge(
        'fixed w-full h-full z-50 bg-[#0f0f0f] block xl:hidden ease-in-out duration-300',
        showNav ? 'top-0 pointer-events-auto' : '-top-full pointer-events-none'
      )
    "
  >
    <div class="absolute right-3 top-3 cursor-pointer" @click="handleCloseNav">
      <XMarkIcon class="w-8 h-8" />
    </div>
    <nav class="h-full">
      <ul class="flex justify-center items-center h-full flex-col gap-4">
        <li v-for="navLink in navLinks" :key="navLink.link">
          <NuxtLink
            :to="navLink.link"
            class="inline-block py-3 text-xl text-white font-medium"
            @click="handleCloseNav"
            >{{ navLink.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid"
import type { INavLink } from "../models"
import { twMerge } from "tailwind-merge"

defineProps({
  showNav: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits(["closeNav"])

const navLinks: Ref<INavLink[]> = ref([
  {
    name: "Top Anime",
    link: "/top-anime",
  },
  {
    name: "Top Manga",
    link: "/top-manga",
  },
  {
    name: "Top Characters",
    link: "/top-characters",
  },
])

const handleCloseNav = () => {
  emits("closeNav")
}
</script>

<style scoped></style>
