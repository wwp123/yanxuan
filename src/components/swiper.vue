<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in slides" :key="index">
        <img :src="slide">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import '../assets/styles/swiper.min.css'
import Swiper from 'swiper'
export default {
  props: {
    slides: {}
  },
  updated() {
    this.initData()
  },
  methods: {
    initData() {
      new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      })
    }
  }
}
</script>

<style lang="stylus">
  .swiper-container > .swiper-pagination-bullets .swiper-pagination-bullet {
    width .8rem
    height .08rem
    margin 0 .1rem
    background-color #ffffff
    opacity .4
    &.swiper-pagination-bullet-active {
      opacity 1
    }  
  }
  .service-policy {
    background-color #ffffff
    font-size .6rem
    display flex
    justify-content space-evenly
    padding .4rem 0
    .iconfont {
      font-size .6rem
      color #b4282d
      margin-right .15rem
    } 
  }
</style>
