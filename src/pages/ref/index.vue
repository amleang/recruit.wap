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
    this.http.get("/api/app/oathuser?code=" + this.code).then(res => {
      alert(JSON.stringify(res));
    });
  },
  methods: {
    setWxItem
  }
};
</script>

<style>
</style>
