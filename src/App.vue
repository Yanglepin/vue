<template>
  <div id="app">
    <!-- 头部 -->
    <!-- <van-nav-bar
      :title="tabbars[active].title"
      :right-text="tabbars[active].edit"
      @click-right="onClickRight"
    /> -->
     <router-view></router-view>
     <!-- 底部内容 -->
      <van-tabbar v-model="active" v-show="$route.meta.navShow" :class="$route.meta.navShow?'':'hidden'">
        <van-tabbar-item
          v-for="(item,index) in tabbars"
          :key="index"
          :info="index==2?cartNum:''"
          @click="tab(index,item.name)"
        >
          <span :class="currIndex == index ? active:''">{{item.title}}</span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? item.inactive : item.active">
          </template>
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import connect from '@/assets/js/common/connect.js';
// 先创建父组件，后创建自组件
export default {
  data(){
    return {
      currIndex: 0,
      active: 0,
      cartNum: 0,
      tabbars: [ 
        {
          name: 'home',
          title: '首页',
          active: require('@/assets/images/icon/home.png'),
          inactive: require('@/assets/images/icon/home_active.png')
        },
        {
          name: 'goods',
          title: '商品列表',
          active: require('@/assets/images/icon/goods.png'),
          inactive: require('@/assets/images/icon/goods_active.png')
        },
        {
          name: 'cart',
          title: '购物车',
          edit: '编辑',
          active: require('@/assets/images/icon/cart.png'),
          inactive: require('@/assets/images/icon/cart_active.png')
        },
        {
          name: 'news',
          title: '新闻中心',
          active: require('@/assets/images/icon/news.png'),
          inactive: require('@/assets/images/icon/news_active.png')
        },
        {
          name: 'mine',
          title: '我的',
          active: require('@/assets/images/icon/mine.png'),
          inactive: require('@/assets/images/icon/mine_active.png')
        },
      ]
    }
  },
  created (){
    this.$axios.post('/openapi/api',{
      params: {
        key: 'c794b6ac18824c84b452b1cda4fe2772',
        info: '鱼香肉丝'
      }
    }).then(res=>{    //成功返回
      console.log(res);
    }).catch(err=>{   //失败返回
      console.log(err);
    })
    
    let self = this;
    // connect.$on('onAddCartClicked',function(num){
      // 这里的this是connect,运用箭头函数最简单
    connect.$on('onAddCartClicked',num=>{
      console.log("父接收到了~~~"+num);
      // self.cartNum = num;
      this.cartNum = num;
    })
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    },
   
  }
}
</script>

<style scoped>
.hidden{
  display: none;
}
.container{
  background-color: #fff;
}
.van-nav-bar{
  position: fixed;
  width: 100%;
}
.van-tabbar-item--active {
    color: #71caf9 !important;
}
.van-tabbar-item__icon img{
  height: 23px;
}
.van-tabbar-item{
  color: #232323;
}
.van-nav-bar__text{
  color: #71caf9;
}
</style>
