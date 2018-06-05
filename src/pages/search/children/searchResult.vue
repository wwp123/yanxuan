<template>
  <div>
    <header>
      <div class="search-wrap border-b">
        <router-link to="/home" class="search-btn"><i class="iconfont icon-shouye mr10"></i></router-link>
        <router-link to="/search" class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="换季收纳好物特惠" :value="this.$route.query.keyword">
        </router-link>
      </div>
      <ul class="sort">
        <li :class="{curr:sortBy == 'multi'}" @click="chooseSort('multi')">
          <div class="tit">综合</div>
        </li>
        <li :class="{curr:sortBy == 'price'}" @click="chooseSort('price')">
          <div class="tit">价格<span class="sort-icon"><i :class="['iconfont icon-xiangshang',{curr: this.lowToHigh}]"></i><i :class="['iconfont icon-xiangxia',{curr: this.highToLow}]"></i></span></div>
          <div class="con" v-show="isShowSortCon && sortBy == 'price'" @click.stop="showSortCon()">
            <ul class="flex-list">
              <li>
                <div class="key">筛选</div>
                <div class="info">
                  <input type="number" placeholder="最低价" v-model="minPrice">
                  <span class="line">——</span>
                  <input type="number" placeholder="最高价" v-model="maxPrice">
                </div>
              </li>
              <li>
                <div class="key">排序</div>
                <div class="info">
                  <span :class="[{curr: this.lowToHigh},'tag tag-hollow']" @click="lowToHighSort()">从低到高</span>
                  <span :class="[{curr: this.highToLow},'tag tag-hollow']" @click="highToLowSort()">从高到低</span>
                </div>
              </li>
            </ul>
            <div class="btn-group">
              <div class="btn" @click.stop="unShowSortCon()">取消</div>
              <div class="btn btn-confirm" @click.stop="sortPriceConfirm()">确定</div>
            </div>
          </div>
        </li>
        <li :class="{curr:sortBy == 'classify'}" @click="chooseSort('classify')">
          <div class="tit">分类</div>
          <div class="con" v-show="isShowSortCon && sortBy == 'classify'">分类分类</div>
        </li>
      </ul>
    </header>
    <section class="mt10">
      <Goods :goods='goods' :class="'flex-item-2 descript-absolute'"></Goods>
    </section>
    <div class="mask" v-show="isShowSortCon" @click="unShowSortCon()"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Goods from 'components/goods.vue'

export default {
  components: {
    Goods
  },
  data() {
    return {
      goods: [], //商品
      sortBy: 'multi', // 筛选的条件
      isShowSortCon: false, //是否显示筛选内容
      lowToHigh: false, //价格从低到高排序
      highToLow: false, //价格从高到低排序
      minPrice: null,  //用户输入的最低价格
      maxPrice: null  //用户输入的最高价格
    }
  },
  computed: {
    ...mapState({searchResultData: state => state.searchResultData})
  },
  created(){
    this.$store.dispatch('getSearchResultData')
  },
  methods: {
    //综合、价格、分类选中
    chooseSort(type){
      if(this.sortBy === type) {
        this.isShowSortCon = !this.isShowSortCon
      }else{
        this.sortBy = type
        this.isShowSortCon = true
      }
    },
    //价格从低到高
    lowToHighSort() {
      this.lowToHigh = !this.lowToHigh
      this.highToLow = false
    },
    //价格从高到低
    highToLowSort() {
      this.highToLow = !this.highToLow
      this.lowToHigh = false
    },
    //调整最低价最高价
    sortPriceFomat() {
      let tempPrice = 0
      if(this.minPrice !== null && this.maxPrice !== null && parseInt(this.minPrice) > parseInt(this.maxPrice)){
        tempPrice = this.minPrice
        this.minPrice = this.maxPrice
        this.maxPrice = tempPrice
      }
    },
    //商品按照价格排序
    priceSort() {
      for(let i = this.goods.length-1; i >= 0; i--) {
        if(this.minPrice !== null) {
          if(this.goods[i].price < this.minPrice) {
            this.goods.splice(i,1)
          }
        }
        if(this.maxPrice !== null) {
          if(this.goods[i].price > this.maxPrice) {
            this.goods.splice(i,1)
          }
        }
      }
      if(this.lowToHigh){
        this.goods.sort(function(a,b){
          a = a['price']
          b = b['price']
          return a - b
        })
      }
      if(this.highToLow){
        this.goods.sort(function(a,b){
          a = a['price']
          b = b['price']
          return b - a
        })
      }
    },
    //确定按钮
    sortPriceConfirm() {
      this.isShowSortCon = false
      this.sortPriceFomat()
      this.priceSort()
    },
    //显示筛选内容
    showSortCon() {
      this.isShowSortCon = true
    },
    //不显示筛选内容
    unShowSortCon() {
      this.isShowSortCon = false
    }
  },
  watch: {
    searchResultData: function (value) {
      if (value) {
        for(let i in value){
          this.goods.push(value[i])
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sort {
    display flex
    justify-content center
    height 1.6rem
    font-size .6rem
    border-bottom 1px solid #d9d9d9
    position relative
    z-index 101
    & > li {
      flex-grow 1
      align-self center
      text-align center
      &.curr .tit {
        color #b4282d  
      }
      .con {
        position absolute
        left 0
        top calc(1.6rem + 1px)
        width 100%
        background-color #ffffff
        box-shadow 0 2px 3px rgba(0,0,0,.1) 
        text-align left
        .flex-list {
          padding .5rem 0 .5rem .5rem
          & > li {
            border none
            .key {
              flex-basis 2rem
            }
            input {
              width 5.4rem
              height 1.1rem
              line-height 1.1rem
              border 1px solid #7f7f7f
              text-align center
              &:focus {
                border-color #b4282d
              }
            }
            .line {
              color #7f7f7f
            }
          }
        }
      }
    }
  }
  .btn-group {
    display flex
    border-top 1px solid #d9d9d9
    height 2.2rem
    line-height 2.2rem
    .btn {
      flex-grow 1
      font-size .6rem
      background-color #fff
      color #333
      border none
      &.btn-confirm {
        color #b4282d
      }
      &:not(:first-child) {
        border-left 1px solid #d9d9d9
      }
    }
  }
  .sort-icon {
    position relative
    margin-left .25rem
    .iconfont {
      position absolute
      font-size .4rem
      color #999
      &.curr {
        color #b4282d
      }
    }  
    .icon-xiangshang {
      top 1px
    }
    .icon-xiangxia {
      bottom 0
    }
  }
  .tag-hollow {
    border-color #999999
    color #333333
    padding 4px 12px
    border-radius 2px
    margin-right .5rem
    margin-bottom 0
    &.curr {
      border-color #b4282d
      color #b4282d
    }
  }
  .mask {
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    z-index 99
  }
</style>
