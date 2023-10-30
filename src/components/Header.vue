<template>
    <header class="fixed top-0 left-0 w-full bg-slate-900/30 backdrop-blur z-40">
        <Container className="py-4">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="text-2xl font-bold !text-white">
                    Animes<span class="text-red-600">.</span>
                </NuxtLink>
                <nav>
                    <ul class="flex items-center gap-4">
                        <li v-for="navLink in navLinks" :key="navLink">
                            <NuxtLink :to="navLink.link" class="px-2 text-white text-sm font-medium">{{ navLink.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
</template>

<script setup lang="ts">
const navLinks: Ref<INavLink[]> = ref([
    {
        name: 'Top Anime',
        link: '/top-anime'
    },
    {
        name: 'Top Manga',
        link: '/top-manga'
    },
    {
        name: 'Top Characters',
        link: '/top-characters'
    }
])
</script>

<style scoped></style>