<template>
    <section :class="twMerge(className)">
        <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
        <div :class="twMerge(
            'grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6',
            listStyle
        )
            ">
            <slot name="list" />
        </div>
        <slot name="modal" />
    </section>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"

defineProps({
    title: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
    listStyle: {
        type: String,
        required: false,
        default: "",
    },
})
</script>
  
<style scoped></style>
  