<template>
  <section>
    <h1>vuex测试</h1>
    点击次数:{{getCount}} 次
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </section>
</template>

<script>
// 在单独构建的版本中辅助函数为Vuex.mapState。
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed: {
    // 当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
    //为了解决这个问题,我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
    ...mapGetters([
      'getCount'      
    ])
  },
  methods: {
    ...mapActions([
      'increment', 
      'decrement'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>

