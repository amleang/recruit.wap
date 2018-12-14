<template>
  <div class="bottom">
    <a
      :class="page=='/'?'active':''"
      @click="$router.push({path:'/'})"
    >
      <span class="mui-icon icon iconfont icon-gongzuo"></span>
      <div>找工作</div>
    </a>
    <a
      :class="page=='rem'?'active':''"
      @click="$router.push({path:'/recommend'})"
    >
      <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
      <div>推荐有奖</div>
    </a>
    <a
      :class="page=='user'?'active':''"
      @click="$router.push({path:'/user'})"
    >
      <span class="mui-icon icon iconfont icon-yonghu"></span>
      <div>个人中心</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.bottom {
  position: fixed;
  z-index: 99999999;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5rem;
  padding-top:0.1rem;
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
  color: rgb(0, 122, 255)!important;
}
</style>
