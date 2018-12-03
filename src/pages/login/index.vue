<template>
  <div class="page">
    <div class="banner">
      <img
        src="@/assets/images/logo.png"
        alt=""
      >
    </div>
    <div
      class="content-block"
      v-if="isType"
    >
      <div class="recommend-way">
        推荐登陆方式
      </div>
      <div class="reg">
        <div
          class="button button-fill login-btn"
          @click="login_handle"
        >
          <i class="mui-icon mui-icon-weixin"></i>微信快捷登录
        </div>
      </div>
    </div>
    <div
      class="content-block"
      v-else
    >
      <div class="form">
        <div class="form-item">
          <label for="">手机号码</label>
          <div>
            <input
              type="text"
              v-model="loginForm.phone"
              placeholder="请输入手机号码"
            >
          </div>
        </div>
        <div class="form-item">
          <label for="verificationCode">验证码</label>
          <div>
            <input
              id="verificationCode"
              name="verificationCode"
              type="text"
              v-model="loginForm.verificationCode"
              placeholder="请输入验证码"
            >
          </div>
          <div class="form-yzm">
            获取验证码
          </div>
        </div>
        <div class="form-item">
          <label for="">身份证</label>
          <div>
            <input
              type="text"
              v-model="loginForm.idCode"
              placeholder="请输入身份证号码"
            >
          </div>
        </div>
      </div>
      <div class="reg">
        <div
          class="button button-fill login-btn"
          @click="login_reg_handle"
        >
          登录/注册
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isType: true,
      loginForm: {
        phone: "",
        verificationCode: ""
      }
    };
  },
  mounted() {
    const status = this.$route.query.status;
    if (status) {
      this.isType = false;
    } else {
      this.isType = true;
    }
  },
  methods: {
    login_reg_handle() {
      this.mui.toast("登陆成功", { duration: "long", type: "div" });
    },
    isWechat() {
      let ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == "micromessenger";
    },
    /**
     * 登陆
     */
    login_handle() {
      alert("开始");
      alert(this.isWechat());
      const wx = {
        appid: "wx1124be6bc1512298"
      };
      //获取code
      const refUrl = encodeURI("http://localhost:7012/ref");
      location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        wx.appid +
        "&redirect_uri=" +
        refUrl +
        "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";

      /*  this.http
        .get(
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
            wx.appid +
            "&redirect_uri=" +
            refUrl +
            "&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
        )
        .then(res => {
          alert(JSON.stringify(res));
          console.log("login=>", JSON.stringify(res));
        }); */
    }
  }
};
</script>
<style>
.mui-toast-container {
  top: 50% !important;
}
</style>

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
.form-item {
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
  border-bottom: 1px solid #e9e9e9;
}
.form-item label {
  display: block;
  width: 2rem;
  font-size: 0.4rem;
}
.form-item input {
  border: none;
  font-size: 0.4rem;
}
.form-yzm {
  position: absolute;
  right: 0.7rem;
  border-left: 1px solid #e9e9e9;
  width: 3rem;
  text-align: center;
  font-size: 0.4rem;
  color: #0794ec;
}
</style>
