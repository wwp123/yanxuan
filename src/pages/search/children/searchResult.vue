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
          <div class="tit">价格</div>
          <div class="con"></div>
        </li>
        <li :class="{curr:sortBy == 'classify'}" @click="chooseSort('classify')">
          <div class="tit">分类</div>
          <div class="con"></div>
        </li>
      </ul>
    </header>
    <section class="mt10">
      <Goods :goods='goods' :class="'flex-item-2 descript-absolute'"></Goods>
    </section>
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
      sortBy: 'multi', // 筛选的条件
      goods: {}
    }
  },
  computed: {
    ...mapState({searchResultData: state => state.searchResultData})
  },
  created(){
    this.$store.dispatch('getSearchResultData')
  },
  methods: {
    chooseSort(type){
      this.sortBy = type
    }
  },
  watch: {
    searchResultData: function (value) {
      if (value) {
        this.goods = value
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
    & > li {
      flex-grow 1
      align-self center
      text-align center
      &.curr .tit {
        color #b4282d  
      }
    }
  }
  .sort-icon {
    display flex
    flex-direction column
    .iconfont {
      flex 0 1 auto 
    }  
  }
</style>
