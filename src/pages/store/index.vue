<template>
  <div>
    <head-title header="我的门店"></head-title>
    <div class="content">
      <div class="con-card">
        <div>
          <img
            src="@/assets/images/logo.png"
            alt=""
          >
        </div>
        <div class="link-info">
          <div class="coName">{{form.coName}}</div>
          <div
            class="phone"
            v-for="(item,index) in form.links"
            :key="index"
          >
            {{item.link}}<a :href="`tel:${item.phone}`">{{item.phone}}</a></div>
        </div>
      </div>
      <div class="qrcode">
        <img
          :src="form.qrcode"
          alt=""
        >
      </div>
      <div class="address">{{form.address}}</div>
      <div class="tencent-map">
        <iframe
          v-if="isLoad"
          :src="`https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${form.lat},${form.lng};title:${form.coName};addr:${form.address}&key=DE2BZ-47CRU-5LPVV-BXXAB-MWLRQ-D7FXQ&referer=recruit`"
          frameborder="0"
        ></iframe>
      </div>

      <div class="serviceLink">
        平台客服电话：<a :href="`tel:${form.platPhone}`">{{form.platPhone}}</a>
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
  data() {
    return {
      isLoad: false,
      form: {
        coName: "",
        cover: ""
      }
    };
  },
  mounted() {
    document.title = "我的门店";
    this.http.get("/api/app/co").then(res => {
      console.log("res=>", res);
      this.form = res.data[0];
      this.isLoad = true;
    });
  }
};
</script>

<style scoped>
.content {
  padding: 0 0.5rem;
  padding-top: 1.5rem;
  height: 100vh;
  width: 100vw;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.phone {
  font-size: 0.45rem;
  line-height: 0.8rem;
}
.phone a {
  margin-left: 10px;
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
  height: 10rem;
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
.qrcode {
  width: 85%;
  margin: 0.7rem auto;
  text-align: center;
}
.qrcode img{
  width:100%;
  height:100%;
}
</style>
