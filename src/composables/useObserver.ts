export const useObserver = (callback: any) => {
  const observer: Ref<any> = ref(null)
  const isLoading: Ref<boolean> = ref(false)
  const elementRef = ref(null)

  onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry && entry.isIntersecting) {
          isLoading.value = true
          callback()
        } else {
          isLoading.value = false
        }
      })
    })
    observer.value.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer.value.disconnect()
  })

  return { isLoading, observer, elementRef }
}
