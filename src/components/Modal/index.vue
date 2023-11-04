<template>
  <div
    :class="
      twMerge(
        'fixed inset-0 flex justify-center items-center bg-black/80 z-40 ease-in-out duration-300',
        className,
        props.showModal
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge"

const props = defineProps({
  className: {
    type: String,
    required: false,
    default: "",
  },
  showModal: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped></style>
