<template>
  <Modal :showModal="props.showModal">
    <div class="w-full">
      <div
        class="absolute right-6 top-6 cursor-pointer"
        @click="handleCloseModal"
      >
        <XMarkIcon
          class="w-7 h-7 hover:text-red-700 ease-in-out duration-300"
        />
      </div>
      <div
        class="aspect-video w-full px-4 2xl:w-[700px] mx-auto rounded-md overflow-hidden"
      >
        <iframe
          width="100%"
          height="100%"
          :src="link"
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded-md overflow-hidden"
          ref="videoRef"
        ></iframe>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/solid"

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
  linkVideo: {
    type: String,
    required: true,
  },
})

const link: Ref<string> = ref("")

const emits = defineEmits(["closeModal"])
const videoRef: Ref<any> = ref(null)

watch([props], () => {
  link.value = props.showModal ? props.linkVideo : ""
})

const handleCloseModal = () => {
  emits("closeModal")
}
</script>

<style scoped></style>
