<template>
  <div>
      <button @click="add">{{num}}</button>
      <button @click="num += 2">{{num}}</button>
      <button @click="num += 1">{{num}}</button>
      <!--
          非prop属性，可以直接传入组件，不需要定义相应的prop，例如，第三方组件bs-date-input,和bootstrap插件操作
          在第三方组件上添加data-3d-date-picker属性，可以直接把该属性添加到组件上，不需要提前定义组件prop
       -->

      <!--<bs-date-input data-3d-date-picker="true"></bs-date-input>-->
      <p>组件通讯，使用props让子组件可以使用父组件的数据，子组件显式使用props选项声明获取父组件的数据</p>
      
      <h2>自定义事件</h2>
      <p>每一个vue实例实现事件接口(Events interface),使用$on(eventName)监听事件，$emit(eventName)触发事件</p>
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

