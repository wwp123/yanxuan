<template>
  <div>
    <header class="topbar">
      <div class="flex isFixed">
        <router-link to="/home" class="key"><i class="iconfont icon-shouye"></i></router-link>
        <router-link to="/home" class="info"><h1 class="logo"></h1></router-link>
        <router-link to="/search" class="key"><i class="iconfont icon-sousuo"></i></router-link>
        <router-link to="/cart" class="key">
          <i class="iconfont icon-gouwuche"></i>
          <span class="icon-num" v-if="cartGoodsNumber !== 0">{{cartGoodsNumber}}</span>
        </router-link>
      </div>
    </header>
    <main>
      <div class="login-wrap">
        <div class="login-img"><i class="icon-login"></i></div>
        <div class="login-con">
          <router-link to="/login" class="btn btn-full"><i class="iconfont icon-shouji"></i> 手机号码登录</router-link>
          <a href="" class="btn btn-hollow btn-full"><i class="iconfont icon-youxiang"></i> 邮箱账号登录</a>
          <p><a href="">手机账号快速注册 <i class="iconfont icon-xiangyou"></i></a></p>
        </div>
      </div>
    </main>
    <footer class="flex quick-login">
      <div class="key"><i class="iconfont icon-weixin"></i> 微信</div>
      <div class="key"><i class="iconfont icon-qq"></i> QQ</div>
      <div class="key"><i class="iconfont icon-weibo"></i> 微博</div>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cartGoodsNumber'])
  }
}
</script>

<style lang="stylus" scoped>
  .icon-login {
    display inline-block
    width 5.7rem
    height 1.9rem
    background-image url(../../../src/assets/images/login.png) 
    background-size 100% 100%
  }
  .login-img {
    padding 3.4rem 0
    text-align center  
  }
  .login-con {
    padding 0 .75rem  
    .btn {
      line-height 2rem
      border-radius 2px
      margin-bottom .75rem  
      .iconfont {
        font-size .9rem  
        position relative
        top 2px
      }  
    }
    p {
      text-align center
      font-size .6rem
      .iconfont {
        font-size .6rem  
      }
    }
  }
  .quick-login {
    position absolute
    left 0
    bottom 1.7rem 
    width 100%
    color #7f7f7f
    font-size .6rem
    .key {
      padding 0 .75rem
      &:not(:first-child) {
        border-left 1px solid #979797
      } 
      .iconfont {
        font-size .75rem  
      }
    }
  }
</style>
