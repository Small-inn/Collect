<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <kid :log="hh"></kid>
    <router-link :to="{name: 'condition'}">点击</router-link>
    <router-link :to="{name: 'event'}">事件处理</router-link>
    <router-link :to="{name: 'form'}">表单控件</router-link>
    <router-link :to="{name: 'com'}">组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import kid from './kid';
export default {
  components:{
    kid
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hh:'hello kid'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
