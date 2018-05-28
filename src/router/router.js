import Vue from 'vue'
import VueRouter from 'vue-router'

import home from 'pages/home/home.vue'
import shop from 'pages/shop/shop.vue'
import classify from 'pages/classify/classify.vue'
import cart from 'pages/cart/cart.vue'
import center from 'pages/center/center.vue'
import search from 'pages/search/search.vue'
import searchResult from 'pages/search/children/searchResult.vue'
import recommend from 'pages/home/children/recommend.vue'
import other from 'pages/home/children/other.vue'
import goodsDetail from 'pages/goodsDetail/goodsDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  routes: [
    {
      //首页
      path: '/home',
      component: home,
      children: [
        {
          //推荐
            path: '',
            component: recommend,
            meta: { keepAlive: true }
        },
        {
          //其他商品
            path: 'list',
            component: other
        }
      ]
    },
    {
      //识物
      path: '/shop',
      component: shop
    },
    {
      //分类
      path: '/classify',
      component: classify
    },
    {
      //购物车
      path: '/cart',
      component: cart
    },
    {
      //个人中心
      path: '/center',
      component: center
    },
    {
      //搜索页
      path: '/search',
      component: search,
      children: [
        {
          //搜索结果页
          path: '/searchResult',
          component: searchResult
        }
      ]
    },
    {
      //商品详情页
      path: '/goodsDetail',
      component: goodsDetail
    }
  ]
})
router.push('/home')

export default router