<template>
    <div class="re-panel">
        <div class="title">
            <div class="name">{{title}}</div>
            <div class="right">
                <slot name="reright"></slot>
            </div>
        </div>
        <div class="content panle-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.re-panel {
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.title {
  height: 1.2rem;
  border-bottom: 1px solid #eee;
  padding: 0 0.5rem;
  font-size: 0.42rem;
  color: #0a8ddf;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.title .name {
  width: 60%;
}
.title .right {
  width: 40%;
  text-align: right;
  flex: 1;
}
.content {
  padding: 0.2rem 0.5rem;
  font-size: 0.35rem;
  color: #333;
}

</style>
