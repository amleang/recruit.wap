<template>
  <div class="mui-content" id="news">
    <!--顶部banner图 开始-->
    <div class="banner">
      <a href="javascript:;">
        <img src="http://dcloud.io/hellomui/images/yuantiao.jpg" />
        <h2 class="title mui-ellipsis-2">fdsafsfsadf</h2>
        <div style="display: none;">
          <div class="author">afd</div>
          <div class="time">2017</div>
        </div>
      </a>
    </div>
    <!--列表信息流 开始-->
    <div id="list" class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media" v-for="(item,index) in items" :key="index">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" :src="item.cover">
              <div class="mui-media-body">
                <div class="mui-ellipsis-2">{{item.title}}</div>
              </div>
              <div class="meta-info">
                <div class="author">{{item.author}}</div>
                <div class="time">{{item.time}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--列表信息流 结束-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.loadItems();
    const that = this;
    this.mui.init({
      pullRefresh: {
        container: "#list",
        up: {
          contentrefresh: "正在加载...",
          callback: that.pullupRefresh
        }
      }
    });
  },
  methods: {

    pullupRefresh() {
      console.log("下拉");
    },
    loadItems() {
      for (var i = 0; i < 20; i++) {
        this.items.push({
          cover: "http://dcloud.io/hellomui/images/yuantiao.jpg",
          title: i + "幸福肥啊",
          author: "anly.jon",
          time: "2018-09-30"
        });
      }
    }
  }
};
</script>

<style scoped>
.mui-media {
  font-size: 14px;
}

.mui-table-view .mui-media-object {
  max-width: initial;
  width: 90px;
  height: 70px;
}

.meta-info {
  position: absolute;
  left: 115px;
  right: 15px;
  bottom: 8px;
  color: #8f8f94;
}

.meta-info .author,
.meta-info .time {
  display: inline-block;
}

.meta-info .time {
  float: right;
}

.mui-table-view:before,
.mui-table-view:after {
  height: 0;
}

.mui-content > .mui-table-view:first-child {
  margin-top: 1px;
}

.banner {
  height: 180px;
  overflow: hidden;
  position: relative;
  background-position: center;
  background-color: #ccc;
}

.banner img {
  width: 100%;
  height: auto;
}

.banner .title {
  position: absolute;
  left: 15px;
  bottom: 15px;
  width: 90%;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: white;
  z-index: 11;
}
</style>
