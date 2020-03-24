<template>
  <div>
    <ul>
      <li v-for="item in todos" :key="item.todo">{{ item.todo }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITodoItemState } from '@/store/types'

@Component
export default class VTodoList extends Vue {
  @Prop({ default: [] })
  todos!: ITodoItemState[]
}
</script>
