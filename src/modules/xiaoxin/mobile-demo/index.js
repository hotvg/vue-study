import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index'
import App from './App'
//import http from 'config/axiosConfig'

//import router from 'router/xiaoxin/index'
//Vue.prototype.$http = http;
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  template: '<App/>',
  components: { App }
});
