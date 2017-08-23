<template>
  <section>
    <h1>我是子组件啊</h1>
    <Gd>
      <p>你是我的小苹果</p>
      <p>怎么爱你都不嫌多</p>
    </Gd>
  </section>
</template>
<script>
    import Gd from '../components/good/good.vue'
    export default {
      data () {
        return {

        }
      },
      methods:{

      },
      components:{
        Gd
      }
    }
</script>
<style scoped lang="scss">

</style>
