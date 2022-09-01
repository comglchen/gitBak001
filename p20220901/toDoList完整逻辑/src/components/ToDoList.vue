<template>
  <ul>
    <ToDoItem
      v-for="todo in todoobj"
      :key="todo.id"
      :todo="todo"
      :changeflag="changeflag"
      
    ></ToDoItem>
  </ul>
</template>

<script>
import ToDoItem from './ToDoItem'

export default {
  components: {ToDoItem},
  props: ["todoobj", "changeflag"],
  methods: {
    
  },
mounted(){console.log(this.x)}
};

</script>

<style>
</style>