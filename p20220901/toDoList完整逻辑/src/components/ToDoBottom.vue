<template>
  <div v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="IsAll" @change='IsCheckedAll'/> -->
      <input type="checkbox" v-model="IsAll" />
    </label>
    <span>
      <span>已完成{{ finished }}</span
      >全部共：{{ total }}
    </span>
    <button @click="DoClearAll">清除所有完成项</button>
   
  </div>
</template>

<script>
export default {
  data(){
    return{
name:"name form bottom....."
    }
  },
  props: ["todoobj", "ClearAll"],
  methods: {
    selectall() {
      this.select();
    },
    //  IsCheckedAll(e){
    // this.SelectAll(e.target.checked)
    //  }
    DoClearAll(){
      this.$emit('ClearAll')
    },
    
  },

  computed: {
    total() {
      return this.todoobj.length;
    },
    // finished(){
    //   let count=0
    //   this.todoobj.forEach(todo => {
    //     if(todo.flag){
    //       count++
    //     }
    //   });
    //   return count
    // }
    finished() {
      return this.todoobj.reduce((pre, todo) => pre + (todo.flag ? 1 : 0), 0);
    },
    // IsAll(){
    //   return this.finished===this.total
    // }
    IsAll: {
      get() {
        return this.finished === this.total && this.total > 0;
      },
 
      set(value) {
        this.$bus.$emit('SelectAll',value)
  
      },
    },
  },
};
</script>

<style>
</style>