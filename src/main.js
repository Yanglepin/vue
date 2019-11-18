// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
'use strict';
import Vue from 'vue';
import App from './App';
import router from './router';

import Vant from 'vant';   //Vant: 引入vant
import 'vant/lib/index.css';  //Vant: 引入css
Vue.use(Vant);    //Vant: 安装插件

// Axios: 引入axios
import Axios from 'axios';   
//挂载原型
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;
Axios.defaults.baseURL = '/api';

/* eslint-disable no-new */
// 创建一个vue实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
