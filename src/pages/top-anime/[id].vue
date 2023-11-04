<template>
  <section class="pt-[100px] xl:pt-[200px] pb-28">
    <AnimeDetail :id="+id" :titleGenre="MediaType.ANIME" />
  </section>
</template>

<script setup lang="ts">
import { MediaType } from "../../enums"

const { id } = useRoute().params
</script>

<style scoped></style>
