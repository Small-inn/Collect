<template>
  <div class="tmpl">
    <!--1.0  轮播-->
    <mt-swipe class="swipe" :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  
    <!--2.0 九宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link :to="{ name: 'newslist' } ">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link :to="{ name: 'testvuex' }">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">Phone</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeList:[
        {src:'/src/assets/luboImg/dazhe.jpg'},
        {src:'/src/assets/luboImg/diannao.jpg'},
        {src:'/src/assets/luboImg/naifen.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .swipe {
      height: 200px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
      border-right: none;
      border-bottom: none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
          text-overflow: clip;
    }
    .mui-icon-home,
    .mui-icon-email,
    .mui-icon-chatbubble,
    .mui-icon-location,
    .mui-icon-search,
    .mui-icon-phone {
      width: 40px;
      height: 40px;
      background-repeat: round;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
      content: ''
    }
     .mui-icon-home {
      background-image: url(../assets/chaoshi.png)
    }
    .mui-icon-email {
      background-image: url(../assets/chongzhi.png)
    }
    .mui-icon-chatbubble {
      background-image: url(../assets/fuzhuang.png)
    }
    .mui-icon-location {
      background-image: url(../assets/lingjuan.png)
    }
    .mui-icon-search {
      background-image: url(../assets/shengxian.png)
    }
    .mui-icon-phone {
      background-image: url(../assets/wuliu.png)
    }
    
</style>
