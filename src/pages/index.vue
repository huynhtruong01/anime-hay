<template>
    <section>
        <div class="h-[85vh]">
            <HeroBackground url="/images/home-hero.jpeg" />
            <Container className="relative -top-1/2 -translate-y-1/2 text-center text-3xl font-semibold z-30">
                <div class="">Stream more than <span class="text-red-600">10,000</span> Animes <br>for free without any Ads
                </div>
            </Container>
        </div>
        <div class="relative -mt-32 z-30">
            <AnimeListCarousels title="Top Anime" url="/top/anime" link="/top-anime" />
            <AnimeListCarousels title="Top Manga" url="/top/manga" link="/top-manga" className="mt-16 mb-10" />
            <AnimeListCarousels title="Top Characters" url="/top/characters" link="/top-characters"
                className="mt-16 mb-10" />
        </div>
    </section>
</template>

<script setup lang="ts">
useHead({
    title: 'Home'
})
</script>

<style scoped></style>