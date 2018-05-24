<template>
  <div>
    <header class="topbar">
      <div class="flex isFixed">
        <router-link to="/home" class="key"><i class="iconfont icon-shouye"></i></router-link>
        <router-link to="/home" class="info"><h1 class="logo"></h1></router-link>
        <router-link to="/search" class="key"><i class="iconfont icon-sousuo"></i></router-link>
        <router-link to="/cart" class="key"><i class="iconfont icon-gouwuche"></i></router-link>
      </div>
    </header>
    <main>
      <swiper :slides="goods.imgSrc"></swiper>
      <ul class="characteristic">
        <li v-for="(item, index) in goods.characteristic" :key="index">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="txt">
            <P v-for="(txt, index) in item.txt" :key="index">{{txt}}</P>
          </div>
        </li>
      </ul>
      <div class="goods-info flex">
        <div class="info">
          <h2>{{goods.name}}</h2>
          <p class="descript">{{goods.descript}}</p>
          <span class="price">{{goods.price}}</span>
        </div>
        <div class="key">
          <p class="num">54</p>
          <p>用户评价</p>
          <span class="btn btn-small btn-7f7f7f">查看</span>
        </div>
      </div>
    </main>
    <aside>
      <gotop></gotop>
    </aside>
    <footer class="footer">
      <div class="flex">
        <div class="key"><i class="iconfont icon-kefu"></i></div>
        <div class="info"><div class="btn btn-white btn-full">立即购买</div></div>
        <div class="info"><div class="btn btn-full">加入购物车</div></div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import swiper from 'components/swiper.vue'
import gotop from 'components/gotop.vue'

export default {
  components: {
    swiper,
    gotop
  },
  data() {
    return {
      imgs: ['../src/assets/images/goods4.jpg','../src/assets/images/goods3.png'],
      goods: {}
    }
  },
  computed: {
    ...mapState({goodsDetailData: state => state.goodsDetailData})
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      this.$store.state.goodsId = this.$route.query.id
      this.$store.dispatch('getGoodsDetailData')
    }
  },
  watch: {
    goodsDetailData: function (value) {
      if (value) {
        this.goods = value
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .topbar {
    height 1.8rem
    .isFixed {
      height 1.8rem  
      background-color #fafafa
    }
    .flex {
      .key {
        padding .25rem .5rem
      }  
      .info {
        margin 0 .5rem  
      }
    }
  }
  .footer {
    height 2.2rem
    & > div {
      position fixed
      bottom 0
      left 0
      width 100%
      height 2.2rem
      line-height 2.2rem
      background-color #ffffff
      border-top 1px solid #c7c7c7
      .key {
        flex-basis 3.3rem
        border-right 1px solid #c7c7c7
        .iconfont {
          font-size 1.2rem  
          color #999
        }
      }
    }
  }
  .characteristic {
    display flex
    justify-content space-evenly
    background-color #F9F9F9
    padding .5rem
    li {
      flex-grow 1
      display flex
      justify-content center
      align-items center
      .img {
        flex-basis 1.5rem
        margin-right .25rem  
        img {
          width 100%
          height 100%
          border-radius 50%
        } 
      }
      .txt {
        font-size .6rem  
        line-height 1
        p:first-child {
          margin-bottom .25rem
        }
      }
    }
  }
  .goods-info {
    background-color #ffffff
    padding .75rem 0 .75rem .5rem  
    .info {
      text-align left
      h2 {
        font-size .75rem
      }
      .descript {
        font-size .6rem
        color #7f7f7f
        margin-top .25rem  
      }
      .price {
        display inline-block
        font-size 1rem
        font-weight 700
        color #B4282D  
        margin-top .25rem  
      }
    }
    .key {
      border-left 1px dashed #919191
      font-size .6rem
      color #B4282D
      padding .5rem
      .num {
        font-weight 700  
      }
      p {
        margin-bottom .25rem
      }
    }
  }
</style>
