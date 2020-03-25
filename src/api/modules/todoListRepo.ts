import repository from '@/api'
import { ITodoItemState } from '@/store/types'

const resouce = '/todoList'
export const TodoListRepo = {
  getAll: () => {
    return repository.get(`${resouce}`)
  },
  getBy: (id: string) => {
    return repository.get(`${resouce}/${id}`)
  },
  post: (payload: ITodoItemState) => {
    return repository.post(`${resouce}`, payload)
  },
  put: (payload: ITodoItemState) => {
    return repository.put(`${resouce}/${payload.id}`, payload)
  },
  err: () => {
    return repository.get(`/dummy`)
  },
}
