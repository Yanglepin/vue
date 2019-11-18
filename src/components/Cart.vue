<template>
  <div class="container">
    <van-nav-bar
      title="购物车"
      :right-text="showDel?'编辑':'完成'"
      :fixed="true"
      @click-right="onClickRight"
    />
    <section>
      <div class="shop_car" v-for="(item,index) in mylist" :key="index">
        <div class="shop-top">
          <input v-model="item.this_all" @change="check_list(index)" type="checkbox"/>{{item.oname}}
        </div>
        <div class="car-box-list">
          <ul>
            <li v-for="(goods,idx) in item.newlist" :key="idx">
              <div class="box-list">
                <input type="checkbox" v-model="goods.check_one" @change="click_input(index,idx)"/>
                <div class="img-box">
                    <img :src="goods.picImg" />
                </div>
                <div class="list-text">
                  <p class="van-multi-ellipsis--l2">{{goods.newname}}</p>
                  <div class="text-brief">
                    <span>尺码:{{goods.size}}</span>
                    <span>颜色:{{goods.color}}</span>
                  </div>
                  <div class="limit-purchase">限购20件</div>
                  <div class="text-price">
                    <div class="box-pri">
                      <span class="price">&yen;{{goods.price}}</span>
                    </div>
                    <div class="text-arithmetic">
                      <!-- Stepper 步进器 -->
                      <van-stepper v-model="goods.count" 
                        @minus="deleteto(index,idx),money()"
                        @plus="add(index,idx),money()"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer>
      <div class="aui-payment-bar">
        <div class="all-checkbox">
          <input type="checkbox" v-model="checkall" @change="check_all()" id="AllCheck"/>全选
        </div>
        <div class="shop-total" v-if="showDel">
            <span class="total" id="AllTotal">合计：&yen;{{allprice}}</span>
            <a href="###" class="settlement" @click="btn()">去结算</a>
        </div>
        <div class="shop-total" v-else>
            <a href="###" class="settlement" @click="del()">删除</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "ShopCar",
  data() {
    return {
      showDel: true,
      mylist: [
        {
          oname: "森马旗舰店",
          this_all: false,
          newlist: [
            {
              goods_id: '001',
              newname: "森马 Senma 男靴高帮运动休闲鞋韩版系带潮流百搭男士马丁靴617415010 驼色 42码",
              picImg: "https://img13.360buyimg.com/n2/jfs/t22897/257/2401228033/189356/5332dd41/5b7e770fNe20f7a12.jpg",
              count: 1,
              color: "驼色",
              size: "42码",
              check_one: false,
              price: 600
            },
            {
              goods_id: '002',
              newname: "男鞋春季透气潮鞋小白鞋韩版潮流百搭运动跑步休闲ins超火的鞋子 8865红色 44",
              picImg: "https://img12.360buyimg.com/n2/jfs/t1/23261/22/12129/157555/5c9478b2E964ded01/1fe47ea329557def.jpg",
              count: 1,
              color: "白色",
              size: "44码",
              check_one: false,
              price: 200
            }
          ]
        },
        {
          oname: "kmall旗舰店",
          this_all: false,
          newlist: [
            {
              goods_id: '003',
              newname: "美的（Midea）电压力锅 一锅双胆 智能预约 WQC50A1P 5L高压锅（李现推荐）",
              picImg: "https://img14.360buyimg.com/n2/jfs/t1/49691/9/15645/267924/5dc969bbE2fa29873/7326705172a7f25b.jpg",
              count: 1,
              color: "黑色",
              size: "800ml",
              check_one: false,
              price: 219
            },{
              goods_id: '004',
              newname: "美国进口 美达施(Metamucil) 膳食纤维粉香橙味 114次/罐 meta纤维素非蛋白粉非酵素代餐粉代餐饼干",
              picImg: "https://img13.360buyimg.com/n2/jfs/t1/49205/28/1435/122030/5cf2799fE40f4b44f/8c20c14203845786.jpg",
              count: 1,
              color: "无",
              size: "无",
              check_one: false,
              price: 140
            }
          ]
        }
      ],
      checkall: false,
      allprice: 0,
      cpmylist: [],
      goodsArr: []
    };
  },
  computed: {},
  mounted(){
    var that = this;
    // Utils.$on('demo',function() {
    //     console.log("123");
    //     that.onEdit();
    // })
  },
  methods: {
    //  数量至少为1个
    changeCount: function(index, idx) {
      if (this.mylist[index].newlist[idx].count <= 1) {
        this.mylist[index].newlist[idx].count = 1;
      } else {
        return true;
      }
    },
    //  数量减少
    deleteto(index, idx) {
      if (this.mylist[index].newlist[idx].count == 1) {
      } else {
        this.mylist[index].newlist[idx].count--;
      }
    },
    //  数量增加
    add(index, idx) {
      this.mylist[index].newlist[idx].count++;
    },
    //  选择所有的购物车商品
    check_all: function() {
      var that = this;
      console.log("全选:"+that.checkall);
      that.mylist.forEach(item1 => {
        item1.this_all = that.checkall;
        item1.newlist.forEach(item2 => {
          item2.check_one = that.checkall;
        });
      });
      that.money();
    },


    // 判断店铺是否全部选中，全部选中的话，全选checkall = true；反之that.checkall = false
    abc: function() {
      var that = this;
      console.log("123");
    //   过滤返回选中的店铺
      var aaa = that.mylist.filter(item2 => {
        return item2.this_all == true;
      });
      
      aaa.length == that.mylist.length
        ? (that.checkall = true)
        : (that.checkall = false);
      that.money();
    },
    //  点击店铺全选，则该店铺的商品都选中
    check_list: function(i) {
      var that = this;
      that.mylist[i].newlist.forEach(item1 => {
        item1.check_one = that.mylist[i].this_all;
      });
      that.abc();
    },
    //  判断某个店铺的商品是否全部选中，全部选中的话该店铺checkBox中的this_all = true，反之this_all = false
    click_input: function(i, j) {
      var that = this;
      var checklist = that.mylist[i].newlist.filter(item1 => {
        return item1.check_one == true;
      });

      checklist.length == that.mylist[i].newlist.length
        ? (that.mylist[i].this_all = true)
        : (that.mylist[i].this_all = false);
      that.abc();
    },
    //  计算总价格，依据单个选中的商品 单价*数量 累计相加计算  总价格
    money: function() {
      var that = this;
      this.allprice = 0;
      that.mylist.forEach(item1 => {
        item1.newlist.forEach(item2 => {
          if (item2.check_one == true) {
            that.allprice += item2.price * item2.count;
          }
        });
      });
    },

    getSubmit: function(){
      var that = this;
      that.goodsArr = [];
      that.cpmylist = JSON.parse(JSON.stringify(that.mylist));
      
    //   过滤返回单个选中的商品
      that.cpmylist.filter(item1 => {
        item1.newlist = item1.newlist.filter(item2 => {
          return item2.check_one == true;
        });
      });

    //  过滤购物车不为空的列表
      that.cpmylist = that.cpmylist.filter(item3 => {
        return item3.newlist.length != 0;
      });

      if (that.cpmylist.length == 0) {
        alert("请选择商品哦！");
      } else {
        // console.log("您购买的商品是：");
        that.cpmylist.forEach(item4 => {
          console.log("----------" + item4.oname + "店铺----------");
          item4.newlist.forEach(item5 => {
            console.log("选中的商品id：" + item5.goods_id);
            that.goodsArr.push(item5.goods_id);
          });
        });
      }
      return that.goodsArr;
    },

    //  提交时候
    btn: function() {
      var that = this;
      // that.getSubmit();
      console.log("买了："+that.getSubmit());
      
    },
     //  删除
    del: function() {
      var that = this;
      console.log("删除吧："+that.getSubmit());
    },
    onClickRight(){
      console.log("点击了"+this.showDel);
      // showDel默认是true
      this.showDel=!this.showDel;
    }
  }
};
</script> 

<style lang="scss" scoped>
// @import "../assets/css/public.scss";
.container{ 
  margin-bottom: 100px;
}
section {
  width: 100%;
  margin-top: 46px;
  .shop_car{
      width: 94%;
      margin: 0 3%;
      border-bottom: 1px solid #f4f4f4;
      box-sizing: border-box;
      .shop-top{
        width: 100%;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
      }
      .car-box-list{
          .box-list{
            width: 100%;
            display: flex;
            flex-direction: row;  
            padding-bottom: 8px;
            .img-box{
                width: 100px;
                height: 100px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                img{
                    width: 80px;
                    height: 80px;  
                    border-radius: 5px;
                }
            }    
            .list-text{
                flex: 1;
                p{
                    height: 40px;
                    line-height: 20px;
                    font-size: 15px;
                    margin-top: 7px;
                }
                .text-brief{
                    span{
                        font-size: 13px;
                        color: #909090;
                    }
                }
                .text-price{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .box-pri{
                        span{
                            color: #ff0000;
                            font-size: 15px;
                        }
                    }
                }
                .limit-purchase{
                    line-height: 20px;
                    font-size: 13px;
                    color: #ea3434;
                    margin-top: 2px;
                }
            }    
          }
          

      }
  }
}

footer{
    width: 100%;
    padding: 0 3%;
    height: 45px;
    position: fixed;
    bottom: 50px;
    z-index: 1;
    background-color: #fff;
    border-top: 1px solid #f4f4f4;
    box-sizing: border-box;
    .aui-payment-bar{
        width: 100%;
        height: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .all-checkbox{
            display: flex;
            flex-direction: row;
            align-items: center;
            #AllCheck{
                font-size: 14px;
            }
        }
        .shop-total{
            font-size: 15px;
            .total{
                margin-right: 10px;
            }
            .settlement{
                display: inline-block;
                width: 80px;
                height: 30px;
                line-height: 30px;
                background-color: #71caf9;
                color: #fff;
                font-size: 14px;
                text-align: center;
                border-radius: 15px;
            }
        }
    }
}
input[type='checkbox']{
  width: 20px;
  height: 20px;
  background-color: #fff;
  -webkit-appearance:none;
  border: 1px solid #c9c9c9;
  border-radius: 50%;
  outline: none;
}
input[type=checkbox]:checked{
  border: none;
  background: url("../assets/images/home/checkbox_icon.png") no-repeat center;
  background-size: 100%;
}
</style>