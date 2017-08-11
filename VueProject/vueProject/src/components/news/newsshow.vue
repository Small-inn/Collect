<template>
  <section>
    <!--1.0 标题-->
    <div class="titlewrap">
      <h2 @click="params">幸福啊</h2>
      <span>
        2017-08-09 10次浏览 分类:民生
      </span>
    </div>
    <!--2.0 详细-->
    <div class="detail">

    </div>
    <!--3.0 评论组件-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      newsid:0
    }
  },
  methods:{
    // 获取父组件传过来的参数
    params() {
      console.log(this.$route.params);
    }
  },
  created(){
    this.newsid = this.$route.params.newsid
  }
}
</script>

<style scoped lang="scss">
  
</style>

