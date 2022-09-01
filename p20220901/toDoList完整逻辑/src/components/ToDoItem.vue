<template>
  <li style="list-style-type: none">
    <label>
      <input
        type="checkbox"
        :checked="todo.flag"
        @change="checkflag(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.context }} </span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.context"
        @blur="handleBlur(todo, $event)"
        ref="editInput"
      />
      <button @click="del(todo.id)">删除</button>
      <button @click="edit(todo)">编辑</button>
    </label>
  </li>
</template>

<script>
export default {
  data() {
    return {
      myid: "",
    };
  },
  props: ["todo"],
  methods: {
    checkflag(id) {
      this.myid = id;
      this.$bus.$emit("check", id);
    },
    del(id) {
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("DelOne", id);
      }
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("输入不能为空");
      }

      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
    edit(todo) {
      if (todo.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.editInput.focus();
      });
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-direction: row;
  align-items: center;
}
li button {
  margin-left: 500px;
  float: right;
  width: 70px;
  height: 30px;
  display: none;
}
li:hover {
  background-color: gray;
}

li:hover button {
  display: block;
}
</style>