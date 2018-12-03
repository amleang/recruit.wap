<template>
  <div class="loading">
    获取授权加载中...
  </div>
</template>

<script>
import { setWxItem } from "@/components/lib/util";
export default {
  data() {
    return {
      code: ""
    };
  },
  mounted() {
    document.title = "用户授权";
    this.code = this.$route.query.code;

    this.http.get("/api/app/oathuser?code=" + this.code).then(re => {
      alert(JSON.stringify(re));
    });
  },
  methods: {
    setWxItem
  }
};
</script>

<style scoped>
.loading{
    width:100vw;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
}
</style>
