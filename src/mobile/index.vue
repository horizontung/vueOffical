<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view/>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavTop from '@/mobile/components/nav-link/NavTop'
import NavBottom from '@/mobile/components/nav-link/NavBottom'
export default {
  name: 'index',
  components: { NavTop, NavBottom }
}
</script>

<style lang="scss">
</style>
