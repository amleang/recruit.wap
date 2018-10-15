<template>
  <div class="nav-index-foat">
    <p class="nav-index-text" @click="$router.push({path:'/store'})">
      <a class="external">免费<br>咨询</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.3rem;
  bottom: 2rem;
  z-index: 9999999;
}
.nav-index-foat p {
  width: 1.4rem;
  height: 1.4rem;
  background-color: rgba(57, 94, 169, 0.8);
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 10px 3px rgba(57, 94, 169, 0.45);
}
.nav-index-foat p a {
  color: #fff;
  font-size: 0.3rem;
  margin-top: 0.15rem;
  display: inline-block;
}
</style>
