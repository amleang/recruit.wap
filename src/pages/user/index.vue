<template>
  <div class="content">
    <div class="header-img">
      <div class="avatar">
        <div class="user-img">
          <img src="https://cos.niuzhigongzuo.com/avatar/785e7cd5-62dd-4a07-a727-40c53af6da70-1538326932685.png" alt="">
        </div>
        <div class="man-box">
          <div>安良</div>
          <div>15050474495</div>
        </div>
        <div class="my_qrCode">
          <i class="iconfont icon-erweima" style="font-size: 0.6rem;"></i>
        </div>
      </div>
    </div>
    <div class="list-user">
      <div class="item-content">

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
  background-color:#efeff4;
}
.header-img {
  background-image: url("../../assets/images/user02.png");
  background-size: 100% 100%;
  overflow: hidden;
}

.header-img .avatar {
  margin: 0.5rem 0 0.5rem 0.5rem;
  display: flex;
}
.avatar .user-img {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 5px;
  overflow: hidden;
}
.avatar .user-img img {
  display: block;
  width: 100%;
}
.avatar .man-box {
  padding-left: 0.25rem;
  font-size: 0.4rem;
  width: 100%;
  flex: 1;
}
.avatar .man-box div {
  height: 0.8rem;
  line-height: 0.8rem;
}
.avatar .my_qrCode {
  margin: 0 0.8rem 0 auto;
  align-self: center;
  color: #000;
}
.list-user {
  margin-bottom: 0.25rem;
}
</style>
