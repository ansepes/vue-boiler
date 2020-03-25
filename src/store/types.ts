export interface RootState {
  CounterModule: ICounterState
  TodoListModule: ITodoListState
}

// TodoList
export interface ITodoListState {
  todos: ITodoItemState[]
}

export interface ITodoItemState {
  id: string
  todo: string
  isDone: boolean
}

// Counter
export interface ICounterState {
  incrementCounter: number
  decrementCounter: number
}
