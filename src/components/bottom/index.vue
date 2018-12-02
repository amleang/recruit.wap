<template>
    <div class="bottom">
        <a @click="$router.push({path:'/'})">
            <span class="mui-icon icon iconfont icon-gongzuo"></span>
            <div>找工作</div>
        </a>
         <a @click="$router.push({path:'/recommend'})">
            <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
            <div>推荐有奖</div>
        </a>
         <a @click="$router.push({path:'/user'})">
            <span class="mui-icon icon iconfont icon-yonghu"></span>
            <div>个人中心</div>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom{
    position: fixed;
    z-index: 10000000000000000;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height:100px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
}
.bottom a{
    display: block;
    width:33.33333333%;
    text-align: center;
    color: rgb(146, 146, 146);
}
.bottom a span{
    font-size:40px;
}
.bottom a div{
    font-size:20px;
}
</style>
