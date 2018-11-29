<template>
    <div>
        <head-title header="我的信息"></head-title>
        <div class="content-block">
            <div class="form">
                <div class="form-item">
                    <label for="">姓名</label>
                    <div>
                        <input type="text" v-model="form.username" maxlength="6" placeholder="请输入姓名">
                    </div>
                </div>
                <div class="form-item">
                    <label for="">手机号</label>
                    <div>
                        <span>{{form.phone}}</span>
                    </div>
                </div>
                <div class="form-item">
                    <label for="">身份证号码</label>
                    <div>
                        <input type="text" v-model="form.idCode" maxlength="18" placeholder="请输入身份证号码">
                    </div>
                </div>
            </div>
            <div class="bottom-btn">
                <div class="cancel" @click="$router.push({path:'/user'})">取消</div>
                <div class="submit" @click="submit_handle">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
import headTitle from "@/components/header";
import { checkLogin, getWxItem, setWxItem } from "@/components/lib/util";
export default {
  components: {
    headTitle
  },
  data() {
    return {
      form: {}
    };
  },
  mounted() {
    document.title = "我的信息";
    if (!this.checkLogin()) {
      this.$router.push({
        path: "/login?ref=myinfo"
      });
      return;
    } else {
      const wxUser = this.getWxItem();
      this.http.get("/api/app/myinfo?unionid=" + wxUser.unionid).then(res => {
        if (res.code == 200) {
          this.form = res.data;
        } else {
          this.mui.toast(res.msg, { duration: "long", type: "div" });
        }
      });
    }
  },
  methods: {
    checkLogin,
    getWxItem,
    setWxItem,
    submit_handle() {
      if (!this.form.username) {
        this.mui.toast("请输入姓名", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (!this.form.idCode) {
        this.mui.toast("请输入身份证号码", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.form.idCode)) {
        this.mui.toast("身份证输入不合法", {
          duration: "long",
          type: "div"
        });
        return;
      }
      this.http.post("/api/app/setuserinfo", this.form).then(res => {
        if (res.code == 200) {
          this.setWxItem(this.form);
          this.mui.toast("修改成功", {
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
.content-block {
  padding-top: 1.2rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.form {
  padding: 0 0.7rem;
  background-color: #fff;
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
.form-item span {
  border: none;
  font-size: 0.4rem;
  padding: 0.5rem 0.4rem;
}
.form-item input {
  border: none;
  font-size: 0.4rem;
}
.bottom-btn {
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
}
.bottom-btn .cancel {
  width: 42%;
  margin-left: 4%;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  background: #f6383a;
  color: #fff;
  font-size: 0.4rem;
}
.bottom-btn .submit {
  width: 46%;
  margin-left: 4%;
  height: 1.2rem;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  background: #4cd964;
  color: #fff;
  font-size: 0.4rem;
}
</style>

