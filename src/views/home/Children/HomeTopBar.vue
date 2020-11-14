<template>
  <div>
    <TopBar bgCol="#ff69b4">
      <div slot="center">
        <h3>购物街</h3>
      </div>
    </TopBar>
  </div>
</template>

<script>
  import TopBar from "@/components/common/TopBar/TopBar"
  export default {
    name: "HomeTopBar",
    components:{
      TopBar
    }
  }
</script>

<style scoped>
  h3{
    text-align: center;
    line-height: 44px;
    color: #fff;
  }
</style>