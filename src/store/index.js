import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	recommendData: {},//首页推荐商品信息
	commonData: {},//首页其他商品信息
	commonName: null,//首页其他商品传入的路由参数name
	tagsHot: ['家居服特惠','浪漫礼物2件85折','衬衫T恤买3免1','餐厨满199减20','枕头','软木拖','四件套','收纳'],//热门搜索
	tagsHistory: [],//历史搜索记录
	suggestionArr: ['儿童','阿胶','耳机','儿童棉','儿童纯棉','儿童发饰','儿童服饰','儿童全棉','儿童婴儿','儿童裤衩','儿童玩具'],//搜索匹配
	goodsId: null,//商品id
	goodsDetailData: {},//商品详情信息
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})