<template>
  <div>
    <!--  <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item " @click="home_handle">
        <span class="mui-icon icon iconfont icon-gongzuo"></span>
        <span class="mui-tab-label">找工作</span>
      </a>
      <a class="mui-tab-item" @click="recommend_handle">
        <span class="mui-icon icon iconfont icon-tuijianyoujiang"></span>
        <span class="mui-tab-label">推荐有奖</span>
      </a>
      <a class="mui-tab-item mui-active" @click="my_handle">
        <span class="mui-icon icon iconfont icon-yonghu"></span>
        <span class="mui-tab-label">个人中心</span>
      </a>
    </nav> -->
    <bottom :page="'user'"></bottom>
    <div class="content">
      <div class="header-img" @click="$router.push({path:'/myinfo'})">
        <div class="top"></div>
        <div class="avatar">
          <div class="user-img">
            <img :src="`/head/${wxUser.headimgurl?wxUser.headimgurl:'djrh.jpg'}`" alt="">
          </div>
          <div class="man-box">
            <div>{{wxUser.username}}</div>
            <div>{{wxUser.phone}}</div>
          </div>
          <!--  <div class="my_qrCode">
            <i class="iconfont icon-erweima" style="font-size: 0.6rem;"></i>
          </div> -->
        </div>
      </div>
      <div class="list-user">
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-wallet_icon"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/balance'})">我的余额</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-yinxingqia-copy"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/bankcard'})">绑定补贴卡</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
      </div>

      <div class="list-user">
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-job"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/jobapplys'})">我的工作</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-icon-guanzhu"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/follow'})">我的关注</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-butie"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/subsidy'})">我的补贴</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
      </div>

      <div class="list-user">
        <!-- <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-weixin"></i>
          </div>
          <div class="item-title">已绑定【赵安良 】</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div> -->
        <div class="item-content" @click="$router.push({path:'/phone'})">
          <div class="user-icon">
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="item-title">更换手机</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
      </div>

      <div class="list-user">
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-mendian"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/store'})">我的门店</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-shouji"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/download'})">下载App</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
        <div class="item-content">
          <div class="user-icon">
            <i class="iconfont icon-guanyu"></i>
          </div>
          <div class="item-title" @click="$router.push({path:'/about'})">关于我们</div>
          <div class="user-icon-right">
            <i class="mui-icon mui-icon-arrowright"></i>
          </div>
        </div>
      </div>

      <div class="login-bottom" @click="outlogin_handle">退出登录</div>

    </div>
  </div>

</template>

<script>
import { checkLogin, getWxItem } from "@/components/lib/util";
import bottom from "@/components/bottom";
export default {
  components: {
    bottom
  },
  data() {
    return {
      isLogin: false,
      wxUser: {}
    };
  },
  mounted() {
    document.title = "个人中心";
    this.isLogin = this.checkLogin();
    if (!this.isLogin) {
      this.$router.push({ path: "/login?ref=user" });
      return;
    }
    //获取用户信息
    this.wxUser = this.getWxItem();
    console.log("wxuser=>", this.wxUser);
  },
  methods: {
    checkLogin,
    getWxItem,
    home_handle() {
      this.$router.push({ path: "/" });
    },
    recommend_handle() {
      if (this.isLogin) this.$router.push({ path: "/recommend" });
      else this.$router.push({ path: "/login?ref=recommend" });
    },
    my_handle() {
      if (this.isLogin) this.$router.push({ path: "/user" });
      else this.$router.push({ path: "/login?ref=user" });
    },
    outlogin_handle() {
      this.mui.confirm(
        "确定要退出吗？",
        "系统提示",
        ["取消", "确定"],
        function(d) {
          if (d.index == 1) {
            window.localStorage.removeItem("hjct_user");
            console.log(window.localStorage.getItem("hjct_user"));
            this.$router.push("/login?ref=user");
          }
        },
        "div"
      );
    }
  }
};
</script>

<style scoped>
.mui-bar {
  box-shadow: none;
}
.content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #efeff4;
}
.header-img {
  background-image: url("../../assets/images/user02.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.header-img .top {
  height: 0.5rem;
  line-height: 0.5rem;
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
  margin-bottom: 0.15rem;
  background: #fff;
  padding: 0 0.3rem;
}
.item-content {
  display: flex;
  align-items: center;
  height: 1.2rem;
  border-bottom: 1px solid #f0f0f0;
}
.user-icon {
  font-size: 0.4rem;
  color: #0894ec;
  font-weight: bold;
  width: 0.6rem;
}
.item-title {
  color: #333333;
  font-size: 0.35rem;
  width: 100%;
  flex: 1;
}
.user-icon-right i {
  font-size: 0.58rem;
  color: #ccc;
}
.login-bottom {
  margin-bottom: 1.5rem;
  padding: 0 0.3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  background-color: #fff;
  color: #0894ec;
  font-size: 0.5rem;
}
</style>
