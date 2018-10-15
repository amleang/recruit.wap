<template>
    <div>
        <head-title header="余额明细"></head-title>
        <div class="content">
            <div class="logo">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <div class="user-wrap">
                <div class="name">安良</div>
            </div>
            <div class="money-wrap">
                <div class="balance">您的余额为: </div>
                <div class="money"><span class="money-type">￥</span><span class="money-amount">0</span></div>
                <div class="look-detail"><a href="/balance-detail?action=jump">查看明细</a></div>
            </div>
        </div>
    </div>
</template>

<script>
import headTitle from "@/components/header";
export default {
  components: {
    headTitle
  },
  mounted(){
     document.title = "余额明细";
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
  width: 45%;
  display: block;
  margin: 1rem auto;
  margin-top: -1rem;
}
.logo img {
  max-width: 100%;
}
.user-wrap {
  transform: translateX(-50%);
  top: 25%;
  position: absolute;
  left: 50%;
}
.user-wrap .name {
  font-weight: bold;
  font-size: 0.5rem;
}
.money-wrap {
  transform: translate(-50%, -50%);
  top: 50%;
  position: absolute;
  left: 50%;
}
.money-wrap .balance {
  margin-bottom: 0.8rem;
  font-size: 0.6rem;
  color: #3d4145;
  font-weight: lighter;
}
.money-wrap .money {
  text-align: center;
}
.money-wrap .money .money-type {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
}
.money-wrap .money .money-amount {
  font-size: 1.6rem;
  color: rgb(0, 130, 255);
}
.money-wrap .look-detail {
  margin-top: 1rem;
  font-size: 0.5rem;
  text-align: center;
}
</style>
