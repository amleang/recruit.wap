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
npm 
<style>
@import url("./assets/css/mui.min.css");
@import url("./assets/css/iconfont.css");
/* @import url("./assets/css/mui.picker.css");
@import url("./assets/css/mui.poppicker.css"); */
/* @import url("//at.alicdn.com/t/font_816809_f8ojixb913b.css?v=20180928215215"); */
* {
  touch-action: pan-y;
}
body {
  width: 100%;
  font-family: "华文细黑";
  max-width: 480px;
  min-width: 320px;
  margin: 0 auto;
}
</style>
