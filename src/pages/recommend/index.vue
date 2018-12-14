<template>
  <div class="page">
    <!-- <nav class="mui-bar mui-bar-tab">
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
    </nav> -->
    <bottom :page="'rem'"></bottom>
    <head-title header="推荐有奖"></head-title>

    <div class="content">
      <div class="promptRefer">
        <img
          src="@/assets/images/recommend.png"
          alt=""
        >
      </div>
      <p class="text-center recommend-txt">推荐好友入职满3天可领取100元推荐费</p>
      <p class="text-center recommend-txt">平台核对与打款需一周左右</p>
      <div
        class="content-block"
        @click="just_handle"
      >
        立即推荐
      </div>
      <div
        class="refer-ranking"
        @click="ranking_handle"
      >
        查看排行榜
      </div>
    </div>
    <div
      class="nav-index-foat"
      @click="$router.push({path:'/store'})"
    >
      <p class="nav-index-text">
        <a class="external">免费<br>咨询</a>
      </p>
    </div>

    <div
      class="nav-index-foat-my"
      @click="$router.push({path:'/recommendlist'})"
    >
      <p class="nav-index-text-my">
        <a class="external">我的<br>推荐</a>
      </p>
    </div>

    <div
      v-if="dialog"
      class="mui-popup-backdrop"
    ></div>
    <div
      v-if="dialog"
      class="dialog"
    >
      <div
        class="dialog-close"
        @click="dialog_close_handle"
      ><span class="mui-icon mui-icon-closeempty"></span></div>
      <div class="form-item">
        <label for="">姓名</label>
        <div>
          <input
            type="text"
            v-model="form.username"
            maxlength="10"
            placeholder="请输入推荐人姓名"
          >
        </div>
      </div>

      <div class="form-item">
        <label for="">手机号</label>
        <div>
          <input
            type="text"
            v-model="form.phone"
            maxlength="11"
            placeholder="请输入推荐人手机号"
          >
        </div>
      </div>
      <div
        class="btn-success"
        @click="submit_handle"
      >确定</div>
    </div>
    <ranking-form
      :dialog="rankingdialog"
      :unionid="unionid"
      @dialogHandle="dialog_handle"
    >

    </ranking-form>
  </div>
</template>

<script>
import headTitle from "@/components/header";
import bottom from "@/components/bottom";
import { checkLogin, getWxItem } from "@/components/lib/util";
import { wxShareConfig } from "@/components/lib/wxShare";
import rankingForm from "@/components/ranking";
export default {
  components: {
    headTitle,
    rankingForm,
    bottom
  },
  data() {
    return {
      dialog: false,
      rankingdialog: false,
      unionid: "",
      form: {
        username: "",
        phone: ""
      }
    };
  },
  mounted() {
    document.title = "推荐好友";
    this.wxShareConfig();
    this.isLogin = this.checkLogin();
    if (!this.isLogin) {
      this.$router.push({ path: "/login?ref=recommend" });
      return;
    }
  },
  methods: {
    checkLogin,
    getWxItem,
    wxShareConfig,
    home_handle() {
      this.$router.push({ path: "/" });
    },
    recommend_handle() {
      if (this.isLogin) this.$router.push({ path: "/recommend" });
      else this.$router.push({ path: "/login?ref=recommend" });
    },
    my_handle() {
      if (this.isLogin) this.$router.push({ path: "/user" });
      else this.$router.push({ path: "/login?ref=user" });
    },
    just_handle() {
      this.dialog = true;
    },
    ranking_handle() {
      const wxUser = this.getWxItem();
      this.unionid = wxUser.unionid;
      this.rankingdialog = true;
    },
    dialog_handle() {
      this.rankingdialog = false;
    },
    dialog_close_handle() {
      this.dialog = false;
    },

    submit_handle() {
      const wxUser = this.getWxItem();
      if (!this.form.username) {
        this.mui.toast("请输入推荐人姓名", { duration: "long", type: "div" });
        return;
      }
      if (!this.form.phone) {
        this.mui.toast("请输入推荐人手机号", { duration: "long", type: "div" });
        return;
      }
      if (!/^1[34578]\d{9}$/.test(this.form.phone)) {
        this.mui.toast("手机号码有误", {
          duration: "long",
          type: "div"
        });
        return false;
      }
      let postData = {
        username: this.form.username,
        phone: this.form.phone,
        unionid: wxUser.unionid
      };
      this.http.post("/api/app/recommend", postData).then(res => {
        if (res.code == 200) {
          this.mui.toast("推荐成功，等待系统核实", {
            duration: "long",
            type: "div"
          });
          this.dialog = false;
        } else this.mui.toast(res.msg, { duration: "long", type: "div" });
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
  color: #f00;
  font-size: 0.45rem;
  font-weight: bold;
  margin-bottom:0.5rem;
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
.form-item {
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #e9e9e9;
}
.form-item label {
  display: block;
  width: 2.6rem;
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
.dialog-close {
  position: absolute;
  right: 0.5rem;
  top: 0.2rem;
  font-size: 0.5rem;
  width: 0.8rem;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
}
.btn-success {
  text-align: center;
  background: #4cd964;
  color: #fff;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.4rem;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
}
</style>
