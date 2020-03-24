<template>
  <div>
    <input type="text" :value="newTodo" @input="newTodo = $event.target.value" />
    <button @click="handleAddTodo">add</button>
    <ul>
      <li
        v-for="(item, index) in todos"
        :key="item.todo"
        class="todoItem"
        :class="item.isDone ? 'isDone' : ''"
        @click="handleClickTodo(index)"
      >
        {{ item.todo }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { ITodoItemState } from '@/store/types'

@Component
export default class VTodoList extends Vue {
  newTodo: string = ''

  // props
  @Prop({ default: [] })
  todos!: ITodoItemState[]

  // emits
  @Emit('clickTodo')
  handleClickTodo(index: number) {
    return index
  }

  @Emit('addTodo')
  handleAddTodo() {
    const txt = this.newTodo
    this.newTodo = ''
    return txt
  }
}
</script>

<style scoped>
.todoItem {
  cursor: pointer;
}
.isDone {
  text-decoration: line-through;
}
</style>
