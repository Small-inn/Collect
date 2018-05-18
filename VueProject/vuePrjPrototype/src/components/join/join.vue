<template>
    <div class="screen">
      <div class="primary-level">
        <div class="img-con">
          <img src="" alt="" >
        </div>
        <p>初级俱乐部（人数上限100）</p>
      </div>
      <div class="middle-level">
        <div class="img-con">
          <img src="" alt="" >
        </div>
        <p>中级俱乐部（人数上200）</p>
        <div class="extend">
          <span>金币10,000</span>
          <span>扩充到中级俱乐部</span>
        </div>    
      </div>
      <div class="high-level">
        <div class="img-con">
          <img src="" alt="" >
        </div>
        <p>高级俱乐部（人数上限1000）</p>
        <div class="extend">
          <span>金币10,000</span>
          <span>扩充到高级俱乐部</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.primary-level,
.middle-level,
.high-level{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.primary-level {
  width: 100%;
  margin-top: 51px;
}
.middle-level,
.high-level {
  margin-top: 62px;
}
.primary-level .img-con,.middle-level .img-con,.high-level .img-con {
  width: 140px;
  height: 90px;
}
.primary-level,
.middle-level,
.high-level p {
  font-size: 14px;
  text-align: center;
}
.primary-level p{
  color: #65A085;
}
.middle-level P{
  color: #f88c30;
}
.high-level p{
  color: #E61B14;
}
.extend {
  padding: 0 18px 0 16px;
  width: 343px;
  height: 40px;
  line-height: 40px;
  color:#fff;
  font-size: 13px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.middle-level .extend {
  background-color: #f88c30;
}
.high-level .extend {
  background-color: #E61B14;
}
</style>
