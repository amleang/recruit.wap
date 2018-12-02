<template>
  <div>fdafaff</div>
</template>

<script>
import {  setWxItem } from "@/components/lib/util";
export default {
  mounted() {
     const code= this.$route.query.code;
     alert("code=>"+code);
     const wx={
         appid:"wx1124be6bc1512298",
         secret:"091885925a2232c6b7bf89f2eed30972"
     }
     this.http.get("https://api.weixin.qq.com/sns/oauth2/access_token?appid="+wx.appid+"&secret="+wx.secret+"&code="+code+"&grant_type=authorization_code").then(res=>{
         console.log(res);
         alert(JSON.stringify(res));
         if(res.errcode){
              this.mui.toast("获取用户授权失败！", { duration: "long", type: "div" });
         }
         else{
             this.http.get("https://api.weixin.qq.com/sns/userinfo?access_token="+res.access_token+"&openid="+res.openid+"&lang=zh_CN").then(tres=>{
                 this.http.post("/api/app/savewxuser",tres).then(sres=>{
                     if(sres.status==0){
                         //跳转登录页
                         this.$router.push({path:"/login?status=con"});
                     }
                     else{
                        this.setWxItem(sres);
                        this.$router.push({path:"/"});
                     }
                 })
             })
         }
     })
  },
  methods:{
      setWxItem
  }
};
</script>

<style>
</style>
