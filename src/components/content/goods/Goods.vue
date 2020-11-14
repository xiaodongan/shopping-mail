<template>
  <div class="goods">
    <GoodsItem v-for="item in goods.list" :item="item"></GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem"
  export default {
    name: "Goods",
    components:{
      GoodsItem
    },
    props:{
      goods:Object
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>