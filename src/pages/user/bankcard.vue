<template>
  <div>
    <head-title header="我的补贴银行卡"></head-title>
    <div class="content">
      <div class="content-form">
        <div class="form-item">
          <label for="">姓名</label>
          <div>
            <input
              type="text"
              v-model="form.name"
              placeholder="持卡人与入厂姓名一致"
            >
          </div>
        </div>

        <div class="form-item">
          <label for="">身份证号</label>
          <div>
            <input
              type="text"
              v-model="form.idCard"
              placeholder="开户人身份证号"
            >
          </div>
        </div>

        <div class="form-item">
          <label for="">卡号</label>
          <div>
            <input
              type="text"
              v-model="form.cardNumber"
              maxlength="23"
              @keyup="card_keyup_handle"
              placeholder="开户人银行卡号"
            >
          </div>
        </div>

        <div class="form-item">
          <label for="">银行</label>
          <div class="form-select">
            <select v-model="form.bank">
              <option
                v-for="(item,index) in banks"
                :key="index"
                :value="item"
              >{{item}}</option>
            </select>
          </div>
        </div>
        <div class="form-item">
          <label for="">开户地区</label>
          <div class="form-item-select">
            <div class="form-select">
              <select
                v-model="form.province"
                @change="province_handle"
              >
                <option
                  v-for="(item,index) in provinces"
                  :key="index"
                  :value="item.text"
                >{{item.text}}</option>
              </select>
            </div>
            <div class="form-select">
              <select v-model="form.city">
                <option
                  v-for="(item,index) in citys"
                  :key="index"
                  :value="item.text"
                >{{item.text}}</option>
              </select>
            </div>
          </div>

        </div>

      </div>
      <div class="bottom-btn">
        <div
          class="btn-item"
          style="padding-right: 0.35rem;"
        >
          <div
            class="button-danger"
            @click="$router.back()"
          >取消</div>
        </div>
        <div
          class="btn-item"
          style="padding-left: 0.35rem;"
        >
          <div
            class="button-success"
            @click="submit_handle"
          >提交</div>
        </div>
      </div>
    </div>
    <consult></consult>
  </div>
</template>

<script>
import headTitle from "@/components/header";
import { cityData } from "@/assets/js/city.data.js";
import consult from "@/components/consult";
import { getWxItem } from "@/components/lib/util";
import { wxhideMenu } from "@/components/lib/wxShare";
export default {
  components: {
    headTitle,
    consult
  },
  data() {
    return {
      isLoad: false,
      form: {
        id: "",
        name: "",
        idCard: "",
        cardNumber: "",
        bank: "请选择银行",
        province: "省份",
        city: "城市"
      },
      provinces: [],
      citys: [
        {
          value: "0",
          text: "城市"
        }
      ],
      banks: [
        "请选择银行",
        "中国建设银行",
        "中国农业银行",
        "中国工商银行",
        "中国银行",
        "中国招商银行",
        "中国光大银行",
        "中信银行",
        "中国民生银行",
        "浦发银行",
        "广发银行",
        "中国邮政储蓄银行"
      ]
    };
  },
  mounted() {
    document.title = "我的补贴银行卡";
    this.wxhideMenu();
    this.provinces = this.cityData();
    const wxUser = this.getWxItem();
    if (this.getWxItem()) {
      this.http.get("/api/bank/" + wxUser.unionid).then(res => {
        if (res.code == 200) {
          if (res.data) {
            this.form = res.data;
            var flist = this.provinces.filter(
              x => x.text == this.form.province
            )[0];
            this.citys = flist.children;
            this.citys.unshift({
              value: "0",
              text: "城市"
            });
          }
        }
      });
    } else {
      this.$router.push({
        path: "/login?ref=bankcard"
      });
    }
  },
  methods: {
    cityData,
    getWxItem,
    wxhideMenu,
    province_handle() {
      var flist = this.provinces.filter(x => x.text == this.form.province)[0];
      this.citys = flist.children;
      this.citys.unshift({
        value: "0",
        text: "城市"
      });
      this.form.city = "城市";
    },
    card_keyup_handle() {
      if (/^[\d]{0,19}$/.test(this.form.cardNumber.replace(/\s/g, ""))) {
        //每四位数字加一个空格
        this.form.cardNumber = this.form.cardNumber
          .replace(/\D/g, "")
          .replace(/(....)(?=.)/g, "$1 ");
      }
    },
    submit_handle() {
      const wxUser = this.getWxItem();
      if (!this.form.name) {
        this.mui.toast("请输入姓名!", { duration: "long", type: "div" });
        return;
      }
      if (wxUser.username != this.form.name) {
        this.mui.toast("持卡人与入厂姓名一致!", {
          duration: "long",
          type: "div"
        });
        return;
      }
      var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!regIdNo.test(this.form.idCard)) {
        this.mui.toast("身份证号填写有误!", { duration: "long", type: "div" });
        return;
      }
      let cardNumber = this.form.cardNumber.replace(/\s+/g, "");
      if (!/^\d{16}|\d{19}$/.test(cardNumber)) {
        this.mui.toast("银行卡号填写有误!", { duration: "long", type: "div" });
        return;
      }

      if (this.form.bank == "请选择银行") {
        this.mui.toast("请选择银行!", { duration: "long", type: "div" });
        return;
      }
      if (this.form.province == "省份") {
        this.mui.toast("请选择省份!", { duration: "long", type: "div" });
        return;
      }
      if (this.form.city == "城市") {
        this.mui.toast("请选择城市!", { duration: "long", type: "div" });
        return;
      }
      this.form.unionid = wxUser.unionid;
      if (this.form.id == "") {
        this.http.post("/api/bank", this.form).then(res => {
          if (res.code == 200) {
            this.mui.toast("提交成功!", { duration: "long", type: "div" });
            this.form.id = res.id;
          } else this.mui.toast(res.msg, { duration: "long", type: "div" });
        });
      } else {
        this.http.put("/api/bank", this.form).then(res => {
          if (res.code == 200) {
            this.mui.toast("提交成功!", { duration: "long", type: "div" });
          } else this.mui.toast(res.msg, { duration: "long", type: "div" });
        });
      }
    }
  }
};
</script>
<style>
.mui-toast-container {
  bottom: 50% !important;
  z-index: 10000000000;
}
</style>
<style scoped>
.content {
  padding-top: 1.2rem;
  height: 100vh;
  width: 100vw;
  background-color: #eee;
}
.content-form {
  padding: 0 0.7rem;
  background-color: #fff;
}
.form-item {
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #e9e9e9;
}
.form-item label {
  display: block;
  width: 2rem;
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
.bottom-btn {
  display: flex;
  margin-top: 1rem;
  padding: 0 0.7rem;
}
.btn-item {
  width: 50%;
}
.button-danger {
  text-align: center;
  background: #f6383a;
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.5rem;
  border-radius: 0.1rem;
}
.button-success {
  text-align: center;
  background: #4cd964;
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.5rem;
  border-radius: 0.1rem;
}
.form-item-select {
  display: flex;
}
</style>
