<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommend:Array
    }
  }
</script>

<style scoped>
  .home-recommend{
    display: flex;
  }
  .recommend-item{
    text-align: center;
    flex: 1;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 10px solid #ccc;
  }
  .recommend-item img{
    width: 60px;
  }
  a{
    color: #333;
    font-size: 12px;
  }
</style>