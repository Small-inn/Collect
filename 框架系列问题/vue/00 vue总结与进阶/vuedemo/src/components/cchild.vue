<template>
    <div>
    <span>我还是个孩子!</span><br>
    <template v-if="loginType === 'username'">
        <label>username</label>
        <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
        <label>Email</label>
        <input placeholder="ENter your Email" key="email-input">
    </template>
    <button @click="toggle">点击</button>
  </div>
</template>


<script>
    export default {
        data() {
            return {
                loginType:'username'
            }
        },
        methods:{
            toggle:function(){
               if(this.loginType === 'username'){
                   this.loginType = ''
               }else{
                   this.loginType = 'username'
               }
            }
        }
    }
</script>
<style>

</style>

