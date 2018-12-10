<template>
  <div class="content">
    <a
      href="javascript:;"
      class="download-App"
    >
      <div class="load-wrap">
        <p>仅供安卓机使用</p>
        <div @click="down_handle">立即下载</div>
      </div>
    </a>
    <div
      class="wx-layer-bg"
      v-if="iswx"
    >
      <div class="wx-layer">
        <div class="allow-top"></div>
        <p>
          <span>第一步: 点击右上角</span>
          <img
            src="@/assets/images/wx1.jpg"
            alt=""
          >
        </p>
        <p>
          <span>第二步: 使用浏览器打开</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iswx: false
    };
  },
  mounted() {},
  methods: {
    down_handle() {
      this.iswx = this.isWechat();
      if (!this.iswx) location.href = "http://www.szdejurenhe.com/app/djrh.apk";
    },
    isWechat() {
      let ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == "micromessenger";
    }
  }
};
</script>

<style scoped>
.content {
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.download-App {
  display: block;
  height: 100%;
  background: url("../../assets/images/downloadImg.jpg") no-repeat 0 0/100% 100%;
  text-decoration: none;
  font-size: 0;
  -webkit-tap-highlight-color: transparent;
}
.download-App .load-wrap {
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
}
.download-App .load-wrap p {
  font-size: 0.35rem;
  text-align: center;
  color: #fff;
  margin-bottom: 0.5rem;
}
.download-App .load-wrap div {
  font-size: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid #f5b375;
  display: inline-block;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(to right, #f0831e, #e9af77);
  -webkit-background-clip: text;
  font-weight: bold;
  border-radius: 0.5rem;
}
.wx-layer-bg {
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}
.wx-layer {
  width: 9rem;
  background: rgba(255, 255, 255, 0.85);
  position: absolute;
  z-index: 10;
  top: 15%;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 0.35rem;
  padding: 0.9rem 0.5rem 0.9rem 1.4rem;
  box-sizing: border-box;
  border-radius: 50%;
}
.wx-layer .allow-top {
  position: absolute;
  top: -2.1rem;
  right: 0.5rem;
  transform: rotate(21deg);
  width: 3rem;
  height: 3rem;
  border-right: 0.1rem solid rgba(255, 255, 255, 1);
  border-bottom:0.065rem solid transparent;
  border-radius: 0 0 2.5rem 0;
}
.wx-layer p {
  overflow: hidden;
  margin-bottom: 10px;
  font-size: 0.45rem;
}
.wx-layer p span {
  vertical-align: middle;
}
.wx-layer .allow-top:before {
    content: '';
    width: .3rem;
    height: .08rem;
    background: rgba(255,255,255,1);
    position: absolute;
    top: -4px;
    right: -2px;
    transform-origin: right;
    transform: rotate(247deg);
}
.wx-layer .allow-top:after {
    content: '';
      width: .3rem;
    height: .08rem;
    background: rgba(255,255,255,1);
    z-index: 99;
    position: absolute;
    top: -3px;
    right: -3px;
    transform: rotate(-50deg);
    transform-origin: right;
}
.wx-layer p img {
    width: 1.2rem;
    vertical-align: middle;
    margin-left: 5px;
}
</style>
