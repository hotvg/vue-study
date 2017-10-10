import Vue from 'vue'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'mint-ui/lib/index'
import App from './App'
//import http from 'config/axiosConfig'

//import router from 'router/xiaoxin/index'
//Vue.prototype.$http = http;
Vue.use(MintUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '页面标题',
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  store,
  template: '<App/>',
  components: { App }
})
