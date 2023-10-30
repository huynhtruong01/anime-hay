<template>
    <div :class="twMerge('max-w-[1120px] m-auto px-4', className)">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
const { className } = defineProps<{
    className?: string
}>()
</script>

<style scoped></style>