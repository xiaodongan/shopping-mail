<template>
  <div class="title-bar">
    <div class="title-item"
         v-for="(item,index) in titles"
         :key="item"
         @click="changeStyle(index)"
        >
      <span :class="{active: currentIndex == index ? true : false}">
         {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    props:{
      titles:{
        type:Array,
        // default(){
        //   return ["流行","新款","精选"]
        // }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      changeStyle(index){
        this.currentIndex = index
        this.$emit("itemClick",index)
      }
    }
  }
</script>

<style scoped>
  .title-bar{
    display: flex;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
  }
  .title-item{
    flex: 1;
    text-align: center;
  }
  span{
    padding: 0px 10px;
  }
  .active{
    color: #ff69b4;
    border-bottom: 3px solid #ff69b4;
  }
</style>