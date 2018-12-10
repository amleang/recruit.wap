<template>
  <div>
    <div class="bar-nav">
      <span
        class="mui-icon mui-icon-arrowleft btn-back"
        @click="back_handle"
      ></span>
      <div class="head-title">
        <marquee
          direction="left"
          width="100%"
          behavior="scroll"
          scrollamount="5"
          scrolldelay="5"
          onmouseout="this.start()"
          onmouseover="this.stop()"
        >
          <span class="ad-slogan">只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保证自己的利益！！！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;只有在平台报名才能保</span>
        </marquee>
      </div>
    </div>
    <div class="content">
      <div class="mui-slider">
        <div
          class="mui-slider-group mui-slider-loop"
          v-if="form.imgs.length>1"
        >
          <!--支持循环，需要重复图片节点-->
          <div class="mui-slider-item mui-slider-item-duplicate"><a><img :src="form.imgs[form.imgs.length-1]" /></a></div>
          <div
            class="mui-slider-item"
            v-for="(item,index) in form.imgs"
            :key="index"
          ><a><img :src="item" /></a></div>
          <!--支持循环，需要重复图片节点-->
          <div class="mui-slider-item mui-slider-item-duplicate"><a><img :src="form.imgs[0]" /></a></div>
        </div>
        <div
          class="mui-slider-group"
          v-else
        >
          <div class="mui-slider-item"><a><img :src="form.imgs[0]" /></a></div>
        </div>
        <div
          class="mui-slider-indicator"
          v-if="form.imgs.length>1"
        >
          <div
            :class="`mui-indicator ${index==0?'mui-active' :''}`"
            v-for="(item,index) in form.imgs"
            :key="index"
          ></div>
        </div>
      </div>
      <div class="company">
        <div class="title">
          <div class="name">{{form.name}}</div>
          <div
            class="price"
            v-if="form.type==1"
          >
            <span>{{form.laborPrice}}</span>元/小时
          </div>
          <div
            class="price"
            v-if="form.type==2"
          >
            <span>{{form.salaryStart}}-{{form.salaryEnd}}</span>元
          </div>
        </div>
        <div class="subtitle">
          {{form.subname}}
        </div>
        <div
          class="job-stop"
          v-if="form.active==0"
        >
          <span>暂停招聘</span>
        </div>
        <div class="sign-num">已报名{{form.signupCount?form.signupCount:0}}人
        </div>
      </div>
      <re-panel title="补贴">
        <div slot="reright">
          <div
            style="font-size:0.3rem;"
            v-if="form.subsidys.length>1"
            @click="isSubsidys=!isSubsidys"
          >{{isSubsidys?'隐藏企业全部补贴':'查看企业全部补贴'}}" ></div>
        </div>
        <div>
          <div v-html="form.subsidys[0].value"></div>

          <div
            v-if="isSubsidys"
            style="border-top:1px dashed #adadad;margin-top:0.45rem;padding-top:0.3rem;"
          >
            <div
              v-if="index!=0"
              v-for="(item,index) in form.subsidys"
              :key="index"
            >
              <p>补贴：</p>
              <div v-html="item.value"></div>
            </div>
          </div>
        </div>
      </re-panel>
      <re-panel title="工资福利">
        <div v-html="form.wages">
        </div>
      </re-panel>
      <re-panel title="岗位介绍">
        <div v-html="form.post">
        </div>
      </re-panel>
      <re-panel title="注意事项">
        <div v-html="coinfo.attention">
        </div>
      </re-panel>
      <re-panel title="企业介绍">
        <div v-html="form.introduce">
        </div>
      </re-panel>
      <re-panel title="岗位推荐">
        <div style="margin:0 -0.5rem;">
          <div
            class="rem-item"
            v-for="(item,index) in recommends"
            :key="index"
            @click="rem_item_handle(item)"
          >
            <div>
              <img
                :src="item.cover"
                alt=""
              >
            </div>
            <div class="price">{{item.salaryStart}}-{{item.salaryEnd}}</div>
            <div class="name">{{item.name}}</div>
          </div>
          <div style="clear:both;"></div>
        </div>
      </re-panel>

      <div class="con-bottom"></div>
    </div>
    <div
      class="share"
      v-if="isShare"
      @click="isShare=false;"
    >
      <img
        src="@/assets/images/share.gif"
        alt=""
      >
    </div>
    <div
      class="nav-index-foat"
      @click="$router.push({path:'/store'})"
    >
      <p class="nav-index-text">
        <a class="external">免费<br>咨询</a>
      </p>
    </div>

    <div
      class="nav-index-foat-my"
      @click="correction_show_handle"
    >
      <p class="nav-index-text-my">
        <a class="external">纠错<br>报告</a>
      </p>
    </div>

    <div class="foot-bottom">
      <div
        class="apply-btn"
        @click="signup_handle"
      >免费报名</div>
      <div
        class="follow-btn"
        v-if="form.att==0"
        @click="attention_handle"
      >关注</div>
      <div
        class="follow-btn"
        v-else
        @click="attention_del_handle"
      >取消关注</div>
      <div
        class="share-btn"
        @click="isShare=true;"
      >分享</div>
    </div>
    <div
      v-if="dialog"
      class="mui-popup-backdrop"
    ></div>
    <div
      v-if="dialog"
      class="dialog"
    >
      <div
        class="dialog-close"
        @click="dialog_close_handle"
      ><span class="mui-icon mui-icon-closeempty"></span></div>
      <div class="form-item">
        <label for="">邀请人姓名</label>
        <div>
          <input
            type="text"
            v-model="enrollForm.inviter"
            maxlength="10"
            placeholder="请输入邀请人姓名"
          >
        </div>
      </div>

      <div class="form-item">
        <label for="">邀请码</label>
        <div>
          <input
            type="text"
            v-model="enrollForm.inviterCode"
            placeholder="请输入邀请码"
          >
        </div>
      </div>
      <div
        class="btn-success"
        @click="enroll_submit_handle"
      >确定</div>
    </div>
    <!-- 纠错表单 -->
    <div
      v-if="dialogCorrection"
      class="mui-popup-backdrop"
    ></div>
    <div
      v-if="dialogCorrection"
      class="dialog"
    >
      <div
        class="dialog-close"
        @click="correction_close_handle"
      ><span class="mui-icon mui-icon-closeempty"></span></div>
      <div class="form-item1">
        <label for="">内容</label>
        <div>
          <textarea
            style="width:5rem;"
            v-model="correctionForm.content"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div class="form-item2">
        <label
          for=""
          style="width:1.5rem;"
        >图片</label>
        <div style="max-width:5.5rem;">
          <div
            class="avatar-uploader"
            v-for="(item,index) in correctionForm.imgs"
            :key="index"
          >
            <div class="form-img">
              <i
                class="mui-icon mui-icon-trash"
                @click="delete_img_handle(index)"
              ></i>
              <img
                :src="item"
                alt=""
              >
            </div>
          </div>
          <div
            class="avatar-uploader"
            @click="uplaod_handle"
          >
            <div class="form-img">
              <span class="mui-icon mui-icon-plusempty"></span>
            </div>
          </div>
          <div style="clear: both;"></div>

        </div>
      </div>
      <div
        class="btn-success"
        @click="correctionSubmit"
      >提交</div>
    </div>
    <input
      style="display:none;"
      type="file"
      id="upload"
      accept="image/gif,image/jpeg,image/jpg,image/png"
      @change="img_update_handle"
    >
  </div>
</template>

<script>
import axios from "axios";
import rePanel from "@/components/panel";
import consult from "@/components/consult";
import { checkLogin, getWxItem } from "@/components/lib/util";
import { wxShareConfig } from "@/components/lib/wxShare";
export default {
  components: {
    rePanel,
    consult
  },
  data() {
    return {
      dialog: false,
      isSubsidys: false,
      dialogCorrection: false,
      isShare: false,
      form: {
        imgs: [""],
        subsidys: [{}],
        att: 0
      },
      /**报名表单 */
      enrollForm: {
        recruitid: "",
        unionid: "",
        inviter: "",
        inviterCode: ""
      },
      /**纠错form */
      correctionForm: {
        content: "",
        imgs: []
      },
      /**注意事项 */
      coinfo: { attention: "" },
      recommends: [{}]
    };
  },

  mounted() {
    document.body.scrollTop = 0;
    const id = this.$route.query.id;
    if (!id) {
      this.mui.toast("获取信息失败!", { duration: "long", type: "div" });
      return;
    }
    //获得slider插件对象
    var slider = this.mui(".mui-slider");
    slider.slider({
      interval: 3000
    });
    const wxUser = this.getWxItem();
    const unionid = wxUser ? wxUser.unionid : "";
    this.http
      .get("/api/app/recruititem", { params: { id: id, unionid: unionid } })
      .then(res => {
        console.log("res=>", res);
        if (res.code == 200) {
          this.form = res.data;
          document.title = this.form.name;
          this.wxShareConfig(this.form.name);
        } else {
          this.mui.toast(res.msg, { duration: "long", type: "div" });
        }
      });
    this.http.get("/api/app/recommendlist").then(res => {
      console.log("recommend=>", res);
      if (res.code == 200) {
        this.recommends = res.data;
      } else this.mui.toast(res.msg, { duration: "long", type: "div" });
    });
    this.http.get("/api/app/co").then(res => {
      console.log("co=>", res);
      if (res.code == 200) {
        this.coinfo = res.data[0];
      } else this.mui.toast(res.msg, { duration: "long", type: "div" });
    });
  },
  methods: {
    checkLogin,
    getWxItem,
    wxShareConfig,
    /**免费报名 */
    signup_handle() {
      if (this.form.active == 0) {
        this.mui.toast("暂停招聘，无法报名！", {
          duration: "long",
          type: "div"
        });
        return;
      }
      if (!this.checkLogin()) {
        this.$router.push({
          path: "/login?ref=jobdetail|id=" + this.$route.query.id
        });
        return;
      }
      this.dialog = true;
      this.enrollForm = {
        recruitid: "",
        unionid: "",
        inviter: "",
        inviterCode: ""
      };
    },
    /**关注 */
    attention_handle() {
      if (!this.checkLogin()) {
        this.$router.push({
          path: "/login?ref=jobdetail|id=" + this.$route.query.id
        });
        return;
      }
      let wxUser = this.getWxItem();
      let attentionForm = {
        unionid: wxUser.unionid,
        recruitid: this.$route.query.id
      };
      this.http.post("/api/app/attention", attentionForm).then(res => {
        if (res.code == 200) {
          this.mui.toast("已关注!", { duration: "long", type: "div" });
          this.form.att = 1;
        } else this.mui.toast(res.msg, { duration: "long", type: "div" });
      });
    },
    /**取消关注 */
    attention_del_handle() {
      let wxUser = this.getWxItem();
      let attentionForm = {
        unionid: wxUser.unionid,
        recruitid: this.$route.query.id
      };
      this.http.post("/api/app/attentiondel", attentionForm).then(res => {
        if (res.code == 200) {
          this.mui.toast("已取消关注!", { duration: "long", type: "div" });
          this.form.att = 0;
        }
      });
    },
    back_handle() {
      this.$router.push("/");
    },
    dialog_close_handle() {
      this.dialog = false;
    },
    /**免费报名 */
    enroll_submit_handle() {
      let wxUser = this.getWxItem();
      this.enrollForm.recruitid = this.$route.query.id;
      this.enrollForm.unionid = wxUser.unionid;
      this.http.post("/api/app/enroll", this.enrollForm).then(res => {
        if (res.code == 200) {
          this.mui.toast("报名成功!", { duration: "long", type: "div" });
          this.dialog = false;
        } else {
          this.mui.toast(res.msg, { duration: "long", type: "div" });
        }
      });
    },
    correction_show_handle() {
      if (!this.getWxItem()) {
        this.$router.push({
          path: "/login?ref=jobdetail|id=" + this.$route.query.id
        });
        return;
      }
      this.dialogCorrection = true;
      this.correctionForm = {
        content: "",
        imgs: []
      };
    },
    correction_close_handle() {
      this.dialogCorrection = false;
    },
    /**
     * 推荐商品跳转
     */
    rem_item_handle(item) {
      this.$router.push({ path: "/jobdetail?id=" + item.id });
    },
    /**
     * 上传图片
     */
    uplaod_handle(index) {
      document.getElementById("upload").click();
    },
    /**
     * 上传图片
     */
    img_update_handle(e) {
      debugger;
      if (this.correctionForm.imgs.length >= 5) {
        this.mui.toast("纠错图片最多只能上传5张", {
          duration: "long",
          type: "div"
        });
        return;
      }
      var self = this;
      if (e.target.files.length == 0) return;
      let file = e.target.files[0];
      /* eslint-disable no-undef */
      let param = new FormData(); // 创建form对象
      param.append("file", file, file.name); // 通过append向form对象添加数据
      param.append("chunk", "0"); // 添加form表单中其他数据
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      // 添加请求头
      axios.post("/api/upload", param, config).then(response => {
        if (response.data.code == 200) {
          this.correctionForm.imgs.push(response.data.data);
          e.target.value = "";
        } else
          this.mui.toast(response.data.msg, { duration: "long", type: "div" });
      });
    },
    /**删除图片 */
    delete_img_handle(index) {
      this.correctionForm.imgs.splice(index, 1);
    },
    /**纠错提交 */
    correctionSubmit() {
      if (!this.correctionForm.content) {
        this.mui.toast("请输入纠错内容", { duration: "long", type: "div" });
        return;
      }
      let postData = this.correctionForm;
      postData.recruitid = this.$route.query.id;
      this.http.post("/api/app/correction", postData).then(res => {
        if (res.code == 200) {
          this.dialogCorrection = false;
          this.mui.toast("纠错信息已经提交", { duration: "long", type: "div" });
        } else this.mui.toast(res.msg, { duration: "long", type: "div" });
      });
    }
  }
};
</script>
<style>
.mui-toast-container {
  bottom: 50% !important;
  z-index: 10000000000;
}
.panle-content p {
  margin-bottom: 1px;
}
</style>
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
  padding: 0 1rem;
  margin-top: 0.12rem;
}
.mui-slider {
  max-height: 5rem;
}
.mui-slider-item {
  height: 5rem !important;
}

.content {
  padding-top: 1.21rem;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #eee;
}
.company {
  padding: 0.2rem 0.5rem;
  color: #333333;
  margin-bottom: 0.2rem;
  background-color: #fff;
  position: relative;
}
.company .title {
  display: flex;
  align-items: center;
  font-size: 0.43rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.company .title .name {
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.company .title .price {
  text-align: right;
  width: 40%;
}
.company .title .price span {
  color: #ff3838;
}
.company .subtitle {
  font-size: 0.38rem;
  color: #aaaaaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sign-num {
  text-align: right;
  color: #aaaaaa;
  font-size: 0.38rem;
}
.con-bottom {
  margin-bottom: 1.5rem;
}
.foot-bottom {
  position: absolute;
  left: 0;
  bottom: 0.3rem;
  width: 100%;
  display: flex;
  align-items: center;
}
.foot-bottom div {
  height: 0.75rem;
  line-height: 0.75rem;
  border: 0.015rem solid #39a9f0;
  border-radius: 10px;
  width: 30%;
  margin-left: 2.5%;
  text-align: center;
  background-color: #fff;
  color: #39a9f0;
}
.apply-btn {
  background-color: #0894ec !important;
  border: none !important;
  color: #fff !important;
}
/* 页面的免费咨询 */
.nav-index-foat {
  position: fixed;
  right: 0.3rem;
  bottom: 4rem;
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

.nav-index-foat-my {
  position: fixed;
  right: 0.3rem;
  bottom: 2rem;
  z-index: 9999999;
}
.nav-index-foat-my p {
  width: 1.4rem;
  height: 1.4rem;
  background-color: rgba(57, 94, 169, 0.8);
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 10px 3px rgba(57, 94, 169, 0.45);
}
.nav-index-foat-my p a {
  color: #fff;
  font-size: 0.3rem;
  margin-top: 0.15rem;
  display: inline-block;
}
.rem-item {
  padding: 0.2rem 0.3rem;
  width: 33.333333%;
  float: left;
}
.rem-item img {
  width: 100%;
  height: 1.8rem;
}
.rem-item .price {
  font-size: 12px;
  color: #ff3838;
  text-align: center;
}
.rem-item .name {
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.form-item {
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #e9e9e9;
}
.form-item label {
  display: block;
  width: 2.6rem;
  font-size: 0.38rem;
}
.form-item div {
  width: 100%;
}
.form-item input {
  border: none;
  font-size: 0.38rem;
  margin-bottom: 0;
}
.mui-popup-backdrop {
  z-index: 99999999;
  opacity: 1;
}
.dialog {
  position: absolute;
  top: 30vh;
  z-index: 99999999999;
  width: 80vw;
  margin: 0 10vw;
  background: #fff;
  padding: 1rem 0.4rem;
  border-radius: 0.2rem;
}
.dialog-close {
  position: absolute;
  right: 0.5rem;
  top: 0.2rem;
  font-size: 0.5rem;
  width: 0.8rem;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
}
.btn-success {
  text-align: center;
  background: #4cd964;
  color: #fff;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.4rem;
  border-radius: 0.1rem;
  margin-top: 0.5rem;
}
.form-item1 {
  display: flex;
  min-height: 1.2rem;
  margin-top: 10px;
  border-bottom: 1px solid #e9e9e9;
}
.form-item1 label {
  display: block;
  width: 2rem;
  font-size: 0.38rem;
}
.form-item1 div {
  width: 100%;
}
.form-item2 {
  display: flex;
  min-height: 1.2rem;
  margin-top: 10px;
  border-bottom: 1px solid #e9e9e9;
}
.form-item2 label {
  display: block;
  width: 2rem;
  font-size: 0.38rem;
}
.avatar-uploader {
  position: relative;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
}
.avatar-uploader i {
  position: absolute;
  color: #f00;
}
.form-img {
  border: 1px dashed #d9d9d9;
  width: 120px !important;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-img img {
  max-width: 100%;
  amx-height: 100%;
}
.share {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  left: 0;
  z-index: 9999999999;
}
.share img {
  position: absolute;
  right: 15px;
  top: 0;
}
.job-stop {
  position: absolute;
  top: 30%;
  right: 0.333333rem;
  min-width: 2rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.35rem;
  font-weight: bold;
  background-color: rgba(101, 166, 232, 0.64);
  color: #fff;
  -webkit-transform: rotate(-25deg);
  transform: rotate(-25deg);
  -webkit-border-radius: 0.026667rem;
  -moz-border-radius: 0.026667rem;
  -ms-border-radius: 0.026667rem;
  -o-border-radius: 0.026667rem;
  padding: 0 0.35rem;
}
.job-stop span {
  color: #e80608;
  letter-spacing: 0.1rem;
}
</style>
