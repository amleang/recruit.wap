<template>
    <div>
        <head-title header="我的补贴"></head-title>
        <div class="content">
            <div class="content-ul">
                <div class="ul-empt">暂无补贴</div>
            </div>
        </div>
        <consult></consult>
    </div>
</template>

<script>
import headTitle from "@/components/header";
import consult from "@/components/consult";
export default {
  components: {
    headTitle,
    consult
  },
  mounted(){
    document.title = "我的补贴";
  }
};
</script>

<style scoped>
.content {
  padding-top: 1.2rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.content-ul {
  padding: 0 0.3rem;
  background-color: #fff;
  overflow: auto;
}
.ul-empt {
  text-align: center;
  font-size: 0.5rem;
  color: #0894ec;
  height: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px #f1f1f1 solid;
}
</style>
