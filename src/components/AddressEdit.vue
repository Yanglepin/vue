<template>
    <div class="container">
        <!-- 头部 -->
        <van-nav-bar
        title="地址编辑"
        :fixed="true"
        left-arrow
        @click-left="$router.back(-1)"
        />

        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </div>
</template>
<script>
import areaList from '@/assets/js/data/areaList.js'; 
export default {
    data(){
        return{
            areaList: areaList,
            searchResult: []
        }
    },
    created(){
        
    },
    methods:{
        onSave() {
            this.$Toast('save');
        },
        onDelete() {
         this.$Toast('delete');
        },
        onChangeDetail(val) {
        if (val) {
            this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
            }];
        } else {
            this.searchResult = [];
        }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/public.scss";
</style>