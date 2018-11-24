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
                            <input type="text" placeholder="请输入手机号码">
                        </div>
                    </div>
                    <div class="form-item">
                        <label for="verificationCode">验证码</label>
                        <div>
                            <input id="verificationCode" name="verificationCode" type="text" placeholder="请输入验证码">
                        </div>
                        <div class="form-yzm">
                            获取验证码
                        </div>
                    </div>
                </div>
                <div class="reg">
                    <div class="button button-fill login-btn">
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
    return {};
  },
  mounted() {
    document.title = "更换手机号码";
  }
};
</script>

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
.content-block{
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
