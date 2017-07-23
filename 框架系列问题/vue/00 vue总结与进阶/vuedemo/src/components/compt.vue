<template>
  <div>
      <button @click="add">{{num}}</button>
      <button @click="num += 2">{{num}}</button>
      <button @click="num += 1">{{num}}</button>

      <p>组件通讯，使用props让子组件可以使用父组件的数据，子组件显式使用props选项声明获取父组件的数据</p>
      

  </div>
</template>
<script>
    export default {
        data() {
            return {
                num:0
            }
        },
        methods:{
            add() {
                // console.log(this.num);
                return this.num ++
            }
        }
    }
</script>
<style>

</style>

