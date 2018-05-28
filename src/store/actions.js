import {recommendData} from '../service/getData'
import {otherData} from '../service/getData'
import {goodsDetailData} from '../service/getData'
import {searchResultData} from '../service/getData'

export default {
  async getRecommendData({
		commit,
		state
	}) {
    let res = await recommendData()
		commit('RECOMMEND_GOODS', res)
  },
  async getOtherData({
		commit,
		state
	}) {
    let res = await otherData(state.otherDataName)
		commit('OTHER_GOODS', res)
	},
	async getGoodsDetailData({
		commit,
		state
	}) {
    let res = await goodsDetailData(state.goodsId)
		commit('GOODS_DETAIL', res)
	},
	async getSearchResultData({
		commit,
		state
	}) {
    let res = await searchResultData()
		commit('SEARCH_RESULT', res)
	}
}