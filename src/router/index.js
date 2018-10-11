import Vue from 'vue'
import Router from 'vue-router'
import home from "@/pages/home"
import login from "@/pages/login"
import recommend from "@/pages/recommend"
import user from "@/pages/user"
Vue.use(Router)

export default new Router({
  mode: "history",
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
      path: "/user",
      name: "user",
      component: user
    }
  ]
})
