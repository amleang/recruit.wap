<template>
  <div>
    <head-title header="我的补贴银行卡"></head-title>
    <div class="content">
      <div class="content-form">
        <div class="form-item">
          <label for="">姓名</label>
          <div>
            <input type="text" placeholder="持卡人与入厂姓名一致">
          </div>
        </div>

        <div class="form-item">
          <label for="">身份证号</label>
          <div>
            <input type="text" placeholder="开户人身份证号">
          </div>
        </div>

        <div class="form-item">
          <label for="">卡号</label>
          <div>
            <input type="text" placeholder="开户人银行卡号">
          </div>
        </div>

        <div class="form-item">
          <label for="">银行</label>
          <div>
            <input type="text" placeholder="银行">
          </div>
        </div>
        <div class="form-item">
          <label for="">开户地区</label>
          <div class="form-item-select">
            <div class="form-select">
              <select v-model="form.province" @change="province_handle">
                <option v-for="(item,index) in provinces" :key="index" :value="item.text">{{item.text}}</option>
              </select>
            </div>
            <div class="form-select">
              <select v-model="form.city">
                <option v-for="(item,index) in citys" :key="index" :value="item.text">{{item.text}}</option>
              </select>
            </div>
          </div>

        </div>

      </div>
      <div class="bottom-btn">
        <div class="btn-item" style="padding-right: 0.35rem;">
          <div class="button-danger">取消</div>
        </div>
        <div class="btn-item" style="padding-left: 0.35rem;">
          <div class="button-success">提交</div>
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
export default {
  components: {
    headTitle,
    consult
  },
  data() {
    return {
      form: {
        province: "省份",
        city: "城市"
      },
      provinces: [],
      citys: [
        {
          value: "0",
          text: "城市"
        }
      ]
    };
  },
  mounted() {
    this.provinces = this.cityData();
  },
  methods: {
    cityData,
    province_handle() {
      var flist = this.provinces.filter(x => x.text == this.form.province)[0];
      this.citys = flist.children;
      this.citys.unshift({
        value: "0",
        text: "城市"
      });
      this.form.city = "城市";
    }
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
