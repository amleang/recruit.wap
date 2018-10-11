<template>
  <div class="content">
    <div class="header-img">
      <div class="top"></div>
      <div class="avatar">
fdsafsdafsafaf
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.header-img {
  background-image: url("../../assets/images/user02.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.header-img .top {
  line-height: 0.5rem;
  height: 0.5rem;
}
.header-img .avatar {
  margin: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
}
</style>
