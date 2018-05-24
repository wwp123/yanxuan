<template>
  <div>
    <a href=""><img :src="banner" alt=""></a>
    <section class="mt10" v-for="(item, index) in goods" :key="index">
      <a class="title" href="">{{item.title}}<p>{{item.littleTitle}}</p></a>
      <Goods :goods='item' :class="'flex-item-2 descript-absolute'"></Goods>
    </section>
    <gotop></gotop>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Goods from 'components/goods.vue'
import gotop from 'components/gotop.vue'

export default {
  components: {
    Goods,
    gotop
  },
  data() {
    return {
      banner: "",
      goods: {}
    }
  },
  computed: {
    ...mapState({commonData: state => state.commonData})
  },
  created(){
    this.initData()
  },
  methods: {
    initData(){
      this.$store.state.commonName = this.$route.query.name
      this.$store.dispatch('getCommonData')
    }
  },
  watch: {
    commonData: function (value) {
      if (value && value.modCon) {
        this.goods = value.modCon
      }
      if(value && value.banner) {
        this.banner = value.banner
      }
    },
    $route(){
      this.initData()
    }
  }
}
</script>
