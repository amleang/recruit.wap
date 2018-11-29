<template>
  <div>
    <head-title header="更换手机号码"></head-title>
    <div class="content">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
      </div>
      <div class="content-block">
        <div class="form">
          <div class="form-item">
            <label for="">手机号码</label>
            <div>
              <input type="number" maxlength="11" v-model="form.phone" placeholder="请输入手机号码">
            </div>
          </div>
          <div class="form-item">
            <label for="verificationCode">验证码</label>
            <div>
              <input v-model="form.code" type="number" maxlength="4" placeholder="请输入验证码">
            </div>
            <div class="form-yzm" @click="sendSMS_handle">
              {{isSend?time:'获取验证码'}}
            </div>
          </div>
        </div>
        <div class="reg">
          <div class="button button-fill login-btn" @click="ok_handle">
            确认更换
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import headTitle from "@/components/header";
import consult from "@/components/consult";
import { checkLogin, getWxItem, formatDate } from "@/components/lib/util";
export default {
  components: {
    headTitle,
    consult
  },
  data() {
    return {
      isSend: false,
      time: 60,
      interTime: null,
      rescode: "",
      form: {
        phone: "",
        code: ""
      }
    };
  },
  mounted() {
    document.title = "更换手机号码";
  },
  methods: {
    checkLogin,
    getWxItem,
    formatDate,
    sendSMS_handle() {
      debugger;
      if (!this.isSend) {
        if (!this.form.phone) {
          this.mui.toast("请输入手机号码！", { duration: "long", type: "div" });
          return;
        }
        if (!/^1[34578]\d{9}$/.test(this.form.phone)) {
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
            phone: this.form.phone
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
    ok_handle() {
      debugger;
      if (!this.form.phone) {
        this.mui.toast("请输入手机号码！", { duration: "long", type: "div" });
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.form.phone)) {
        this.mui.toast("手机号码有误", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (this.form.code) {
        if (this.rescode) {
          if (this.form.code != this.rescode) {
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
        return;
      }
      const wxUser = this.getWxItem();
      this.http
        .post("/api/app/updatephone", {
          unionid: wxUser.unionid,
          phone: this.form.phone,
          code: this.form.code
        })
        .then(res => {
          if (res.code == 200) {
            this.mui.toast("手机号码修改成功！", {
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
    }
  }
};
</script>
<style>
.mui-toast-container {
  bottom: 50% !important;
  z-index: 10000000000;
}
</style>

<style scoped>
.content {
  padding-top: 1.2rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 60%;
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
.content-block {
  background: #fff;
  padding: 0.3rem 0.5rem;
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
