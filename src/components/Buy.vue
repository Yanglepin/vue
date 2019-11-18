<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
        title="提交订单"
        :fixed="true"
        left-arrow
        @click-left="$router.back(-1)"
        />

        <van-cell title="请选择收货地址" icon="location-o" is-link @click="selectAddress"/>
        <van-cell title="杨阳阳 18844096670" 
            label="郑州市二七区兴华南街政通路58号郑州市二七区兴华南街政通路58号郑州市二七区兴华南街政通路58号" 
            icon="location-o" 
            is-link 
            @click="selectAddress"
        />

        <div v-for="(item,index) in GoodsList" :key="index">
        <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
            :origin-price="item.origin_price"
        > 
            <div slot="tags">
                <van-tag plain type="danger">白色</van-tag>
                <van-tag plain type="danger">38码</van-tag>
            </div>
        </van-card>
    </div>

        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
        />
    </div>
</template>
<script>
export default {
    data(){
        return{
            GoodsList: [
                {
                goods_id: 1,
                title: "特步运动女鞋",
                num: 2,
                thumb:"https://img11.360buyimg.com/n7/jfs/t1/60095/21/15069/211110/5dc831a7Edc5a3b6e/c76af9a802a4b44e.jpg",
                price: "399.00",
                origin_price: "500.00",
                desc: "女秋冬季新款跑步鞋2019小白鞋学生休闲旅游慢跑鞋子 9798 白色 37"
                }
            ]
        }
    },
    mounted(e){
        console.log(e);
    },
    methods:{
        // 提交订单
        onSubmit(){

        },
        // 选择地址
        selectAddress(){
            this.$router.push({
                path: '/AddressList',
            })
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/public.scss';
.container{
  margin-top: 46px;
}
.van-card{
    .van-card__bottom{
        height: 20px;
        line-height: 23px;
    }
}
</style>