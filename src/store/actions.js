import {recommendData} from '../service/getData'
import {commonData} from '../service/getData'
import {goodsDetailData} from '../service/getData'

export default {
  async getRecommendData({
		commit,
		state
	}) {
    let res = await recommendData()
		commit('RECOMMEND_GOODS', res)
  },
  async getCommonData({
		commit,
		state
	}) {
    let res = await commonData(state.commonName)
		commit('COMMON_GOODS', res)
	},
	async getGoodsDetailData({
		commit,
		state
	}) {
    let res = await goodsDetailData(state.goodsId)
		commit('GOODS_DETAIL', res)
	}
}