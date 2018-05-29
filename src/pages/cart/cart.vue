<template>
  <div>
    <div v-if="this.$store.getters.cartGoodsNumber === 0" class="panel">
      <div class="panel-hd">购物车</div>
      <div class="panel-bd">
        <ul class="service-policy">
          <li v-for="service in servicePolicy" :key="service"><i class="iconfont icon-quan"></i>{{service}}</li>
        </ul>
        <div class="nodata">
          <img src="../../../src/assets/images/cart.png" alt="">
          <p>去添加点什么吧</p>
          <router-link to="/login" class="btn">登录</router-link>
        </div>
      </div>
    </div>
    <div v-else class="panel">
      <div class="panel-hd">
        <h1>购物车</h1>
        <div class="panel-btn">编辑</div>
      </div>
      <div class="panel-bd">
        <div class="notice"><span>已满足免邮条件</span></div>
        <section class="mt10">
          <ul class="flex-list goods-list">
            <li v-for="(goods, index) in this.$store.state.cartGoods" :key="index">
              <div class="key"><span class="checkbox checked"><i class="iconfont icon-check"></i></span></div>
              <div class="info nowrap">
                <router-link :to="{path:'/goodsDetail',query:{id:index}}"><img :src="goods.pic" alt=""></router-link>
                <div class="txt">
                  <h4>{{goods.name}}</h4>
                  <p class="des">{{goods.sku}}</p>
                  <div class="txtbtm">
                    <div class="count fr">
                      <span @click="countGoodsNumber(goods,false)">-</span>
                      <input type="number" v-model="goods.num" />
                      <span @click="countGoodsNumber(goods,true)">+</span>
                    </div>
                    <span>￥{{goods.price}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div class="panel-ft">
        <div class="info">
          <span class="checkbox checked"><i class="iconfont icon-check"></i></span>
          <span>已选()</span>
          <span class="fr price">￥</span>
        </div>
        <div class="key">
          <span class="btn btn-full">下单</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from 'components/footer.vue'

export default {
  components: {
      Footer
  },
  data() {
    return {
      servicePolicy: ['30天无忧退货','48小时快速退款','满88元免邮费']
    }
  },
  methods: {
    //单个商品是否选中
    toggleChecked(event) {
      console.log(event)
    },
    //商品数量加减
    countGoodsNumber(goods,flag){
      if(flag){
        goods.num++
      }else{
        if(goods.num <= 1){
          Toast('本商品1件起售')
          goods.num = 1
          return
        }
        goods.num--
      }
      // this.$store.state.cartGoods = Object.assign({}, this.$store.state.cartGoods)
      this.$store.commit('ADD_TO_CART', this.$store.state.cartGoods)
    },
  }
}
</script>

<style lang="stylus" scoped>
  .panel {
    .panel-hd {
      background-color #fff  
      .panel-btn {
        position absolute
        right .5rem
        top 0
      }
    }
    .panel-ft {
      bottom 2rem
      height 2rem
      line-height 2rem
      background-color #fff
      font-size .6rem
      .info {
        flex-grow 1 
        padding 0 .5rem 
        font-size 0
        span {
          font-size .6rem
        }
      }  
      .btn {
        width 4.8rem  
      }
    }
  }
  .checkbox {
    display inline-block
    width .7rem
    height .7rem
    border 1px solid #d9d9d9
    background-color #fff
    border-radius 50%
    text-align center
    line-height .7rem
    margin-right .5rem
    .iconfont {
      font-size .6rem
      color #fff
    }
    &.checked {
      background-color #b4282d
      border-color #b4282d
    }
  }
  .service-policy {
    background-color transparent
    color #666
    .iconfont {
      color #666
    }  
  }
  .nodata {
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    text-align center
    img {
      width 5.3rem
    } 
    p {
      font-size .6rem
      color #999
      margin-top -.25rem
    }
    .btn {
      width 10.2rem
      height 2rem
      line-height 2rem
      font-size .65rem
      margin-top 1.25rem  
    }
  }
  .notice {
    display flex
    align-items center
    font-size .65rem
    color #f48f18
    background-color #fff8d8
    padding 0 .5rem
    height 1.7rem  
    span {
      flex-grow 1
    }
  }
  .goods-list {
    & > li {
      padding 0
      border none
      &:not(:first-child) .info {
        border-top 1px solid #ececec
      }
      .key {
       padding .5rem 0
       align-self center
      } 
      .info {
        padding .5rem .5rem .5rem 0
        img {
          width 3.4rem
          height 3.4rem
          background-color #f4f4f4
          margin-right .5rem
          float left
        }
        .txt {
          line-height 1
          .des {
            color #666666
            margin-top .25rem  
          }
          .txtbtm {
            margin-top 1rem
            line-height 1rem  
          }
        }
      }
    }
  }
  .count {
    height 1rem
    line-height 1rem
    input {
      line-height 1rem
      width 2rem
    }  
    span {
      width 1.5rem
      font-size 1rem
    }
  }
</style>
