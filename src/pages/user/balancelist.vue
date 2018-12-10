<template>
  <div>
    <head-title header="余额详情"></head-title>
    <div class="content">
      <div class="content-ul" v-if="list.length==0">
        <div class="ul-empt">暂无任何余额记录！</div>
      </div>
      <div v-else>
        <div class="form-item" v-for="(item,index) in list" :key="index">
          <div class="money">
            <div class="time">{{formatDate(item.updateAt)}}</div>
            <div class="price">+{{item.price}}</div>
          </div>
          <div class="remarks">
            {{item.name==""?"推荐记录":item.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headTitle from "@/components/header";
import { checkLogin, getWxItem, formatDate } from "@/components/lib/util";
import { wxhideMenu } from "@/components/lib/wxShare";
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
    document.title = "余额详情";
    this.wxhideMenu();
    if (!this.checkLogin()) {
      this.$router.push({
        path: "/login?ref=balancelist"
      });
      return;
    } else {
      const wxUser = this.getWxItem();
      this.http
        .get("/api/app/balancelist?unionid=" + wxUser.unionid)
        .then(res => {
          if (res.code == 200) {
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
    formatDate,
    wxhideMenu
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
  height: 1.5rem;
  align-items: center;
}
.form-item .money .time {
  width: 50%;
  font-size: 0.45rem;
}
.form-item .money .price {
  font-size: 1rem;
  color: #f00;
  width: 50%;
  text-align: right;
}
.form-item .remarks {
  font-size: 0.4rem;
  height: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
