<template>
    <div class="container">
        <van-nav-bar
        title="这里是标题"
        :fixed="true"
        left-arrow
        @click-left="$router.back(-1)"
        />
        <div class="content">
            <p class="title">这里是标题</p>
            <p class="date">2019-11-14 17:08</p>
            <p class="aticle">这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容</p>
            <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg">
            <p class="aticle">这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容这里是文章内容</p>
            <img src="https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/public.scss';
.content{
    margin-top: 46px;
    p{
        line-height: 25px;
        padding: 0 3%;
    }
    p.title{
        text-align: center;
        color: #232323;
        font-size: 15px;
    }
    p.date{
        text-align: center;
        color: #ccc;
        font-size: 13px;
    }
    p.aticle{
        text-indent: 28px;
        font-size: 14px;
        color: #232323;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>