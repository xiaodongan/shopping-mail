<template>
  <div id="detail">
    <top-bar bgCol="#fff">
      <div slot="left" @click="backHome">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="ti-center">
        <div class="ti-item"
             v-for="(item,index) in topTitles"
             :key="item"
             @click="changeIndex(index)"
             :class="{active: currentIndex == index ? true : false}"
        >{{item}}</div>
      </div>
    </top-bar>
    <div class="banner">
      <Swiper>
        <SwiperItem v-for="(item,index) in detailGoods.bannerImg":key="index">
          <img :src="item" alt="">
        </SwiperItem>
      </Swiper>
    </div>

  </div>
</template>

<script>
  import {request} from "@/network/axios";
  import TopBar from "@/components/common/TopBar/TopBar"
  import {Swiper,SwiperItem} from "@/components/common/swiper"

  export default {
    name: "Detail",
    data(){
      return {
        detailGoods:{
          bannerImg:[],
          shoppingInfo:{
            title:"",
            price:"",
            oldPrice:"",
            desc:""
          },
          columns:[],
          services:[],
          shopInfo:{},
          desc:"",
          detailInfo:[],
          itemParams:{},
          rate:[]
        },
        topTitles:["商品","参数","评论","推荐"],
        currentIndex:0
      }
    },
    components:{
      TopBar,
      Swiper,
      SwiperItem
    },
    methods:{
      getDetailData(iid){
        request({
          url:"/detail",
          params:{
            goodsId:iid
          }
        }).then(value => {
          console.log(value);
          var da = value.data.result
          this.detailGoods.bannerImg = da.itemInfo.topImages
          this.detailGoods.shoppingInfo.title = da.itemInfo.title
          this.detailGoods.shoppingInfo.price = da.itemInfo.price
          this.detailGoods.shoppingInfo.oldPrice = da.itemInfo.oldPrice
          this.detailGoods.shoppingInfo.desc = da.itemInfo.discountDesc
          this.detailGoods.columns.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
          this.detailGoods.services = da.shopInfo.services
          this.detailGoods.services.pop()
          this.detailGoods.shopInfo = da.shopInfo
          this.detailGoods.desc = da.itemInfo.desc
          this.detailGoods.detailInfo = da.detailInfo.detailImage[0].list
          this.detailGoods.itemParams = da.itemParams
          this.detailGoods.rate = da.rate.list

          console.log(this.detailGoods);
        })
      },

      backHome(){
        this.$router.push("/home")
      },
      changeIndex(index){
        this.currentIndex = index
      }
    },
    created(){
      this.getDetailData(this.$route.query.id)
  }
  }
</script>

<style scoped>
  .ti-center{
    display: flex;
  }
  img{
    margin-top: 10px;
  }
  .ti-item{
    flex: 1;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
  }
  .active{
    color: red;
  }
  .banner{
    height: 300px;
    overflow: hidden;
  }
</style>