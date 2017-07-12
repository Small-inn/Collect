<template>
  <div class="home">
  <h2>{{msg}}</h2>
    <!--1.0 按钮 -->
    <div class="block">
      <span class="demonstration">默认显示颜色</span>
      <span class="wrapper">
            <el-button type="success">成功按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
            <el-button type="info">信息按钮</el-button>
          </span>
    </div>
  </div>
</template>

<script>
  // 公共的页面组件
  // import left from './common/left.vue'
  // import header from './common/header.vue'
  // import footer from './common/footer.vue'
  // components:{
  //   left,
  //   header,
  //   footer
  // }
  
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your cms'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
