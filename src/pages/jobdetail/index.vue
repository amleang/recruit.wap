<template>
    <div>
        <div class="bar-nav">
            <span class="mui-icon mui-icon-arrowleft btn-back" @click="back_handle"></span>
            <div class="head-title">
                <marquee direction="left" width="100%" behavior="scroll" scrollamount="5" scrolldelay="5" onmouseout="this.start()" onmouseover="this.stop()">
                    <span class="ad-slogan">只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保</span>
                </marquee>
            </div>
        </div>
        <div class="content">
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
            <div class="company">
                <div class="title">
                    <div class="name">山东歌尔声学股份有限公司</div>
                    <div class="price">
                        <span>15</span>元/小时
                    </div>
                </div>
                <div class="subtitle">
                    18-40岁，环境好
                </div>
                <div class="sign-num">已报名468人
                </div>
            </div>
            <re-panel title="补贴">
                <div slot="reright">
                    <div style="font-size:0.3rem;">查看企业全部补贴 ></div>
                </div>
                <div>
                    自 2018年10月16日
                    起
                    入职即可领取
                </div>
            </re-panel>
            <re-panel title="工资福利">
                <div>
                    自 2018年10月16日
                    起
                    入职即可领取
                </div>
            </re-panel>
            <re-panel title="岗位介绍">
                <div>
                    自 2018年10月16日
                    起
                    入职即可领取
                </div>
            </re-panel>
            <re-panel title="注意事项">
                <div>
                    自 2018年10月16日
                    起
                    入职即可领取
                </div>
            </re-panel>
            <re-panel title="企业介绍">
                <div>
                    自 2018年10月16日
                    起
                    入职即可领取
                </div>
            </re-panel>
            <re-panel title="岗位推荐">
                <div style="margin:0 -0.5rem;">
                    <div class="rem-item" v-for="(item,index) in recommends" :key="index">
                        <div>
                            <img :src="item.img" alt="">
                        </div>
                        <div class="price">{{item.price}}</div>
                        <div class="name">{{item.name}}</div>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </re-panel>

            <div class="con-bottom"></div>
        </div>

        <div class="nav-index-foat">
            <p class="nav-index-text">
                <a class="external">免费<br>咨询</a>
            </p>
        </div>

        <div class="nav-index-foat-my">
            <p class="nav-index-text-my">
                <a class="external">纠错<br>报告</a>
            </p>
        </div>

        <div class="foot-bottom">
            <div class="apply-btn" @click="dialog=true;">免费报名</div>
            <div class="follow-btn">关注</div>
            <div class="share-btn">分享</div>
        </div>
        <div v-if="dialog" class="mui-popup-backdrop"></div>
        <div v-if="dialog" class="dialog">
            <div class="form-item">
                <label for="">姓名</label>
                <div>
                    <input type="text" placeholder="姓名">
                </div>
            </div>

            <div class="form-item">
                <label for="">邀请码</label>
                <div>
                    <input type="text" placeholder="邀请码">
                </div>
            </div>
            <div class="btn-success">确定</div>
        </div>
    </div>
    </div>
</template>

<script>
import rePanel from "@/components/panel";
import consult from "@/components/consult";
import imgT from "../../assets/images/yuantiao.jpg";
export default {
  components: {
    rePanel,
    consult
  },
  data() {
    return {
      dialog: false,
      recommends: [
        {
          img: imgT,
          price: "3500-5500 元/月",
          name: "太原富士康"
        },
        {
          img: imgT,
          price: "3500-5500 元/月",
          name: "太原富士康"
        },
        {
          img: imgT,
          price: "3500-5500 元/月",
          name: "太原富士康"
        },
        {
          img: imgT,
          price: "3500-5500 元/月",
          name: "太原富士康"
        }
      ]
    };
  },
  mounted() {
    this.mui.init({
      swipeBack: true //启用右滑关闭功能
    });
    //获得slider插件对象
    var slider = this.mui(".mui-slider");
    slider.slider({
      interval: 2000
    });
  },
  methods: {
    back_handle() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.bar-nav {
  height: 1.2rem;
  background-color: #39a9f0;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
}
.btn-back {
  position: absolute;
  left: 0.2rem;
  color: #0894ec;
  font-size: 0.8rem;
}
.head-title {
  width: 100%;
  text-align: center;
  font-size: 0.45rem;
  color: #fff;
  padding: 0 1rem;
  margin-top: 0.12rem;
}

.content {
  padding-top: 1.21rem;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #eee;
}
.company {
  padding: 0.2rem 0.5rem;
  color: #333333;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.company .title {
  display: flex;
  align-items: center;
  font-size: 0.43rem;
  margin-bottom: 0.2rem;
}
.company .title .name {
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.company .title .price {
  text-align: right;
  width: 40%;
}
.company .title .price span {
  color: #ff3838;
}
.company .subtitle {
  font-size: 0.38rem;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sign-num {
  text-align: right;
  color: #aaaaaa;
  font-size: 0.38rem;
}
.con-bottom {
  margin-bottom: 1.5rem;
}
.foot-bottom {
  position: absolute;
  left: 0;
  bottom: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.foot-bottom div {
  height: 0.75rem;
  line-height: 0.75rem;
  border: 0.015rem solid #39a9f0;
  border-radius: 10px;
  width: 30%;
  margin-left: 2.5%;
  text-align: center;
  background-color: #fff;
  color: #39a9f0;
}
.apply-btn {
  background-color: #0894ec !important;
  border: none !important;
  color: #fff !important;
}
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.3rem;
  bottom: 4rem;
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

.nav-index-foat-my {
  position: fixed;
  right: 0.3rem;
  bottom: 2rem;
  z-index: 9999999;
}
.nav-index-foat-my p {
  width: 1.4rem;
  height: 1.4rem;
  background-color: rgba(57, 94, 169, 0.8);
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 10px 3px rgba(57, 94, 169, 0.45);
}
.nav-index-foat-my p a {
  color: #fff;
  font-size: 0.3rem;
  margin-top: 0.15rem;
  display: inline-block;
}
.rem-item {
  padding: 0.2rem 0.3rem;
  width: 33.333333%;
  float: left;
}
.rem-item img {
  width: 100%;
  height: 1.8rem;
}
.rem-item .price {
  font-size: 12px;
  color: #ff3838;
  text-align: center;
}
.rem-item .name {
  font-size: 12px;
  text-align: center;
}
.form-item {
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #e9e9e9;
}
.form-item label {
  display: block;
  width: 2rem;
  font-size: 0.38rem;
}
.form-item div {
  width: 100%;
}
.form-item input {
  border: none;
  font-size: 0.38rem;
  margin-bottom: 0;
}
.mui-popup-backdrop {
  z-index: 99999999;
  opacity: 1;
}
.dialog {
  position: absolute;
  top: 30vh;
  z-index: 99999999999;
  width: 80vw;
  margin: 0 10vw;
  background: #fff;
  padding: 1rem 0.4rem;
  border-radius: 0.2rem;
}
.btn-success {
  text-align: center;
  background: #4cd964;
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.4rem;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
}
</style>
