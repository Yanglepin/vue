<template>
  <div class="container">
    <van-nav-bar
      title="新闻中心"
      :fixed="true"
    />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset="10"
      >

      <div class="list" v-for="(item,index) in list" :key="index">
        <router-link :to="{path:'/NewsDetail',query:{title_id:index}}">
          <div class="top">
            <p class="van-ellipsis">{{item.title}}</p>
            <span class="date">{{item.date}}</span>
          </div>
          <p class="van-multi-ellipsis--l2">{{item.desc}}</p>
        </router-link>
      </div>

      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list: [{
        title:'这里是标题',
        desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
        date: '2019-11-11'
      }],
      loading: false,   //是否处于加载状态
      finished: false,  //是否已加载完所有数据
      isLoading: false,   //是否处于下拉刷新状态
    };
  },
  methods: {
    onLoad() {      //上拉加载
      setTimeout(() => {
        // console.log(this.list);
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list[0]);
        }
        this.loading = false;
        if (this.list.length >= 30) {
            this.finished = true;
        }
      }, 500);
    },
    onRefresh() {       //下拉刷新
      setTimeout(() => {
          this.finished = false;
          this.isLoading = false;
          this.list = [{
            title:'这里是标题',
            desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
            date: '2019-11-11'
          }];
          this.onLoad();
      }, 500);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/public.scss';
.van-pull-refresh{
  margin-top: 46px;
}
.list{
  width: 100%;
  padding: 3%;
  border-bottom: 1px solid #f4f4f4;
  box-sizing: border-box;
  .top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p{
      flex: 1;
      font-size: 15px;
      color: #232323;
      line-height: 21px;
      margin-right: 5px;
    }
    .date{
      font-size: 12px;
      color: #787878;
    }
  }
  p{
    line-height: 21px;
    font-size: 13px;
    color: #444;
  }
  
}
</style>