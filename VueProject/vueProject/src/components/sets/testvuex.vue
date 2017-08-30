<template>
  <section>
    <h1>vuex测试</h1>
    点击次数:{{getCount}} 次
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed: {
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

