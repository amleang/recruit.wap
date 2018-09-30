import Vue from 'vue'
import Router from 'vue-router'
import home from "@/pages/home"
import test from "@/pages/test"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: "/test",
    name: "test",
    component: test
  }]
})
