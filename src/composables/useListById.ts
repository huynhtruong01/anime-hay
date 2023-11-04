import type { UnwrapRef } from "vue"
import type { IAnimesRespond } from "../models"

export const useListById = async <T>(url: string, initValue: T) => {
  const data: Ref<UnwrapRef<T>> = ref(initValue)
  const res = await useFetch<IAnimesRespond<T>>(url)
  data.value = res.data.value?.data as UnwrapRef<T>

  return { data, pending: res.pending, refresh: res.refresh }
}
