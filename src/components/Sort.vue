<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
        title="商品分类"
        :fixed="true"
        left-arrow
        @click-left="$router.back(-1)"
        />
        <!-- 标签页 -->
        <van-tree-select
            height="700px"
            :items="SortList"
            :main-active-index.sync="activeIndex"
            @click-nav="onclick"
            >
            <template slot="content">

                <van-grid :border="false" :column-num="4" v-if="activeIndex === index">
                    <van-grid-item v-for="(item,index) in SortList[index].children" :key="index">
                        <router-link :to="{path:'/Goods',query:{sort_id:item.sort_id}}">
                            <van-image :src="item.sortImg" width="40px"/>
                            <span class="van-grid-item__text">{{item.grid_name}}</span>
                        </router-link>
                    </van-grid-item>
                </van-grid>

            </template>
        </van-tree-select>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeIndex: 0,
            index: 0,
            SortList:[{
                text: '分类 1',
                children:[{
                    sort_id: 1,
                    sortImg: require('@/assets/images/home/sort1.png'),
                    grid_name: '商品1-1'      
                },{
                    sort_id: 2,
                    sortImg: require('@/assets/images/home/sort2.png'),
                    grid_name: '商品1-2'
                },{
                    sort_id: 1,
                    sortImg: require('@/assets/images/home/sort1.png'),
                    grid_name: '商品1-3'      
                },{
                    sort_id: 2,
                    sortImg: require('@/assets/images/home/sort2.png'),
                    grid_name: '商品1-2'
                }]
            },{
                text: '分类 2',
                children:[{
                    sort_id: 1,
                    sortImg: require('@/assets/images/home/sort1.png'),
                    grid_name: '商品2-1'      
                }]
            },{
                text: '分类 3',
                 children:[{
                    sort_id: 1,
                    sortImg: require('@/assets/images/home/sort3.png'),
                    grid_name: '商品3-1'      
                },{
                    sort_id: 2,
                    sortImg: require('@/assets/images/home/sort4.png'),
                    grid_name: '商品3-2'
                }]
            },{
                text: '分类 4',
                 children:[{
                    sort_id: 1,
                    sortImg: require('@/assets/images/home/sort4.png'),
                    grid_name: '商品4-1'      
                },{
                    sort_id: 2,
                    sortImg: require('@/assets/images/home/sort2.png'),
                    grid_name: '商品4-2'
                }]
            }
            ],
        }
    },
    created(){
        console.log(this.$route.query.sort_id);
    },
    mounted(){
        console.log("索引值："+this.activeIndex);
    },
    methods:{
       onclick(index){
           console.log(index);
           this.index = index;
       }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/public.scss';
.van-tree-select{
    width: 100%;
    margin-top: 46px;   
}
.van-grid-item__content{
    padding: 8px;
}
.van-tree-select__nav{
    flex: 0.65;
}
</style>