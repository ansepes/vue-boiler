<template>
  <div>
    <VTodoList :todos="todoList" @clickTodo="invertIsDone" @addTodo="addTodo"></VTodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { todoListModule } from '@/store/modules/todoList'

const VTodoList = () => import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get todoList() {
    return todoListModule.todos
  }

  invertIsDone(index: number) {
    todoListModule.invertIsDone(index)
  }

  addTodo(value: string) {
    todoListModule.addTodo(value)
  }
}
</script>
