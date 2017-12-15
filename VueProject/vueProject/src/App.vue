<template>
  <div id="app">
    <!--1.0 头部-->
    <mt-header fixed title="庞大的刘氏集团">
      <router-link v-show="isShow" to="/" slot="left">
        <mt-button icon="back" @click="goback">返回</mt-button>
      </router-link>
    </mt-header>
    <!--2.0 中间路由导航-->
    <router-view></router-view>
    <!--3.0 底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'Home'}">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'Email'}">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'Shopcar'}">
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge" ref="bige">0</span>
          </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'Set'}">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  watch: {
    // 监听路由变化
    $route: function(to, from) {
      if (to.path == "/Home") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  methods: {
    // 返回上一级
    goback() {
      this.$router.go(-1);
    }
  },
  mounted(){
    // this.$refs.bige.innerHTML = count;
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 45px;
}
</style>
