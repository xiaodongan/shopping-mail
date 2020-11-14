<template>
  <div class="back-top" v-show="isShow" @click="backTop">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      backTop(){
        this.$emit("backTop")
      }
    }

  }
</script>

<style scoped>
    .back-top{
      width: 40px;
      height: 40px;
      position: fixed;
      bottom: 80px;
      right: 30px;
      opacity: 0.5;
    }
    .back-top img{
      width: 100%;
    }
</style>