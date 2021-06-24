<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// ⚠️ 此页面只作为一个顶级入口使用，pc 和 mobile 开发，到相应的文件夹下
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
 color: #333333;
 -webkit-tap-highlight-color:rgba(0,0,0,0);
 font-family:"Arial Rounded MT Bold",system-ui,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}
</style>
