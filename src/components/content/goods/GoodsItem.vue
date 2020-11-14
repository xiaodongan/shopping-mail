<template>
  <div class="goods-item" @click="urlToDetail">
    <img :src="item.show.img" alt="">
    <p class="goods-title">{{item.title}}</p>
    <p class="goods-price">
      <span class="price">￥{{item.price}}</span>
      <img src="@/assets/img/common/collect.svg" alt="">
      <span class="cfav">{{item.cfav}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      item:Object
    },
    methods:{
      urlToDetail(){
        console.log(this.item);
        this.$router.push({
          path:"/detail",
          query:{
            id:this.item.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    width: 45%;
    margin-bottom: 20px;
  }
  .goods-item>img{
    width: 100%;
  }
  .goods-item p{
    line-height: 26px;
  }
  .goods-item p img{
    width: 14px;
    vertical-align: middle;
    margin-left: 40px;
  }
  .goods-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: #f00;
  }
  .goods-price span{
    display: inline-block;
    vertical-align: middle;
  }
</style>