// import { shallowMount } from '@vue/test-utils'
import { TodoListRepo } from '@/api/modules/todoListRepo'

describe('todoListRepo.ts', () => {
  it('get', async () => {
    const response = await TodoListRepo.getAll()
    // console.log(response)

    expect(response.status).toEqual(200)
  })

  it('getBy', async () => {
    const response = await TodoListRepo.getBy('1')
    // console.log(response)

    expect(response.status).toEqual(200)
  })

  it('post', async () => {
    const payload = {
      id: '10',
      todo: 'test',
      isDone: false,
    }
    const response = await TodoListRepo.post(payload)
    // console.log(response)

    expect(response.status).toEqual(201)
  })

  it('put', async () => {
    const payload = {
      id: '1',
      todo: 'test',
      isDone: false,
    }
    const response = await TodoListRepo.put(payload)
    // console.log(response)

    expect(response.status).toEqual(200)
  })

  it('err', async () => {
    const response = await TodoListRepo.err()
    // console.log(response)

    expect(response.status).toEqual(404)
  })
})
