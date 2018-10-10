<template>
  <div>
    <div id="listSearch" class="bar bar-header-secondary" style="top:0;">
      <div class="searchbar searchbar-active" style="background-color: #fff;">
        <a class="searchbar-cancel">搜索</a>
        <div class="search-input">
          <label class="search-label mui-icon mui-icon-search"></label>
          <input type="search" id="search" name="jobName" placeholder="搜索岗位名称或关键字" value="">
        </div>
      </div>
    </div>

    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" @click="home_handle" >
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <span class="mui-tab-label">找工作</span>
      </a>
      <a class="mui-tab-item" @click="recommend_handle">
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <span class="mui-tab-label">推荐有奖</span>
      </a>
      <a class="mui-tab-item" @click="my_handle" >
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
      /* console.log("htmlHeight", htmlHeight, scrollTop, clientHeight); */
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
    },
    home_handle(){
      this.$router.push({path:"/"})
    },
    recommend_handle(){
      this.$router.push({path:"/login"})
    },
    my_handle(){

    }
  }
};
</script>

<style scoped>
#listSearch {
  top: 0px;
  position: fixed;
}
#search {
  background-color: #f7f7f8;
  color: #5f5f5f;
  text-align: left;

}
#search::-webkit-input-placeholder{
 color:#ccc;
}
.search-label {
  display: block;
  position: absolute;
  font-size: 0.5rem;
  line-height: 0.75rem;
  width: 0.7rem;
  text-align: center;
  color: #5f5f5f;
}
.bar {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  height: 1.1rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  background-color: #f7f7f8;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.bar .searchbar {
  margin: 0 -0.25rem;
  padding: 0.2rem 0.25rem;
  background: rgba(0, 0, 0, 0.1);
}
.searchbar {
  padding: 8px 0;
  overflow: hidden;
  height: 1.1rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.bar .searchbar .searchbar-cancel {
  color: #5f646e;
}
.searchbar.searchbar-active .searchbar-cancel {
  margin-right: 0;
  opacity: 1;
  font-size: 0.45rem;
}
.searchbar .searchbar-cancel {
  margin-right: -1.5rem;
  width: 1.1rem;
  float: right;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.searchbar.searchbar-active .searchbar-cancel + .search-input {
  margin-right: 1.25rem;
}
.searchbar .search-input {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  margin-right: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.search-input .icon {
  position: absolute;
  font-size: 0.45rem;
  color: #b4b4b4;
  top: 50%;
  left: 0.15rem;
  -webkit-transform: translate3D(0, -50%, 0);
  transform: translate3D(0, -50%, 0);
}

.search-input label + input {
  padding-left: 0.7rem;
}
.search-input input {
  box-sizing: border-box;
  width: 100%;
  height: 0.7rem;
  display: block;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.125rem;
  font-family: inherit;
  color: #3d4145;
  font-size: 0.4rem;
  font-weight: 400;
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #b4b4b4;
}

.mui-bar {
  box-shadow: none;
}
.main-win {
  height: 100vh;
  padding-top: 1.1rem;
}
.mui-slider-item {
  height: 5rem !important;
}
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.3rem;
  bottom: 2rem;
  z-index: 9999999;
}
.nav-index-foat p {
  width: 1.4rem;
  height: 1.4rem;
  background-color: rgba(57, 94, 169, 0.8);
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 10px 3px rgba(57, 94, 169, 0.45);
}
.nav-index-foat p a {
  color: #fff;
  font-size: 0.3rem;
  margin-top: 0.15rem;
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
  height: 2rem;
  padding: 0.2rem 0.2rem 0.2rem 0.1rem;
}
.recruit-item .item-con {
  flex: 1;
  width: 100%;
}
.recruit-item .item-con .title {
  font-size: 0.4rem;
  line-height: 0.7rem;
}
.recruit-item .item-con .subtitle {
  font-size: 0.35rem;
}
.recruit-item .item-con .price {
  font-size: 0.35rem;
}
.recruit-item .item-right {
  margin-left: 10px;
  width: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.recruit-item .item-right .btn-one {
  height: 0.65rem;
  overflow: hidden;
  background-color: #0894ec !important;
  line-height: 0.65rem;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.recruit-item .item-right .btn-span {
  font-size: 12px;
  color: rgb(255, 106, 15);
  height: 0.65rem;
  line-height: 0.65rem;
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
