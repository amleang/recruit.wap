// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/js/mui.js'
import 'lib-flexible/flexible'
Vue.prototype.mui = mui;
Vue.prototype.$oldUrl="";
Vue.config.productionTip = false;
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
/* router.beforeRouteEnter((to, from, next) => {
  next(vm => {
    // 通过 `vm` 访问组件实例,将值传入oldUrl
    Vue.prototype.$oldUrl = from.path
  })
}); */
import http from '@/components/api/http'
Vue.prototype.http = http;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
