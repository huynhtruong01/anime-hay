<template>
    <div :class="twMerge('rounded-md w-full overflow-hidden', className)">
        <img :src="srcImage" :alt="title" class="group-hover:scale-105 ease-in-out duration-300" />
    </div>
</template>
  
<script setup lang="ts">
import { twMerge } from "tailwind-merge"

defineProps({
    srcImage: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: false,
        default: "",
    },
    title: {
        type: String,
        required: false,
        default: "",
    },
})
</script>
  
<style scoped></style>
  