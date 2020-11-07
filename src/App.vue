<template>
  <div id="app">
    <router-view></router-view>
    <MainTab></MainTab>
  </div>
</template>

<script>
import MainTab from "./components/content/MainTab"
export default {
  name: 'App',
  components: {
    MainTab
  }
}
</script>

<style>
  @import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "./assets/css/base.css";
  .item-icon{
    font-size: 26px;
  }
</style>
