<template>
    <div>
        <div>清明雨下</div>
        <router-link :to="{name: 'cchild'}" append>开车了</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
  export default {
      data (){
          return {

          }
      }
  }
</script>
<style>

</style>
