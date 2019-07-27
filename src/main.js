// 会在node-modules目录下寻找vue.js并导入然后命名为Vue，如下同理
import Vue from 'vue'
// 需自己下载vue-router
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './js/router.js'
import axios from 'axios'
// import $ from 'jquery'

import vuex from 'vuex'


// 引入重置样式
import './assets/css/base.css'

// 引入图标字体
import './assets/css/iconfont.css'


//将vueRouter和vue联系起来，让所有.vue文件都能使用vue-router
Vue.use(VueRouter)

Vue.prototype.$http = axios

Vue.use(vuex)

var store = new vuex.Store({
  state:{
    // count:0,
    menushow:false,
    sortshow:false,
    flowertabshow:false,
    flowernavsortfiltshow:false,
    businessIndex:0,
    totalprice:0,
    totalhistoryprice:0,
    price:0,
    history:0
  },
  mutations:{

  filtertoggleShow(state){
    state.menushow = !state.menushow;
  },
  sorttoggleShow(state){
    state.sortshow = !state.sortshow;
  },
  flowertabtoggleShow(state){
    state.flowertabshow = !state.flowertabshow;
  },
  flownavsortfilttoggle(state){
    state.flowernavsortfiltshow = !state.flowernavsortfiltshow;
  },
  setBusinessIndex(state,businessIndex){
    state.businessIndex = businessIndex;
  },
  endPrice(state,price){
    state.totalprice += parseInt(price);
  },
  endHistoryPrice(state,history){
    state.totalhistoryprice += parseInt(history);
  }

  }

})

// 实例化Vue对象，并挂载到#app
new Vue({
  el: '#app',
  router,
  store, //使用store
  render: h => h(App)
})

// 配置路由：为了代码整洁，新建route.js并在这里配置（注意也要引入vue-router)



