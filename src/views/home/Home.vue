<template>
  <div id="home">
    <HomeTopBar></HomeTopBar>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <Swiper>
          <SwiperItem v-for="item in banner">
            <img :src="item.image" alt="">
          </SwiperItem>
        </Swiper>
        <HomeRecommend :recommend="recommend" />
        <WeekPopular />
        <TitleBar :titles="['流行','新款','精选']" @itemClick="itemClick"></TitleBar>
        <Goods :goods="goods[titles[currentIndex]]"></Goods>
      </div>
    </div>
    <BackTop :isShow="homeIsShow" @backTop="homeBackTop"></BackTop>
  </div>
</template>

<script>
  //导入公共组件
  import {Swiper,SwiperItem} from "@/components/common/swiper"
  import {request} from "@/network/axios";
  import TitleBar from "@/components/content/titleBar/TitleBar"
  import Goods from "@/components/content/goods/Goods"
  import BetterScroll from "better-scroll"
  import  BackTop from "@/components/content/backTop/BackTop"

  //导入私有组件
  import  HomeTopBar from "./Children/HomeTopBar"
  import HomeRecommend from "./Children/HomeRecommend"
  import WeekPopular from "./Children/WeekPopular"


  export default {
    name: "Home",
    components:{
      HomeTopBar,
      Swiper,
      SwiperItem,
      HomeRecommend,
      WeekPopular,
      TitleBar,
      Goods,
      BackTop
    },
    data(){
      return {
        banner:[],
        recommend:[],
        goods:{
          pop:{
            title:"流行",
            id:0,
            list:[]
          },
          news:{
            title:"新款",
            id:0,
            list:[]
          },
          sell:{
            title:"精选",
            id:0,
            list:[]
          }
        },
        titles:["pop","news","sell"],
        currentIndex : 0,
        scroll,
        homeIsShow:false
      }
    },
    methods:{
      getHomeMultidata(){
        request({
          url:"/home/multidata"
        }).then(res => {
          this.banner = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
          console.log(banner);
        })
      },
      getHomeGoodsInfo(title,id){
        request({
          url:"/home/"+ title,
          params:{
            id:id
          }
        }).then(res => {
          console.log(res);
          this.goods[title].list.push(...res.data.data.list)
          this.goods[title].id++

          this.$nextTick(() => {
            const scroll = new BetterScroll(this.$refs.wrapper, {
              click:true,
              probeType:3,
              pullUpLoad: true
            })
            this.scroll = scroll
            this.scroll.on("pullingUp",()=>{
              this.getHomeGoodsInfo(this.titles[this.currentIndex],this.goods[this.titles[this.currentIndex]].id+1)
            })

            this.scroll.on("scroll",(postion)=>{
              if(postion.y < -1000){
                this.homeIsShow = true
              }else{
                this.homeIsShow = false
              }
            })
          })
        })
      },

      itemClick(index){
        this.currentIndex = index
        this.scroll.refresh()
      },
      homeBackTop(){
        this.scroll.scrollTo(0,0,3000)
      }

    },
    created(){
      this.getHomeMultidata()
      this.getHomeGoodsInfo('pop',this.goods.pop.id+1)
      this.getHomeGoodsInfo('news',this.goods.news.id+1)
      this.getHomeGoodsInfo('sell',this.goods.sell.id+1)
    },
    mounted() {

    }
  }
</script>

<style scoped>
  #home{
    margin-bottom: 70px;
  }
  .wrapper{
    height: calc(100vh - 50px - 44px);
    overflow: hidden;
  }
  .content{
    /*height: 1000px;*/
  }
</style>