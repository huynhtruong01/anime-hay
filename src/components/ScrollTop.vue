<template>
  <button
    :class="
      twMerge(
        'fixed bottom-7 xl:bottom-10 bg-[#242424] border border-red-700 rounded-full p-2 z-40 ease-in-out duration-300',
        showScrollTop ? 'right-7 xl:right-8 opacity-100' : '-right-10 opacity-0'
      )
    "
    @click="scrollTop"
  >
    <ChevronUpIcon class="w-6 h-6 text-red-700" />
  </button>
</template>

<script setup lang="ts">
import { ChevronUpIcon } from "@heroicons/vue/24/solid"
import { twMerge } from "tailwind-merge"
const showScrollTop: Ref<boolean> = ref(false)

const scrollScreen = () => {
  showScrollTop.value = window.scrollY > 250
}

const scrollTop = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener("scroll", scrollScreen)
})

onUnmounted(() => {
  window.removeEventListener("scroll", scrollScreen)
})
</script>

<style scoped></style>
