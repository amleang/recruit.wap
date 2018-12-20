<template>
  <div>
    <div id="listSearch" class="bar bar-header-secondary" style="top:0;">
      <div v-if="isSearch" class="searchbar searchbar-active" style="background-color: #fff;">
        <a class="searchbar-cancel" @click="search_handle">搜索</a>
        <div class="search-input">
          <label class="search-label mui-icon mui-icon-search"></label>
          <input type="search" id="search" name="jobName" placeholder="搜索岗位名称或关键字" v-model="searchParam">
        </div>
      </div>
      <div v-else class="searchbar searchbar-active" style="background-color: #fff;">
        <a class="searchbar-cancel" @click="isSearch=true;">搜索</a>
        <div class="search-input home-text">
          苏州德聚仁合信息招工网
        </div>
      </div>
    </div>

    <!-- <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active">
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <span class="mui-tab-label">找工作</span>
      </a>
      <a
        class="mui-tab-item"
        @click="$router.push({path:'/recommend'})"
      >
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <span class="mui-tab-label">推荐有奖</span>
      </a>
      <a
        class="mui-tab-item"
        @click="$router.push({path:'/user'})"
      >
        <span class="mui-icon icon iconfont icon-yonghu"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav> -->
    <div class="bottom">
      <a v-if="istop" class="active" @click="go_head_handle">
        <span class="mui-icon icon iconfont icon-back-top"></span>
        <div>返回顶部</div>
      </a>
      <a v-else class="active" @click="$router.push({path:'/'})">
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <div>找工作</div>
      </a>
      <a @click="$router.push({path:'/recommend'})">
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <div>推荐有奖</div>
      </a>
      <a @click="$router.push({path:'/user'})">
        <span class="mui-icon icon iconfont icon-yonghu"></span>
        <div>个人中心</div>
      </a>
    </div>
    <div class="shangbiao">
      <div>苏州德聚仁合招工网 szdejurenhe.com ©2013-2018</div>
      <div>苏州德聚仁合信息服务有限公司 版权所有</div>
      <div> <a href="http://www.miitbeian.gov.cn">------- 苏ICP备18065728号-1 -------</a></div>
    </div>
    <div v-if="istop" class="tuijian" @click="$router.push({path:'/recommend'})">
      <img src="@/assets/images/01.3.jpg">
    </div>
    <div class="main-win">
      <div class="daytuijian" v-if="topImgList.length>0" @click="top_detail_handle(topImgList[0])">
        <div class="name-title">今日推荐</div>
        <div class="day-tuijian-title">{{topImgList[0].name}}</div>
        <div class="day-tuijian-price">{{topImgList[0].salaryStart}}-{{topImgList[0].salaryEnd}}元</div>
      </div>
      <div class="mui-slider">
        <div class="mui-slider-group mui-slider-loop" v-if="topImgList.length>1">
          <!--支持循环，需要重复图片节点-->
          <!-- <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/yuantiao.jpg" /></a></div> -->
          <div class="mui-slider-item mui-slider-item-duplicate"><a @click="top_detail_handle(topImgList[topImgList.length-1])"><img :src="topImgList[0].cover" /></a></div>
          <!--  <div class="mui-slider-item"><a href="#"><img src="../../assets/images/shuijiao.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/muwu.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/cbd.jpg" /></a></div>
          <div class="mui-slider-item"><a href="#"><img src="../../assets/images/yuantiao.jpg" /></a></div> -->
          <div class="mui-slider-item" v-for="(item,index) in topImgList" :key="index"><a @click="top_detail_handle(item)"><img :src="item.cover" /></a></div>
          <!--支持循环，需要重复图片节点-->
          <!--  <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="../../assets/images/shuijiao.jpg" /></a></div> -->
          <div class="mui-slider-item mui-slider-item-duplicate"><a @click="top_detail_handle(topImgList[0])"><img :src="topImgList[topImgList.length-1].cover" /></a></div>
        </div>
        <div class="mui-slider-group" v-else>
          <div class="mui-slider-item"><a @click="top_detail_handle(topImgList[0])"><img :src="topImgList[0].cover" /></a></div>
        </div>
        <div class="mui-slider-indicator" v-if="topImgList.length>1">
          <div :class="`mui-indicator ${index==0?'mui-active' :''}`" v-for="(item,index) in topImgList" :key="index"></div>
        </div>
      </div>

      <div class="recruit-list">
        <div :class="`mui-table-view ${isNo?'no-bottom':''}`">
          <div class="recruit-item" v-if="isNo">
            <div class="nothing">暂无招工信息</div>
          </div>
          <div class="recruit-item" v-for="(item,index) in list" :key="index" @click="detail_handle(item)">
            <img :src="item.cover" alt="" class="item-left">
            <div class="item-con">
              <div class="title">{{item.name}}</div>
              <div class="subtitle">{{item.subname}}</div>
              <div class="price">
                <span>{{item.salaryStart}}-{{item.salaryEnd}}</span> 元/月
              </div>
            </div>
            <div class="item-right" v-if="item.active==0">
              <div class="btn-one" style="background: #859199!important;">已停招</div>
              <div class="btn-span" v-if="item.type==1">{{item.laborPrice}}元/小时</div>
              <div class="btn-span" v-if="item.type==2">{{item.subsidyExplain}}</div>
            </div>
            <div class="item-right" v-if="item.type==1 && item.active==1">
              <div class="btn-one">工价</div>
              <div class="btn-span">{{item.laborPrice}}元/小时</div>
            </div>
            <div class="item-right" v-if="item.type==2 && item.active==1">
              <div class="btn-one">补贴</div>
              <div class="btn-span">{{item.subsidyExplain}}</div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="nav-index-foat">
      <p class="nav-index-text" @click="$router.push({path:'/store'})">
        <a class="external">免费<br>咨询</a>
      </p>
    </div>
  </div>
</template>

<script>
import { checkLogin } from "@/components/lib/util";
import { wxShareConfig } from "@/components/lib/wxShare";
import consult from "@/components/consult";
import wx from "weixin-js-sdk";
export default {
  components: {
    consult
  },
  data() {
    return {
      isSearch: false,
      topImgList: [{}],
      isLogin: false,
      searchParam: "",
      queryParam: "",
      pageNo: 1,
      pageSize: 10,
      rowCout: 100,
      isNo: false,
      isLoad: false,
      list: [],
      istop: false
    };
  },
  mounted() {
    document.title = "苏州德聚仁合招工网首页";
    this.wxShareConfig("苏州德聚仁合招工网首页");

    document.body.scrollTop = 0;
    this.isLogin = this.checkLogin();
    console.log("isLogin=>", this.isLogin);
    const that = this;
    that.loadData(that);
    /*  this.mui.init({
      swipeBack: true //启用右滑关闭功能
    }); */
    //获得slider插件对象
    var slider = this.mui(".mui-slider");
    slider.slider({
      interval: 3000
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
      if (scrollTop > 70) {
        this.istop = true;
      } else this.istop = false;
      let ua = window.navigator.userAgent.toLowerCase();
      console.log(
        "scrollTop + clientHeight=>",
        scrollTop + clientHeight,
        htmlHeight
      );
      //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
      if (scrollTop != 0 && htmlHeight == scrollTop + clientHeight) {
        //上拉加载逻辑代码
        that.loadData(that);
      }
    });
  },
  methods: {
    checkLogin,
    wxShareConfig,
    top_tuijian_handle(row) {},
    go_head_handle() {
      window.scroll(0, 0);
    },
    search_handle() {
      this.pageNo = 1;
      this.queryParam = this.searchParam;
      this.rowCout = 100;
      this.list = [];
      this.loadData(this);
    },
    loadData(that) {
      console.log("pageNo=>", that.pageNo);
      if (that.rowCout > (that.pageNo - 1) * that.pageSize) {
        that.http
          .get("/api/app/recruit", {
            params: {
              page: that.pageNo,
              size: that.pageSize,
              name: that.queryParam
            }
          })
          .then(res => {
            console.log("res=>", res);
            if (res.code == 200) {
              that.rowCout = res.count;

              if (that.pageNo == 1 && !that.isLoad) {
                var onePageList = [];
                let topList = res.data.filter(x => x.isTop == 1);
                if (topList.length == 0) {
                  if (res.data.length > 0) that.topImgList = [res.data[0]];
                } else {
                  if (topList.length > 5) {
                    topList.forEach((item, index) => {
                      if (index < 5) that.topImgList.push(item);
                    });
                  } else {
                    that.topImgList = topList;
                  }
                }
                res.data.forEach(item => {
                  if (that.topImgList.filter(x => x.id == item.id).length == 0)
                    that.list.push(item);
                });
                that.isLoad = true;
              } else {
                if (that.pageNo == 0) that.list = res.data;
                else that.list = that.list.concat(res.data);
              }
              if (that.list.length > 0) that.isNo = false;
              else that.isNo = true;
            } else {
              that.mui.toast(res.msg, { duration: "long", type: "div" });
            }
            that.pageNo++;
          });
        console.log("下拉刷新");
      } else return;
    },
    home_handle() {
      //this.$router.push({ path: "/" });
      location.href = "/";
    },
    recommend_handle() {
      if (this.isLogin) {
        location.href = "/recommend";
      } else this.$router.push({ path: "/login?ref=recommend" });
    },
    my_handle() {
      if (this.isLogin) {
        location.href = "/user";
      } else this.$router.push({ path: "/login?ref=user" });
    },
    top_detail_handle(item) {
      this.$router.push({ path: "/jobdetail?id=" + item.id });
    },
    detail_handle(item) {
      this.$router.push({ path: "/jobdetail?id=" + item.id });
    }
  }
};
</script>
<style>
.mui-toast-container {
  bottom: 50% !important;
}
</style>

<style scoped>
.home-text {
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.45rem;
}
#listSearch {
  top: 0px;
  position: fixed;
}
#search {
  background-color: #f7f7f8;
  color: #5f5f5f;
  text-align: left;
}
#search::-webkit-input-placeholder {
  color: #ccc;
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
  z-index: 1000000000000;
}
.main-win {
  height: 100vh;
  padding-top: 1.1rem;
  /* position: relative; */
}
.mui-slider {
  max-height: 5rem;
}
.mui-slider-item {
  height: 5rem !important;
}

.recruit-list {
  padding-bottom: 3.8rem;
}
.recruit-item {
  display: flex;
  padding: 0 10px;
  border: 1px #f1f1f1 solid;
}
.recruit-item .nothing {
  font-size: 0.4rem;
  text-align: center;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
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
  height: 0.7rem;
  overflow: hidden;
}
.recruit-item .item-con .subtitle {
  font-size: 0.35rem;
}
.recruit-item .item-con .price {
  font-size: 0.35rem;
}
.recruit-item .item-con .price span {
  color: rgb(255, 106, 15);
  font-family: "ArialMT";
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
  font-size: 0.35rem;
  color: #fff;
}
.recruit-item .item-right .btn-span {
  font-size: 0.35rem;
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
.mui-table-view {
  margin-bottom: 1.2rem;
}
.mui-table-view .mui-media-object {
  line-height: 50px;
  max-width: 100%;
  height: 50px;
}
.no-bottom {
  position: inherit !important;
}

.bottom {
  position: fixed;
  z-index: 99999999;
  right: 0;
  left: 0;
  bottom: 2rem;
  width: 100%;
  height: 1.5rem;
  padding-top: 0.1rem;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
}
.bottom a {
  display: block;
  width: 33.33333333%;
  text-align: center;
  color: rgb(146, 146, 146);
}
.bottom a span {
  font-size: 45px;
}
.bottom a div {
  font-size: 22px;
}
.active {
  color: rgb(0, 122, 255) !important;
}
.active a {
  color: rgb(0, 122, 255) !important;
}
.icon-back-top:before {
  content: "";
  background-image: url("../../assets/images/backtop1.png");
  background-size: 0.5rem 0.5rem;
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  z-index: 100;
  margin-left: -0.25rem;
  margin-top: -0.35rem;
}
.tuijian {
  position: fixed;
  bottom: 3.5rem;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 1rem;
  padding: 0;
  margin: 0;
}

.tuijian img {
  height: 100%;
  width: 100%;
}
.shangbiao {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.3rem;
  height: 2rem;
  z-index: 99999999;
  background-color: #fff;
}
.shangbiao div {
  text-align: center;
  margin-top: 0.1rem;
}
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.3rem;
  bottom: 6.5rem;
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
.daytuijian {
  position: absolute;
  top: 1.8rem;
  left: 1rem;
  width: 3.6rem;
  border-radius: 0.1rem;
  border: 0.03rem solid #bdbdbd;
  border-bottom: none;
  overflow: auto;
  z-index: 9;
  background-color: #fff;
}
.daytuijian .name-title {
  background-color: rgba(255, 98, 98, 0.85);
  margin: 0;
  border-bottom: 1px solid #bdbdbd;
  font-size: 0.4rem;
  line-height: 0.7rem;
  padding: 0 0.3rem;
  color: #333;
  height: 0.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: bold;
}
.day-tuijian-title {
  margin: 0;
  border-bottom: 1px solid #bdbdbd;
  font-size: 0.4rem;
  line-height: 0.7rem;
  padding: 0 0.3rem;
  color: #333;
  height: 0.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.day-tuijian-price {
  margin: 0;
  border-bottom: 1px solid #bdbdbd;
  font-size: 0.4rem;
  line-height: 0.7rem;
  padding: 0 0.3rem;
  color: #333;
  height: 0.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
