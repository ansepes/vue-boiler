import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store'

import { ITodoItemState, ITodoListState } from '@/store/types'

@Module({ dynamic: true, store, name: 'todoList', namespaced: true })
class TodoListStore extends VuexModule implements ITodoListState {
  // state
  todos: ITodoItemState[] = [
    { todo: 'aaa', isDone: false },
    { todo: 'bbb', isDone: false },
    { todo: 'ccc', isDone: false },
  ]

  public get getTodos() {
    return this.todos
  }

  // mutation
  @Mutation
  private INVERT_IS_DONE(index: number) {
    this.todos[index].isDone = !this.todos[index].isDone
  }

  @Mutation
  private ADD_TODO(newTodo: string) {
    this.todos.push({
      todo: newTodo,
      isDone: false,
    })
  }

  @Mutation
  private DEL_TODO(index: number) {
    this.todos.splice(index, 1)
  }

  @Mutation
  private CLEAR_DONE_TODO() {
    this.todos = this.todos.filter(todo => {
      return !todo.isDone
    })
  }

  // action
  @Action
  public invertIsDone(index: number) {
    this.INVERT_IS_DONE(index)
  }

  @Action
  public addTodo(newTodo: string) {
    this.ADD_TODO(newTodo)
  }

  @Action
  public delTodo(index: number) {
    this.DEL_TODO(index)
  }

  @Action
  public clearDoneTodo() {
    this.CLEAR_DONE_TODO()
  }
}

export const TodoListModule = getModule(TodoListStore)
