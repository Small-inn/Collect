<template>
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <button @click="jump" class="btn">点击</button>    
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push({ name: "rater" });
    }
  }
};
</script>
<style lang="less" scoped>
    .btn{
        width: 2rem;
        height: 2rem;
    }
</style>