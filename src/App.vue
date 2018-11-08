<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("./assets/css/mui.min.css");
@import url("./assets/css/iconfont.css");
/* @import url("./assets/css/mui.picker.css");
@import url("./assets/css/mui.poppicker.css"); */
/* @import url("//at.alicdn.com/t/font_816809_f8ojixb913b.css?v=20180928215215"); */
</style>
