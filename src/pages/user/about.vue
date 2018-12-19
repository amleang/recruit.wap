<template>
  <div>
    <head-title header="关于我们"></head-title>
    <div class="content" v-html="abstract">
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
      abstract: ""
    };
  },
  mounted() {
    document.title = "关于我们";
    this.http.get("/api/app/co").then(res => {
      if (res.code == 200) {
        this.abstract = res.data[0].abstract;
      } else {
        this.mui.toast(res.msg, { duration: "long", type: "div" });
      }
    });
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
  padding: 0 0.3rem;
  padding-top: 1.5rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.content img {
  max-width: 100%;
}
</style>
