<template>
  <div class="nav-top">
    <img src="https://lorempixel.com/60/60" >
    <div class="hamburger" @click="clickHamb">
      <ul :class="[active?'active':'']">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavTop',
  data () {
    return {
      active: false

    }
  },
  methods: {
    clickHamb () {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-top{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  font-size: 20px;
  background: #a3b942;
  img{
    width: 60px;
    height: 60px;
  }
  .hamburger{
    ul{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 120px;
      height: 120px;
      cursor: pointer;
    }
    ul li{
      list-style: none;
      position: absolute;
      left: 5%;
      transform: translateY(-50%);
      width: 90%; height: 15px;
      background: #fff;
      border-radius: 20px;
      transition: .9s;
      opacity: 1;
    }
    ul li:nth-of-type(1){
        top: 20%;
    }
    ul li:nth-of-type(2),ul li:nth-of-type(3){
        top: 50%;
    }
    ul li:nth-of-type(4){
        top: 80%;
    }

    ul.active li:nth-of-type(1){
        top: -20%;
        opacity: 0;
    }
    ul.active li:nth-of-type(2){
        transform: translateY(-50%) rotate(45deg);
    }
    ul.active li:nth-of-type(3){
        transform: translateY(-50%) rotate(-45deg);
    }
    ul.active li:nth-of-type(4){
        top: 120%;
        opacity: 0;
    }

  }
}
</style>
