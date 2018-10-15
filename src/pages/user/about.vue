<template>
    <div>
        <head-title header="牛职工作网"></head-title>
        <div class="content">
            <p class="al-2em">牛职工作是普通员工求职，可以拿到更多补贴的平台，是牛职合作伙伴建立管道事业的平台，牛职公司同200多家劳务公司成为战略合作伙伴，平台企业多，补贴多，操作规范，拥有多位10年以上人力资源从业者参与，善于研究和分析未来市场，运用先进技术，保障求职者和合作伙伴的权益，牛职工作是人力资源行业中，为求职者真正考虑收入的首创产品！</p>
            <p class="al-2em">公司使命：“让求职者高薪就业，从业者终身受益”。</p>
        </div>
    </div>
</template>

<script>
import headTitle from "@/components/header";
export default {
  components: {
    headTitle
  },
  mounted(){
     document.title = "牛职工作网";
  }
};
</script>

<style scoped>
.content {
  padding: 0 0.3rem;
  padding-top: 1.5rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
</style>
