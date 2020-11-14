<template>
  <div class="wrapper">
    <ul class="content">
      <li>0001</li>
      <li>0002</li>
      <li>0003</li>
      <li>0004</li>
      <li>0005</li>
      <li>0006</li>
      <li>0007</li>
      <li>0008</li>
      <li>0009</li>
      <li>00010</li>
      <li>00011</li>
      <li>00012</li>
      <li>00013</li>
      <li>00014</li>
      <li>00015</li>
      <li>00016</li>
      <li>00017</li>
      <li>00018</li>
      <li>00019</li>
      <li>00020</li>
      <li>00021</li>
      <li>00022</li>
      <li>00023</li>
      <li>00024</li>
      <li>00025</li>
      <li>00026</li>
      <li>00027</li>
      <li>00028</li>
      <li>00029</li>
      <li>00030</li>
    </ul>
  </div>

</template>

<script>
  import BetterScroll from "better-scroll"
  export default {
    name: "Category",
    mounted(){
      this.$nextTick(() => {
        this.scroll = new BetterScroll(".wrapper", {

        })
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100px;
    overflow: hidden;
  }

</style>