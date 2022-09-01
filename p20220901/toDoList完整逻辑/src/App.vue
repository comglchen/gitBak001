<template>
  <div>
    <h2>待办事项小程序</h2>
    <AddToDo></AddToDo>

    待办事项：<ToDoList :todoobj="todoobj"></ToDoList>
    <ToDoBottom :todoobj="todoobj" @ClearAll="ClearAll">zzzzzzz</ToDoBottom>
  </div>
</template>

<script>
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import ToDoBottom from "./components/ToDoBottom";

export default {
  data() {
    return {
      finished: 0,
      todoobj: JSON.parse(localStorage.getItem("todoobj")) || [],
    };
  },
  components: { AddToDo, ToDoList, ToDoBottom },
  mounted() {
    this.$bus.$on("addnew", (addme) => this.todoobj.unshift(addme));
    this.$bus.$on("DelOne", this.deltodo);
    this.$bus.$on("check", this.changeflag);
    this.$bus.$on("SelectAll", this.SelectAll);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.off("addnew");
    this.$bus.off("DelOne");
    this.$bus.off("check");
    this.$bus.off("SelectAll");
  },
  methods: {
    changeflag(id) {
      this.todoobj.forEach((d) => {
        if (d.id === id) {
          d.flag = !d.flag;
        }
      });
    },
    deltodo(id) {
      this.todoobj = this.todoobj.filter((todo) => todo.id !== id);
    },
    SelectAll(e) {
      this.todoobj.forEach((todo) => {
        todo.flag = e;
      });
    },
    updateTodo(id, context) {
      this.todoobj.forEach((d) => {
        if (d.id === id) {
          d.context = context;
        }
      });
    },
    ClearAll() {
      this.todoobj = this.todoobj.filter((todo) => {
        return !todo.flag;
      });
    },
  },

  watch: {
    todoobj: {
      deep: true,
      handler(value) {
        localStorage.setItem("todoobj", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
</style>