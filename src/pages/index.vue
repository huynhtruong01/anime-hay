<template>
  <section class="pb-10 mb-6">
    <div class="h-[85vh]">
      <HeroBackground url="/images/home-hero.jpeg" />
      <Container
        className="relative -top-1/2 -translate-y-1/2 flex flex-col items-center text-center font-semibold z-30"
      >
        <h1 class="font-[800] text-xl lg:text-2xl xl:text-3xl">
          Stream more than <span class="text-red-600">10,000</span> Animes
          <br />for free without any Ads
        </h1>
        <form
          class="relative w-full xl:w-[70%] h-11 m-auto mt-6 rounded-full overflow-hidden"
          @submit.prevent="handleSearch"
        >
          <input
            type="text"
            class="absolute top-0 left-0 w-full h-full text-slate-800 font-normal text-sm lg:text-base rounded-full pl-4 lg:placeholder:text-base placeholder:font-normal placeholder:text-slate-500"
            placeholder="Search name anime..."
            v-model="search"
          />
          <button
            type="submit"
            class="absolute right-0 top-0 px-5 h-full bg-red-600 hover:bg-red-700"
          >
            <MagnifyingGlassIcon class="w-5 h-5 xl:w-6 xl:h-6 text-white" />
          </button>
        </form>
      </Container>
    </div>
    <div class="relative -mt-16 xl:-mt-28 z-30">
      <AnimeListCarousels
        title="Top Anime"
        url="/top/anime"
        link="/top-anime"
      />
      <AnimeListCarousels
        title="Top Manga"
        url="/top/manga"
        link="/top-manga"
        className="mt-16 mb-10"
      />
      <AnimeListCarousels
        title="Top Characters"
        url="/top/characters"
        link="/top-characters"
        className="mt-16 mb-10"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid"

const router = useRouter()
const search: Ref<string> = ref("")

const handleSearch = () => {
  router.push(`/search?q=${search.value}`)
}

useHead({
  title: "Home",
})
</script>

<style scoped></style>
