<template>
  <div>
    <VTodoList
      :todos="getTodos"
      @clickTodo="invertIsDone"
      @addTodo="addTodo"
      @delTodo="delTodo"
      @clearDoneTodo="clearDoneTodo"
    ></VTodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { TodoListModule } from '@/store/modules/todoListStore'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get getTodos() {
    return TodoListModule.getTodos
  }

  invertIsDone(index: number) {
    TodoListModule.invertIsDone(index)
  }

  addTodo(value: string) {
    if (!value) return

    TodoListModule.addTodo(value)
  }

  delTodo(index: number) {
    TodoListModule.delTodo(index)
  }

  clearDoneTodo() {
    TodoListModule.clearDoneTodo()
  }
}
</script>
