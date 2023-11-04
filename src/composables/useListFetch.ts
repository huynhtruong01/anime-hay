import type { IParams, IRespond } from "../models"

export const useListFetch = async (path: string, params?: Partial<IParams>) => {
  const list: Ref<any[]> = ref([])

  const { data, pending, error } = await useFetch<IRespond<any>>(
    `https://api.jikan.moe/v4${path}`,
    {
      query: {
        page: (params?.page || 0) + 1,
        limit: params?.limit || 100,
      },
    }
  )
  list.value = data.value?.data || []

  return { list, data, pending, error }
}
