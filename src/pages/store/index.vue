<template>
  <div>
    <head-title header="我的门店"></head-title>
    <div class="content">
      <div class="con-card">
        <div>
          <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="link-info">
          <div class="coName">潍坊英杰人力</div>
          <div class="phone">罗经理：<a href="tel:13031675675">13031675675</a></div>
          <div class="phone">罗经理：<a href="tel:13031675675">13031675675</a></div>
        </div>
      </div>
      <div class="address">山东省 潍坊市 经济开发区 鸢飞路1518号鑫润香岸花园26号楼15号房</div>
      <div class="tencent-map">
        <iframe src="https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:36.7561416626,119.1249237061;title:潍坊英杰人力;addr:潍坊市经济开发区鸢飞路1518号鑫润香岸花园26号楼15号房&key=DE2BZ-47CRU-5LPVV-BXXAB-MWLRQ-D7FXQ&referer=recruit" frameborder="0"></iframe>
      </div>

      <div class="serviceLink">
        平台客服电话：<a href="tel:400-829-1113">400-829-1113</a>
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
  mounted() {
    document.title = "我的门店";
  }
};
</script>

<style scoped>
.content {
  padding: 0 0.5rem;
  padding-top: 1.5rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.con-card {
  display: flex;
}
.link-info {
  margin-left: 0.2rem;
}
.con-card img {
  width: 2.5rem;
  height: 2.5rem;
}
.coName {
  font-size: 0.45rem;
  line-height: 1rem;
}
.phone {
  font-size: 0.45rem;
  line-height: 0.8rem;
}
.address {
  color: #939393;
  margin-top: 0.25rem;
  height: 1.5rem;
  font-size: 0.4rem;
  line-height: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.tencent-map {
  overflow: hidden;
  width: 100%;
  height: 7rem;
  margin-top: 0.25rem;
}
.tencent-map iframe {
  width: 100%;
  height: 100%;
}
.serviceLink {
  text-align: center;
  font-size: 0.35rem;
  margin: 0 auto 1rem;
  margin-top: 2rem;
}
</style>
