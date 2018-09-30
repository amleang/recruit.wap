<template>
  <div>
    <div class="search">

    </div>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <span class="mui-tab-label">找工作</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <span class="mui-tab-label">推荐有奖</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon icon iconfont icon-yonghu"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav>

    <div class="main-win">
      <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop">
          <!--支持循环，需要重复图片节点-->
          <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/yuantiao.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/shuijiao.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/muwu.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/cbd.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/yuantiao.jpg" /></a></div>
          <!--支持循环，需要重复图片节点-->
          <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/shuijiao.jpg" /></a></div>
        </div>
        <div class="mui-slider-indicator">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <div class="recruit-list">
        <div class="mui-table-view">
          <div class="recruit-item" v-for="(item,index) in list" :key="index">
            <img :src="item.img" alt="" class="item-left">
            <div class="item-con">
              <div class="title">昆山联滔补差价小时工</div>
              <div class="subtitle">男18-40，女18-42</div>
              <div class="price">
               <span>4500-6500</span> 元/月
              </div>
            </div>
            <div class="item-right">
              <div class="btn-one">补贴</div>
              <div class="btn-span">35.8元/小时</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="nav-index-foat">
      <p class="nav-index-text">
        <a href="javascript:callNzJob();" class="external">免费<br>咨询</a>
      </p>
    </div>
  </div>
</template>

<script>
import imgT from "../../assets/images/yuantiao.jpg";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    const that = this;
    that.loadData();
    this.mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    //获得slider插件对象
    var slider = this.mui(".mui-slider");
    slider.slider({
      interval: 2000
    });
    window.addEventListener("scroll", () => {
      //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
      var htmlHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight;

      //clientHeight是网页在浏览器中的可视高度，
      var clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      //scrollTop是浏览器滚动条的top位置，
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      console.log("htmlHeight", htmlHeight, scrollTop, clientHeight);
      //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
      if (scrollTop + clientHeight == htmlHeight) {
        //上拉加载逻辑代码
        that.loadData();
      }
    });
  },
  methods: {
    loadData() {
      console.log("下拉刷新");
      setTimeout(() => {
        for (var i = 0; i < 20; i++) {
          this.list.push({
            id: i,
            name: "幸福" + i,
            detail: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.",
            img:
              "https://cos.niuzhigongzuo.com/company/fastdfs/fb790a2a-4806-4540-a865-467fba974bcc-1503244555826.jpg"
          });
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.mui-bar{
  box-shadow: none;
}
.main-win {
  height: 100vh;
}
.mui-slider-item {
  height: 180px !important;
}
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.8rem;
  bottom: 100px;
  z-index: 9999999;
}
.nav-index-foat p {
  width: 50px;
  height: 50px;
  background-color: rgba(57, 94, 169, 0.8);
  border-radius: 2.4rem;
  text-align: center;
  box-shadow: 0 0 10px 3px rgba(57, 94, 169, 0.45);
}
.nav-index-foat p a {
  color: #fff;
  font-size: 0.6rem;
  margin-top: 0.3rem;
  display: inline-block;
}
.recruit-list {
  padding-bottom: 50px;
}
.recruit-item {
  display: flex;
  padding: 0 10px;
  border: 1px #f1f1f1 solid;
}
.recruit-item .item-left {
  width: 29%;
  height: 68px;
  padding: 5px 5px 5px 0;
}
.recruit-item .item-con {
  flex: 1;
  width: 100%;
}
.recruit-item .item-con .title {
  font-size: 15px;
  line-height: 28px;
}
.recruit-item .item-con .subtitle {
  font-size: 12px;
}
.recruit-item .item-con .price{
  font-size: 12px;
}
.recruit-item .item-right {
  margin-left: 10px;
  width: 75px;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.recruit-item .item-right .btn-one {
  height: 25px;
  overflow: hidden;
  background-color: #0894ec !important;
  line-height: 25px;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.recruit-item .item-right .btn-span {
  font-size: 12px;
  color: rgb(255, 106, 15);
  height: 25px;
  line-height: 25px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e6e6e6;
}
.mui-table-view-cell a {
  display: flex;
}
.mui-table-view .mui-media-object {
  line-height: 50px;
  max-width: 100%;
  height: 50px;
}
</style>
