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
import Goods from 'components/goods.vue'
export default {
  components: {
    Goods
  },
  data() {
    return {
      sortBy: 'multi', // 筛选的条件
      goods: {
        "title": "搜索结果",
        "littleTitle": "和风设计，温和清洁",
        "items": [
          {
            "name": "全棉针织条纹四件套 新款",
            "descript": "超柔针织棉，亲肤可裸睡",
            "price": "￥299",
            "imgSrc": "../src/assets/images/goods6.jpg",
            "tags": [
              {
                "class": "tag-red",
                "name": "爆品"
              },{
                "class": "tag-yellow",
                "name": "加价购"
              }
            ]
          },
          {
            "name": "跟我走·萌宠创意抱枕套",
            "descript": "趣味萌宠设计，立体刺绣更生动",
            "price": "￥39",
            "imgSrc": "../src/assets/images/goods7.png",
            "tagColor": "9色可选"
          },
          {
            "name": "全棉针织条纹四件套 新款",
            "descript": "超柔针织棉，亲肤可裸睡",
            "price": "￥299",
            "imgSrc": "../src/assets/images/goods6.jpg",
            "tags": [
              {
                "class": "tag-red",
                "name": "爆品"
              },{
                "class": "tag-yellow",
                "name": "加价购"
              }
            ]
          },
          {
            "name": "跟我走·萌宠创意抱枕套",
            "descript": "趣味萌宠设计，立体刺绣更生动",
            "price": "￥39",
            "imgSrc": "../src/assets/images/goods7.png",
            "tagColor": "9色可选"
          }
        ]
      }
    }
  },
  methods: {
    chooseSort(type){
      this.sortBy = type
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
