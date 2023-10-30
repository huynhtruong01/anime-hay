<template>
    <section class="pb-16" ref="el">
        <div class="h-[85vh]">
            <HeroBackground url="/images/top-characters-hero.png" />
        </div>
        <Container class="-mt-32">
            <h2
                class="text-3xl font-bold relative py-4 text-center before:absolute before:content-[''] before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-14 before:m-auto before:h-1 before:rounded-md before:bg-red-600">
                Top Characters</h2>
            <div class="mt-20 grid grid-cols-5 gap-6">
                <div v-for="anime in animes" :key="anime.mal_id">
                    <AnimeCard :anime="anime" link="top-characters" />
                </div>
            </div>
            <div ref="elementRef"></div>
            <LoadingSpinner :isLoading="isLoading" />
        </Container>
    </section>
</template>

<script setup lang="ts">

useHead({
    title: 'Top Characters'
})

const animes: Ref<any[]> = ref([])
const page: Ref<number> = ref(0)
const totalPage: Ref<number> = ref(1)

const getAnimes = async () => {
    if (totalPage.value <= page.value) {
        isLoading.value = false
        return
    }
    const { data }: any = await useFetch(`https://api.jikan.moe/v4/top/characters?page=${page.value + 1}`)
    totalPage.value = Math.ceil(data?._rawValue?.pagination.items.total / 25)
    page.value += 1
    animes.value.push(...data?._rawValue?.data)
}

const { isLoading, elementRef } = useObserver(getAnimes)
</script>

<style scoped></style>