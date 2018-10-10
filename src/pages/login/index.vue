<template>
  <div class="page">
    <div class="banner">
      <img src="https://cos.niuzhigongzuo.com/loginImg/6637547d-934d-4be4-b1c7-fe12fc067681-1538531818467.jpg" alt="">
    </div>
    <div class="content-block">
      <div class="recommend-way">
        推荐登陆方式
      </div>
      <div class="reg">
        <div class="button button-fill login-btn">
          <i class="mui-icon mui-icon-weixin"></i>微信快捷登录
        </div>
      </div>
      <div class="footer-login-btn">
        使用手机登录注册
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page {
  background-color: #fff;
}
.banner {
  width: 85%;
  margin: 0.7rem auto;
  text-align: center;
}
.banner img {
  width: 100%;
  height: 100%;
}
.content-block {
  padding: 0 0.7rem;
}
.content-block .recommend-way {
  text-align: center;
  font-size: 0.45rem;
  color: #6d6d72;
}
.reg {
  padding: 0.7rem 0;
}
.login-btn {
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: center;
  background: #0894ec;
  color: #fff;
  font-size: 0.45rem;
  border-radius: 5px;
}
.footer-login-btn {
  text-align: center;
  color: #0894ec;
  font-size: 0.4rem;
}
</style>
