<template>
    <div v-if="dialog">
        <div class="mui-popup-backdrop"></div>
        <div class="dialog">
            <div class="title">11月份推荐排行榜TOP10</div>
            <div class="empt" v-if="list.length==0">暂无推荐信息</div>
            <div v-else>
                <div class="item" v-for="(item,index) in list" :key="index">
                    <div>
                        <img v-if="index==0" src="../../assets/images/first.png" alt="">
                        <img v-else-if="index==1" src="../../assets/images/second.png" alt="">
                        <img v-else-if="index==2" src="../../assets/images/third.png" alt="">
                        <div v-else>{{index+1}}</div>
                    </div>
                    <div class="name">{{item.username1}}</div>
                    <div class="num">{{item.total}}人</div>
                </div>

            </div>
            <div class="more">...</div>
            <div class="bottom" v-if="list.length>0">
                <div>{{my.ranking>0?'第'+my.ranking+'名':'无名次'}}</div>
                <div>我</div>
                <div>{{my.total}}人</div>
            </div>
        </div>
        <div class="dialog-close" @click="close_handle"><span class="mui-icon mui-icon-closeempty"></span></div>
    </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    unionid: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      list: [],
      my: { ranking: 0, total: 0 }
    };
  },
  methods: {
    close_handle() {
        this.$emit("dialogHandle");
    }
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.http
          .get("/api/app/ranking", { params: { unionid: this.unionid } })
          .then(res => {
            if (res.code == 200) {
              debugger;
              this.list = res.data.list;

              if (res.data.mylist.length > 0) {
                const myobj = res.data.mylist[0];
                this.list.forEach((item, index) => {
                  if (item.unionid == item.unionid) this.my.ranking = index + 1;
                });
                this.my.total = myobj.total;
              }
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.dialogranking {
  position: absolute;
}
.mui-popup-backdrop {
  z-index: 99999999;
  opacity: 1;
}
.dialog {
  position: absolute;
  top: 20vh;
  z-index: 99999999999;
  width: 80vw;
  margin: 0 10vw;
  background: #fff;
  border-radius: 0.2rem;
  border-radius: 10px;
  height: 50vh;
}
.dialog-close {
  position: absolute;
  right: 50%;
  top: 80vh;
  font-size: 0.5rem;
  width: 1rem;
  text-align: center;
  height: 1rem;
  border: 4px solid #fff;
  color: #fff;
  z-index: 1000000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-right: -0.5rem;
}
.title {
  height: 1rem;
  background: #67bcf6;
  line-height: 1rem;
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.bottom {
  display: flex;
  align-items: center;
  height: 1rem;
  background: #67bcf6;
  line-height: 1rem;
  text-align: center;
  font-size: 0.4rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.bottom div {
  width: 33.333333%;
  text-align: center;
}
.empt {
  height: 20vh;
  line-height: 20vh;
  text-align: center;
  font-size: 0.4rem;
}
.item {
  display: flex;
  align-items: center;
  border-bottom: 3px solid #efefef;
  background-color: unset;
  padding: 8px 0;
  font-size: 0.4rem;
}
.item div {
  width: 33.333333%;
  text-align: center;
}
.item img {
  width: 0.55rem;
}
.item .name {
  letter-spacing: 5px;
}
.item .num {
  color: #e46a15;
  font-weight: bold;
}
.more {
  padding: 15px 0;
  letter-spacing: 5px;
  text-align: center;
}
</style>
