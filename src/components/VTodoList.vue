<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoListPresent extends Vue {
  @Prop({ default: [] })
  todos!: Array<string>
}
</script>
