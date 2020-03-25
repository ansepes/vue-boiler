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
import { todoListStore } from '@/store/modules/todoListStore'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get getTodos() {
    return todoListStore.todos
  }

  invertIsDone(index: number) {
    todoListStore.invertIsDone(index)
  }

  addTodo(value: string) {
    if (!value) return

    todoListStore.addTodo(value)
  }

  delTodo(index: number) {
    todoListStore.delTodo(index)
  }

  clearDoneTodo() {
    todoListStore.clearDoneTodo()
  }
}
</script>
