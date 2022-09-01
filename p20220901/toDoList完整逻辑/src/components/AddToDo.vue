<template>
  <div>
    <input type="text" placeholder="请输入要添加的事项并按回车键" v-model="context" @keyup.enter="add"/>
  
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      context:''
    };
  },
  methods: {
    add(e) {
      console.log(e.target.value);
      if (!this.context.trim()) return
       
        const doobj = { id: nanoid(), context: this.context, flag: false };
        this.$bus.$emit('addnew',doobj);
        this.context = "";
      
    },
  },
 
};
</script>

<style>
</style>