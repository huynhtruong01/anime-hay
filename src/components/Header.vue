<template>
  <header class="fixed top-0 left-0 w-full bg-slate-900/30 backdrop-blur z-40">
    <Container className="py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-xl xl:text-2xl font-bold !text-white">
          Wibu<span class="text-red-600">{{ "\u2022" }}</span>
        </NuxtLink>
        <nav>
          <ul class="items-center gap-4 hidden xl:flex">
            <li v-for="navLink in navLinks" :key="navLink.link">
              <NuxtLink
                :to="navLink.link"
                class="px-2 text-white text-sm font-medium"
                >{{ navLink.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div
          class="block xl:hidden cursor-pointer"
          @click="showNavMobile = true"
        >
          <Bars3Icon class="w-6 h-6" />
        </div>
      </div>
    </Container>
  </header>
  <HeaderNavMobile
    :showNav="showNavMobile"
    @close-nav="showNavMobile = false"
  />
</template>

<script setup lang="ts">
import type { INavLink } from "../models"
import { Bars3Icon } from "@heroicons/vue/24/solid"

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

const showNavMobile: Ref<boolean> = ref(false)
</script>

<style scoped></style>
