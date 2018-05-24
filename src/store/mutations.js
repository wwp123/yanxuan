const RECOMMEND_GOODS = 'RECOMMEND_GOODS'
const COMMON_GOODS = 'COMMON_GOODS'
const GOODS_DETAIL = 'GOODS_DETAIL'

export default {
  [RECOMMEND_GOODS](state, res){
    state.recommendData = {...res}
  },
  [COMMON_GOODS](state, res){
    state.commonData = {...res}
  },
  [GOODS_DETAIL](state, res){
    state.goodsDetailData = {...res}
  }
}