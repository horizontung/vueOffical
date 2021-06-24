<template>
  <nav class="nav-bottom">
     <router-link to="/privacy-policy">
      <span class="link-privacy">mobile privacy policy</span>
     </router-link>
     <router-link to="/service-terms">
      <span class="link-service">mobile service terms</span>
     </router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-bottom'
}
</script>

<style lang="scss" scoped>
.nav-bottom{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 50px;
  font-size: 20px;
  background: rgb(0, 255, 136);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    &:hover{
      text-decoration: underline solid red 2px;
    }
    &:hover,
    &.router-link-exact-active {
      color: #008CFF;
    }
  }
  .link-privacy{
    margin:0 20px;
  }
}
</style>
