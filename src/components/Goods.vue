<template>
  <div class="container">
    <van-nav-bar
      title="商品列表"
    />
    <div v-for="(item,index) in GoodsList" :key="index">
      <van-card
        :num="item.num"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.thumb"
        :origin-price="item.origin_price"
        @click="getDetail(item.goods_id)"
      >
        <!-- <div slot="bottom" class="tag-right">
          <van-button size="mini">立即购买</van-button>
        </div> -->
        
      </van-card>
    </div>
    <!-- 底部导航栏 -->
    <div style="height: 50px;"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      GoodsList: [
        {
          goods_id: 1,
          title: "特步运动女鞋",
          num: 2,
          thumb:
            "https://img11.360buyimg.com/n7/jfs/t1/60095/21/15069/211110/5dc831a7Edc5a3b6e/c76af9a802a4b44e.jpg",
          price: "399.00",
          origin_price: "500.00",
          desc: "女秋冬季新款跑步鞋2019小白鞋学生休闲旅游慢跑鞋子 9798 白色 37"
        },
        {
          goods_id: 2,
          title: "2019秋季新款跑步鞋轻便耐磨女跑",
          num: 2,
          thumb:
            "https://img13.360buyimg.com/n7/jfs/t1/54599/9/15606/260601/5dc8d0a3Ef72e71c7/323bbcae7530101b.jpg",
          price: "99.00",
          origin_price: "200.00",
          desc:
            "狂欢11.11,全店直降到底,领无门槛10元券,199-30,299-60叠加满400减150！【爆款跑鞋75元秒杀秒杀中，直降74元，猛戳！】"
        },
        {
          goods_id: 3,
          title:
            "ZHR休闲 运动鞋 加绒可选棉鞋女韩版时尚百搭透气板鞋 AK60 米灰色 37",
          num: 2,
          thumb:
            "https://img10.360buyimg.com/n7/jfs/t1/60453/27/14867/214042/5dc7b306E951a0872/31fbcd2648879f2f.jpg",
          price: "159.00",
          origin_price: "200.00",
          desc:
            "11.11专柜正品嗨购到底！【下单立享8.8折，满2件8折】全年只有一次，买贵必返差价！可叠加券满400减50！【闪电配.极速达】点击查看更多"
        },
        {
          goods_id: 4,
          title: "特步运动女鞋",
          num: 2,
          thumb:
            "https://img11.360buyimg.com/n7/jfs/t1/60095/21/15069/211110/5dc831a7Edc5a3b6e/c76af9a802a4b44e.jpg",
          price: "399.00",
          origin_price: "500.00",
          desc: "女秋冬季新款跑步鞋2019小白鞋学生休闲旅游慢跑鞋子 9798 白色 37"
        }
      ]
    };
  },
  methods: {
    getDetail(id){
      this.$router.push({
        path: '/goodsdetail',
        query: {
          id: id
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/public.scss";
</style>