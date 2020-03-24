<template>
  <div>
    <VTodoList :todos="todoList"></VTodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { todoListModule } from '@/store/modules/todoList'

const VTodoList = () =>
  import(/* webpackChunkName: "vTodoList" */ '@/components/VTodoList.vue')

@Component({
  components: {
    VTodoList,
  },
})
export default class TodoList extends Vue {
  get todoList() {
    return todoListModule.todoList
  }
}
</script>
