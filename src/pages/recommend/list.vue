<template>
    <div>
        <head-title header="我的推荐"></head-title>
        <div class="content">
            <div class="content-ul" v-if="list.length==0">
                <div class="ul-empt">您还没有推荐过任何好友哦！</div>
            </div>
            <div v-else>
                <div class="form-item" v-for="(item,index) in list" :key="index">
                    <div class="money">
                        <div class="name">{{item.username}}</div>
                        <div class="phone">{{item.phone}}</div>
                    </div>
                    <div class="money">
                        <div class="time"> {{formatDate(item.updateAt)}}</div>
                        <div class="status" style="color:#f00;" v-if="item.status==1">推荐成功</div>
                        <div class="status" v-else>未成功</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headTitle from "@/components/header";
import { checkLogin, getWxItem, formatDate } from "@/components/lib/util";
export default {
  components: {
    headTitle
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    document.title = "我的推荐";
    if (!this.checkLogin()) {
      this.$router.push({
        path: "/login?ref=balancelist"
      });
      return;
    } else {
      const wxUser = this.getWxItem();
      this.http
        .get("/api/app/myrecommend?unionid=" + wxUser.unionid)
        .then(res => {
          if (res.code == 200) {
            console.log("res=>", res.data);
            this.list = res.data;
          } else {
            this.mui.toast(res.msg, { duration: "long", type: "div" });
          }
        });
    }
  },
  methods: {
    checkLogin,
    getWxItem,
    formatDate
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
  background-color: #fff;
}
.content-ul {
  padding: 0 0.3rem;
  background-color: #fff;
  overflow: auto;
}
.ul-empt {
  text-align: center;
  font-size: 0.5rem;
  color: #0894ec;
  height: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px #f1f1f1 solid;
}
.form-item {
  border-bottom: 1px #f1f1f1 solid;
  padding: 0 0.5rem;
  color: #3d4145;
}
.form-item .money {
  display: flex;
  height: 1rem;
  align-items: center;
}
.form-item .money .name {
  width: 50%;
  font-size: 0.45rem;
}
.form-item .money .phone {
  width: 50%;
  font-size: 0.45rem;
  text-align: right;
}
.form-item .money .time {
  width: 50%;
  font-size: 0.4rem;
}
.form-item .money .status {
  width: 50%;
  font-size: 0.45rem;
  text-align: right;
}
</style>

