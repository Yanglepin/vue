<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
        title="详情页"
        :fixed="true"
        left-arrow
        @click-left="$router.back(-1)"
        />
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
                <img :src="image">
            </van-swipe-item>
        </van-swipe>

        <!-- 商品详情 -->
        <div class="detail-list">
            <div class="van-card__price">&yen;200.00</div>
            <div class="van-card__origin-price">&yen;250.00</div>
            <p class="van-multi-ellipsis--l2">这里是商品标题这里是商品标题这里是商品标题这里是商品标题这里是商品标题</p>
        </div>

        <!-- 购物车飞出的小球 -->

        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-if="isShow"></div>  
        </transition>
        

        <!-- 参数规格 -->
        <van-cell is-link  @click="showBase=true" class="van-ellipsis">选择商品属性</van-cell>
        <van-sku
          v-model="showBase"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku"        
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
          @stepper-change="stepperChange"
        />
        <div class="detail-title">商品详情</div>
        <div class="detail-img">
            <p>这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍</p>
            <p>这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍</p>
            <img src="https://img11.360buyimg.com/pop/s590x470_jfs/t1/59527/37/14725/68493/5dc3f29cE50329abd/43f587c642105fd3.jpg.webp"/>
            <p>这里是商品介绍这里是商品介绍这里是商品介绍</p>
            <img src="https://imgcps.jd.com/ling/100005224262/5bmz5p2_55S16KeG5beo5YiS566X/5L2g5YC85b6X5YWl5omL/p-5bd8253082acdd181d02fa6d/08f91e01/590x470.jpg">
            
            <p>这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍这里是商品介绍</p>
        </div>
        <div style="height: 50px;"></div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" :info="num"/>
            <van-goods-action-button type="warning" text="加入购物车" @click="onSure(true,1)"/>
            <van-goods-action-button type="danger" text="立即购买" @click="onSure(true,2)"/>
        </van-goods-action>
        <van-sku
          v-model="show"
          :sku="skuData.sku"
          :goods="skuData.goods_info"
          :goods-id="skuData.goods_id"
          :hide-stock="skuData.sku.hide_stock"
          :quota="skuData.quota"
          :quota-used="skuData.quota_used"
          :initial-sku="initialSku"        
          reset-stepper-on-hide
          reset-selected-sku-on-hide
          disable-stepper-input
          :close-on-click-overlay="closeOnClickOverlay" 
          :custom-sku-validator="customSkuValidator"  
          @buy-clicked="onBuyClicked"
          @add-cart="onAddCartClicked"
          @stepper-change="stepperChange"
        />
    </div>
</template>
<script>
import skuData from '@/assets/js/data/data.js'; 
import connect from '@/assets/js/common/connect.js';   //vue中组件通信的对象
export default {
    // inject : ['reload'],
    data(){
        return{
            SwiperImg: [
                "https://img11.360buyimg.com/pop/s590x470_jfs/t1/59527/37/14725/68493/5dc3f29cE50329abd/43f587c642105fd3.jpg.webp",
                "https://img14.360buyimg.com/babel/s590x470_jfs/t1/93873/21/1982/92067/5dc98b5dE7c0e4bb7/589dfde9ec197110.jpg.webp",
                "https://imgcps.jd.com/ling/100005224262/5bmz5p2_55S16KeG5beo5YiS566X/5L2g5YC85b6X5YWl5omL/p-5bd8253082acdd181d02fa6d/08f91e01/590x470.jpg"
            ],
            isShow: false,
            skuData:skuData,
            showBase: false,
            show: false,
            showCustom: false,
            showStepper: false,
            showSoldout: false,
            closeOnClickOverlay: true,
            select: 0,
            num: 0,   //购物车数量
            stepper: 1,   //步进器数量
            initialSku: {
                s1: '30349',
                s2: '1193',
                selectedNum: 1      
            },
            customSkuValidator: () => '请选择xxx!', 
        }
    },
    created(){
        console.log(this.$route.query.id);
    },
    methods:{
        // 立即购买
        onBuyClicked(data) {
            console.log("立即购买："+JSON.stringify(data));
            this.showBase = false;   //关闭遮罩层

            this.$router.push({
                path: '/buy',
                query: {
                id: data.goodsId
                }
            })

        },
        // 加入购物车
        onAddCartClicked(data) {
            this.$toast('成功加入购物车');
            console.log("购物车开始emit:"+JSON.stringify(data));
            this.show = false;
            this.showBase = false;   //关闭遮罩层
            this.num = this.num+this.stepper;
            connect.$emit('onAddCartClicked',this.num);
            // 让小球飞起来，也就是插入ball这个元素
            this.isShow = true;
        }, 

        // 处理过渡效果进入之后的行为
        afterEnter(){
            this.isShow = false;  //移除元素
        },
        onSure(flag,select){
            this.show = flag;
            console.log(select);
            this.select = select;
        },
        // 步进器
        stepperChange(num){
            console.log(num);
            this.stepper = num;
        },
        

    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/public.scss';
.ball{
    position:absolute;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    border-radius: 50%;
    z-index: 2;
}
.ball-enter-active {
  animation: bounce-in .5s;
}

@keyframes bounce-in {
  0%{
    //   3D流畅性会好点
    transform: translate3d(0,0,0);
  }
  50%{
    transform: translate3d(80px,-50px,0);
  }
  75%{
    transform: translate3d(100px,0px,0);
  }
  100%{
    transform: translate3d(80px,100px,0);
  }
}

.detail-list{
    width: 100%;
    background-color: #fff;
    padding: 2% 3%;
    border-bottom: 3px solid #f4f4f4;
    box-sizing: border-box;
    p{
        line-height: 20px;
        font-size: 14px;
        color: #232323;
        margin-top: 4px;
    }
}
.detail-title{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #232323;
    font-size: 14px;
}
.detail-img{
    width: 100%;
    img{
        width: 100%;
    }
    p{
        width: 94%;
        margin: 0 3%;
        color: #666;
        font-size: 13px;
        text-indent: 27px;
        line-height: 21px;
    }
}
</style>