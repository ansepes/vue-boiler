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
import { todoListModule } from '@/store/modules/todoListStore'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get getTodos() {
    return todoListModule.todos
  }

  invertIsDone(index: number) {
    todoListModule.invertIsDone(index)
  }

  addTodo(value: string) {
    if (!value) return

    todoListModule.addTodo(value)
  }

  delTodo(index: number) {
    todoListModule.delTodo(index)
  }

  clearDoneTodo() {
    todoListModule.clearDoneTodo()
  }
}
</script>
