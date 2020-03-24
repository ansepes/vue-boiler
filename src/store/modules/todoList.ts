import {
  //   Mutation,
  //   MutationAction,
  //   Action,
  VuexModule,
  getModule,
  Module,
  Mutation,
  Action,
} from 'vuex-module-decorators'
import store from '@/store'

import { ITodoItemState } from '@/store/types'

export interface ITodoListState {
  todos: ITodoItemState[]
}

@Module({ dynamic: true, store, name: 'todoList', namespaced: true })
class TodoList extends VuexModule implements ITodoListState {
  // state
  todos: ITodoItemState[] = [
    { todo: 'aaa', isDone: false },
    { todo: 'bbb', isDone: false },
    { todo: 'ccc', isDone: false },
  ]

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
  //   @Mutation // counter
  //   public SET_INCREMENT_COUNTER(num: number) {
  //     this.incrementCounter = num
  //   }

  //   @Mutation
  //   public SET_DECREMENT_COUNTER(num: number) {
  //     this.decrementCounter = num
  //   }

  // action
  @Action
  public invertIsDone(index: number) {
    this.INVERT_IS_DONE(index)
  }

  @Action
  public addTodo(newTodo: string) {
    this.ADD_TODO(newTodo)
    // console.log(newTodo)
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

export const todoListModule = getModule(TodoList)
