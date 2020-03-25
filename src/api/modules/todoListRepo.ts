import { repository } from '@/api'
import { IApiResponse, repoUtil } from '@/api/repoUtil'
import { ITodoItemState } from '@/store/types'

const resouce = '/todoList'
export const TodoListRepo = {
  getAll: async (): Promise<IApiResponse> => {
    const response = await repository.get(`${resouce}`)

    return repoUtil.toResult(response)
  },
  getBy: async (id: string): Promise<IApiResponse> => {
    const response = await repository.get(`${resouce}/${id}`)

    return repoUtil.toResult(response)
  },
  post: async (payload: ITodoItemState): Promise<IApiResponse> => {
    const response = await repository.post(`${resouce}`, payload)

    return repoUtil.toResult(response)
  },
  put: async (payload: ITodoItemState): Promise<IApiResponse> => {
    const response = await repository.put(`${resouce}/${payload.id}`, payload)

    return repoUtil.toResult(response)
  },
  err: async (): Promise<IApiResponse> => {
    const response = await repository.get(`/dummy`)

    return repoUtil.toResult(response)
  },
}
