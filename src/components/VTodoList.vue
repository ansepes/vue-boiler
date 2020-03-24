<template>
  <div>
    <div>
      <input type="text" :value="newTodo" @input="newTodo = $event.target.value" />
      <button @click="handleAddTodo">add</button>
      <button style="margin-left: 10px" @click="handleClearDoneTodo">clear done</button>
    </div>
    <div></div>
    <ul>
      <li
        v-for="(item, index) in todos"
        :key="index + item.todo"
        class="todoItem"
        :class="item.isDone ? 'isDone' : ''"
      >
        <button @click="handleDelTodo(index)">del</button>
        <span style="padding-left: 15px" @click="handleClickTodo(index)">{{ item.todo }}</span>
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

  @Emit('delTodo')
  handleDelTodo(index: number) {
    return index
  }

  @Emit('clearDoneTodo')
  handleClearDoneTodo() {}
}
</script>

<style scoped>
.todoItem {
  cursor: pointer;
  text-align: left;
}
.isDone {
  text-decoration: line-through;
}
</style>
