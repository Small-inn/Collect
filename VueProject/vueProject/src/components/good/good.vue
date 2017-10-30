<template>
  <div>
      <!-- 1.0 数量 -->
      <h2>商品详情</h2>

      <div>
        <span class="text">购买数量：</span>
        <count class="count" v-on:sentcount="getCount"></count>
      </div>
<!-- 2.0 按钮-->
      <div class="btn">
          <mt-button type="danger" >立即购买</mt-button>
		  <mt-button type="danger" @click="addShopCar">加入购物车</mt-button>
      </div>

  </div>
</template>
<script>
import count from "../common/count.vue";
export default {
  data() {
    return {
      count: 1
    };
  },
  methods: {
    getCount() {
      this.count = count;
    },
    addShopCar() {}
  },
  components: {
    count
  }
};
</script>
<style lang="scss">
.text{
    float: left;
}
.btn {
  float: left;
  margin-top: 20px;
}
</style>

