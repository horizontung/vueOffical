<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view class="main-view"/>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavTop from '@/pc/components/nav-link/NavTop'
import NavBottom from '@/pc/components/nav-link/NavBottom'
export default {
  name: 'index',
  components: { NavTop, NavBottom }
}
</script>

<style lang="scss">
.main-view{
  // 设置这个的原因是：页面底部的nav位置是fixed的
  padding-bottom: 50px;
}
</style>
