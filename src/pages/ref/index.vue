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
    debugger;
    document.title = "用户授权";
    this.code = this.$route.query.code;
    const status = this.$route.query.status;
    console.log("status=>",status);
    this.http.get("/api/app/oathuser?code=" + this.code).then(res => {
      this.http.post("/api/app/savewxuser", res.data).then(res2 => {
        if (res2.data.status == 0) {
          //跳转到登录页面继续完善
          this.$router.push({path:"/login?status=true"});
          localStorage.setItem("djrhtemp",JSON.stringify(res2.data));
        } else {
          this.setWxItem(res2.data);
          if (status) {
            this.status = status.replace("|", "?");
            this.$router.push({ path: "/" + status });
          } else {
            this.$router.push({ path: "/" });
          }
        }
      });
    });
  },
  methods: {
    setWxItem
  }
};
</script>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
}
</style>
