<template>
  <section class="tml">
      <div class="left" @click="decrease">-</div>
      <div class="center">{{count}}</div>
      <div class="right" @click="increase">+</div>      
  </section>
</template>
<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  methods: {
    decrease() {
      if (this.count > 1) {
        this.count--;
      } else {
        this.count = 1;
      }
      this.custom();
    },
    increase() {
      this.count++;
      this.custom();
    },
    custom() {
      this.$emit("sentcount", this.count);
    }
  }
};
</script>
<style lang="scss">
.tml {
  width: 100px;
  display: flex;
}

.left,
.center,
.right {
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 30px;
}
.left {
  flex: 30px;
}
.right {
  flex: 30px;
}
.center {
  flex: 40px;
}
</style>

