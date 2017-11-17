<template>
  <section>
      <Cd>
        <template slot-scope="props">
          <span>{{props.text}}</span>
        </template>
      </Cd>
  </section>
</template>
<script>
    import Cd from '../components/good/child.vue'
    export default {
      data () {
        return {

        }
      },
      methods:{

      },
      components:{
        Cd
      }
    }
</script>
<style lang="scss" scoped>

</style>

