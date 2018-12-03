<template>
  <div>
    <div>
      <input
        type="text"
        v-model="oldUrl"
      >
    </div>
    <div>code:{{code}}</div>
   
    <div>res:{{res}}</div>
  </div>
</template>

<script>
import { setWxItem } from "@/components/lib/util";
export default {
  data() {
    return {
      code: "",
      oldUrl: "",
      res:""
    };
  },
  mounted() {
    this.code = this.$route.query.code;
    this.oldUrl = location.href;
    /* this.http.get("/api/app/oathuser?code=" + this.code).then(re => {
      alert(JSON.stringify(re));
    
    }); */
  },
  methods: {
    setWxItem
  }
};
</script>

<style>
</style>
