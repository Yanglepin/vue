import Vue from 'vue';   //引入第三方包
import Router from 'vue-router';   //引入路由对象
Vue.use(Router);  //Router: 安装插件


import Home from '@/components/Home'; 
import Goods from '@/components/Goods';  
import News from '@/components/News'; 
import Cart from '@/components/Cart';  
import Mine from '@/components/Mine'; 
import GoodsDetail from '@/components/GoodsDetail'; 
import Buy from '@/components/Buy';
import Sort from '@/components/Sort';
import AddressList from '@/components/AddressList';
import Coupon from '@/components/Coupon';
import AddressEdit from '@/components/AddressEdit';
import NewsDetail from '@/components/NewsDetail';

export default new Router({
  routes: [
    { path: '/',redirect:{ name: 'home'}},  //重定向
    { name: 'home',path:'/home',meta:{navShow: true},component: Home},
    { name: 'Goods',path:'/Goods',meta:{navShow: true},component: Goods},
    { name: 'news',path:'/news',meta:{navShow: true},component: News},
    { name: 'cart',path:'/cart',meta:{navShow: true},component: Cart},
    { name: 'mine',path:'/mine',meta:{navShow: true},component: Mine},
    { name: 'GoodsDetail',path:'/GoodsDetail',component: GoodsDetail},
    { name: 'Buy',path:'/Buy',component: Buy},
    { name: 'Sort',path:'/Sort',component: Sort},
    { name: 'AddressList',path:'/AddressList',component: AddressList},
    { name: 'Coupon',path:'/Coupon',component: Coupon},
    { name: 'AddressEdit',path:'/AddressEdit',component: AddressEdit},
    { name: 'NewsDetail',path:'/NewsDetail',component: NewsDetail},
    
  ],
  mode: 'history'
})
