<template>
  <div class="page">
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item " @click="home_handle">
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <span class="mui-tab-label">找工作</span>
      </a>
      <a class="mui-tab-item mui-active" @click="recommend_handle">
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <span class="mui-tab-label">推荐有奖</span>
      </a>
      <a class="mui-tab-item" @click="my_handle">
        <span class="mui-icon icon iconfont icon-yonghu"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav>
    <header class="bar-nav">
      <span class="mui-icon mui-icon-arrowleft btn-back"></span>
      <div class="head-title">
        推荐有奖
      </div>
    </header>
    <div class="content">
      <div class="promptRefer">
        <img src="@/assets/images/recommend.png" alt="">
      </div>
      <p class="text-center recommend-txt">推荐好友入职满3天可领取100元推荐费</p>
      <p class="text-center recommend-txt">平台核对与打款需一周左右</p>
      <div class="content-block">
        立即推荐
      </div>
      <div class="refer-ranking">
        查看排行榜
      </div>
    </div>
    <div class="nav-index-foat">
      <p class="nav-index-text">
        <a class="external">免费<br>咨询</a>
      </p>
    </div>

    <div class="nav-index-foat-my">
      <p class="nav-index-text-my">
        <a class="external">我的<br>推荐</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.title = "推荐好友";
  },
  methods: {
    home_handle() {},
    recommend_handle() {},
    my_handle() {}
  }
};
</script>

<style scoped>
.bar-nav {
  height: 1.2rem;
  background-color: rgba(8, 148, 246, 0.6);
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
}
.btn-back {
  margin-left: 0.2rem;
  color: #0894ec;
  font-size: 0.8rem;
}
.head-title {
  width: 100%;
  margin-left: -1rem;
  text-align: center;
  font-size: 0.45rem;
  color: #fff;
}

.content {
  padding-top: 1.2rem;
}
.promptRefer {
  width: 40%;
  display: block;
  margin: 1rem auto;
}
.promptRefer img {
  max-width: 100%;
}
.recommend-txt {
  color: #847d7d;
  font-size: 0.35rem;
}
.text-center {
  text-align: center;
}
.content-block {
  margin: 0 0.7rem;
  border-radius: 0.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  text-align: center;
  background: #67bcf6;
  color: #fff;
  font-size: 0.45rem;
}
.refer-ranking {
  margin: 0 0.7rem;
  margin-top: 0.4rem;
  border-radius: 0.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  text-align: center;
  background: #67bcf6;
  color: #fff;
  font-size: 0.45rem;
}
.mui-bar {
  box-shadow: none;
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
</style>
