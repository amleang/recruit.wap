<template>
  <div>
    <div class="bar-nav">
      <span
        class="mui-icon mui-icon-arrowleft btn-back"
        @click="back_handle"
      ></span>
      <div class="head-title">
        {{header}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      oldUrl: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path;
      console.log("oldUrl=>", vm.oldUrl);
    });
  },
  methods: {
    back_handle() {
      if (window.history.length <= 1) this.$router.push({ path: "/" });
      else this.$router.back();
    }
  }
};
</script>

<style scoped>
.bar-nav {
  height: 1.2rem;
  background-color: #39a9f0;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
}
.btn-back {
  position: absolute;
  left: 0.2rem;
  color: #0894ec;
  font-size: 0.8rem;
}
.head-title {
  width: 100%;
  text-align: center;
  font-size: 0.45rem;
  color: #fff;
}
</style>
