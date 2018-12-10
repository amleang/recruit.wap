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
          <label for="">姓名</label>
          <div>
            <input
              type="text"
              v-model="loginForm.username"
              placeholder="请输入姓名"
            >
          </div>
        </div>
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
              v-model="loginForm.code"
              placeholder="请输入验证码"
            >
          </div>
          <div
            class="form-yzm"
            @click="sendSMS_handle"
          >
            {{isSend?time:'获取验证码'}}
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
import { setWxItem } from "@/components/lib/util";
import { wxhideMenu } from "@/components/lib/wxShare";
export default {
  data() {
    return {
      isType: true,
      isSend: false,
      time: 60,
      loginForm: {
        username: "",
        phone: "",
        code: "",
        idCode: ""
      }
    };
  },
  mounted() {
    document.title = "用户登录";
    const status = this.$route.query.status;
    if (status) {
      this.isType = false;
    } else {
      this.isType = true;
    }
    this.wxhideMenu();
  },
  methods: {
    wxhideMenu,
    /**
     * 发送验证码
     */
    sendSMS_handle() {
      if (!this.isSend) {
        if (!this.loginForm.phone) {
          this.mui.toast("请输入手机号码！", { duration: "long", type: "div" });
          return;
        }
        if (!/^1[34578]\d{9}$/.test(this.loginForm.phone)) {
          this.mui.toast("手机号码有误", {
            duration: "long",
            type: "div"
          });
          return;
        }
        this.isSend = true;
        this.time = 60;
        const wxUser = this.getWxItem();
        //调取code
        this.http
          .post("/api/app/sendsms", {
            unionid: wxUser.unionid,
            phone: this.loginForm.phone
          })
          .then(res => {
            if (res.code == 200) {
              this.rescode = res.data;
              this.mui.toast("验证码已成功发送到您的手机上！", {
                duration: "long",
                type: "div"
              });
            } else {
              this.mui.toast(res.msg, {
                duration: "long",
                type: "div"
              });
            }
          });
        this.time_chuange();
      }
    },
    time_chuange() {
      this.interTime = setInterval(() => {
        if (this.time != 0) {
          this.time--;
        } else {
          this.isSend = false;
          clearInterval(this.interTime);
        }
      }, 1000);
    },
    /**
     * 登录并注册
     */
    login_reg_handle() {
      if (!this.loginForm.username) {
        this.mui.toast("请输入姓名！", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (!this.loginForm.phone) {
        this.mui.toast("请输入手机号码！", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.loginForm.phone)) {
        this.mui.toast("手机号码有误", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (this.loginForm.code) {
        if (rescode) {
          if (form.code != rescode) {
            this.mui.toast("验证码收入有误，请重新输入！", {
              duration: "long",
              type: "div"
            });
            return;
          }
        }
      } else {
        this.mui.toast("请输入验证码！", {
          duration: "long",
          type: "div"
        });
      }
      if (!this.loginForm.idCode) {
        this.mui.toast("请输入身份证号码", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (
        !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.loginForm.idCode)
      ) {
        this.mui.toast("身份证输入不合法", {
          duration: "long",
          type: "div"
        });
        return;
      }
      var refForm = JSON.parse(localStorage.getItem("djrhtemp"));

      var postFomr = this.loginForm;
      postFomr.unionid = refForm.unionid;
      postFomrstatus = 1;
      this.http.post("/api/app/savereguser", postFomr).then(res => {
        if (res.code == 200) {
          //注册成功
          refForm.username = postFomr.username;
          refForm.status = 1;
          refForm.phone = postFomr.phone;
          refForm.idCode = postFomr.idCode;
          this.setWxItem(refForm);
          var params = this.$router.query.ref;
          if (params) {
            params = params.replace("|", "?");
            this.$router.push({ path: "/" + params });
          } else {
            this.$router.push({ path: "/" });
          }
        } else {
          this.mui.toast(res.msg, {
            duration: "long",
            type: "div"
          });
        }
      });
    },
    isWechat() {
      let ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == "micromessenger";
    },
    /**
     * 登陆
     */
    login_handle() {
      if (!this.isWechat()) {
        this.mui.toast("请在微信中打开该页面", {
          duration: "long",
          type: "div"
        });
        return;
      }
      const wx = {
        appid: "wx1124be6bc1512298"
      };
      var ref = this.$route.query.ref;
      console.log("ref=>",ref);
      //获取code
      const refUrl = encodeURI("http://www.szdejurenhe.com/ref");
      location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        wx.appid +
        "&redirect_uri=" +
        refUrl +
        "&response_type=code&scope=snsapi_userinfo&state=" +
        ref +
        "#wechat_redirect";
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
