<template>
  <div>
    <head-title header="我的关注"></head-title>
    <div class="content">
      <div class="content-ul" v-if="list.length==0">
        <div class="ul-empt">您还没有关注过任何岗位哦！</div>
      </div>
      <div v-else class="recruit-list">
        <div class="mui-table-view">
          <div class="recruit-item" v-for="(item,index) in list" :key="index" @click="detail_handle(item)">
            <img :src="item.cover" alt="" class="item-left">
            <div class="item-con">
              <div class="title">{{item.name}}</div>
              <div class="subtitle">{{item.subname}}</div>
              <div class="price">
                <span>{{item.salaryStart}}-{{item.salaryEnd}}</span> 元/月
              </div>
            </div>
            <div class="item-right" v-if="item.type==1">
              <div class="btn-one">工价</div>
              <div class="btn-span">{{item.laborPrice}}元/小时</div>
            </div>
            <div class="item-right" v-if="item.type==2">
              <div class="btn-one">补贴</div>
              <div class="btn-span">{{item.subsidyExplain}}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <consult></consult>
  </div>
</template>

<script>
import headTitle from "@/components/header";
import consult from "@/components/consult";
import { checkLogin, getWxItem } from "@/components/lib/util";
export default {
  components: {
    headTitle,
    consult
  },
  data() {
    return {
      list: [{}]
    };
  },
  mounted() {
    document.title = "我的关注";
    if (!this.checkLogin()) {
      this.$router.push({
        path: "/login?ref=follow"
      });
      return;
    } else {
      const wxUser = this.getWxItem();
      this.http
        .get("/api/app/attentionlist?unionid=" + wxUser.unionid)
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
    detail_handle(item) {
      this.$router.push({ path: "/jobdetail?id=" + item.recruitid });
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

.recruit-list {
  padding-bottom: 50px;
}
.recruit-item {
  display: flex;
  padding: 0 10px;
  border: 1px #f1f1f1 solid;
}
.recruit-item .nothing {
  font-size: 0.4rem;
  text-align: center;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
}
.recruit-item .item-left {
  width: 29%;
  height: 2rem;
  padding: 0.2rem 0.2rem 0.2rem 0.1rem;
}
.recruit-item .item-con {
  flex: 1;
  width: 100%;
}
.recruit-item .item-con .title {
  font-size: 0.4rem;
  line-height: 0.7rem;
  height: 0.7rem;
  overflow: hidden;
}
.recruit-item .item-con .subtitle {
  font-size: 0.35rem;
}
.recruit-item .item-con .price {
  font-size: 0.35rem;
}
.recruit-item .item-con .price span {
  color: rgb(255, 106, 15);
  font-family: "ArialMT";
}
.recruit-item .item-right {
  margin-left: 10px;
  width: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.recruit-item .item-right .btn-one {
  height: 0.65rem;
  overflow: hidden;
  background-color: #0894ec !important;
  line-height: 0.65rem;
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.recruit-item .item-right .btn-span {
  font-size: 12px;
  color: rgb(255, 106, 15);
  height: 0.65rem;
  line-height: 0.65rem;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e6e6e6;
}
.mui-table-view-cell a {
  display: flex;
}
.mui-table-view {
  margin-bottom: 1.2rem;
}
.mui-table-view .mui-media-object {
  line-height: 50px;
  max-width: 100%;
  height: 50px;
}
</style>
