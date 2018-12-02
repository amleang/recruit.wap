import Vue from 'vue'
import Router from 'vue-router'
import home from "@/pages/home"
import login from "@/pages/login"
import recommend from "@/pages/recommend"
import recommendlist from "@/pages/recommend/list"
import user from "@/pages/user"
import balance from "@/pages/user/balance"
import balancelist from "@/pages/user/balancelist"
import bankcard from "@/pages/user/bankcard"
import jobapplys from "@/pages/user/jobapplys"
import follow from "@/pages/user/follow"
import subsidy from "@/pages/user/subsidy"
import about from "@/pages/user/about"
import store from "@/pages/store"
import jobdetail from "@/pages/jobdetail"
import uphone from "@/pages/user/phone"
import myinfo from "@/pages/user/myinfo"
import download from "@/pages/download"
import ref from "@/pages/ref"
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: "/login",
    name: "login",
    component: login
  }, {
    path: "/recommend",
    name: "recommend",
    component: recommend
  },
  {
    path: "/recommendlist",
    name: "recommendlist",
    component: recommendlist
  },
  {
    path: "/user",
    name: "user",
    component: user
  }, {
    path: "/balance",
    name: "balance",
    component: balance
  },
  {
    path: "/balancelist",
    name: "balancelist",
    component: balancelist
  }, {
    path: "/bankcard",
    name: "bankcard",
    component: bankcard
  },
  {
    path: "/jobapplys",
    name: "jobapplys",
    component: jobapplys
  }, {
    path: "/follow",
    name: "follow",
    component: follow
  }, {
    path: "/subsidy",
    name: "subsidy",
    component: subsidy
  }, {
    path: "/about",
    name: "about",
    component: about
  }, {
    path: "/store",
    name: "store",
    component: store
  }, {
    path: "/jobdetail",
    name: "jobdetail",
    component: jobdetail
  }, {
    path: "/phone",
    name: "phone",
    component: uphone
  }, {
    path: "/myinfo",
    name: "myinfo",
    component: myinfo
  }, {
    path: "/download",
    name: "download",
    component: download
  },{
    path:"/ref",
    name:"ref",
    component:ref
  }
  ]
})
