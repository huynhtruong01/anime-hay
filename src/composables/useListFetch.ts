import type { IParams, IRespond } from "../models"

export const useListFetch = async <T>(
  path: string,
  params?: Partial<IParams>
) => {
  const { data, pending, error } = await useFetch<IRespond<T>>(
    `https://api.jikan.moe/v4${path}`,
    {
      query: {
        page: (params?.page || 0) + 1,
        limit: params?.limit || 100,
      },
    }
  )

  return { data, pending, error }
}
