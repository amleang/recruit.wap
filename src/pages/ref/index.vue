<template>
  <div>
    <div>
      <input
        type="text"
        v-model="oldUrl"
      >
    </div>
    <div>code:{{code}}</div>
    <div id="url">url:{{url}}
      <input v-model="url">
    </div>
    <div>res:{{res}}</div>
  </div>
</template>

<script>
import axios from "axios";
import { setWxItem } from "@/components/lib/util";
export default {
  data() {
    return {
      code: "",
      url: "",
      res: ""
    };
  },
  mounted() {
    this.code = this.$route.query.code;
    this.http
      .get(
        "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx1124be6bc1512298&secret=091885925a2232c6b7bf89f2eed30972&code=" +
          this.code +
          "&grant_type=authorization_code"
      )
      .then(res => {
        console.log("res=>", res);
      });
    /*  this.http.get("/api/app/oathuser?code=" + this.code).then(res => {
      alert(JSON.stringify(res));
    }); */
  },
  methods: {
    setWxItem
  }
};
</script>

<style>
</style>
