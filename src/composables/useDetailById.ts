import type { IAnimeRespond } from "../models"

export const useDetailById = async <T>(url: string) => {
  const data: Ref<T | null> = ref(null)
  const res = await useFetch<IAnimeRespond<T>>(url)
  data.value = res.data.value?.data as T

  return { data, pending: res.pending, refresh: res.refresh }
}
