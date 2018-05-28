const RECOMMEND_GOODS = 'RECOMMEND_GOODS'
const OTHER_GOODS = 'OTHER_GOODS'
const GOODS_DETAIL = 'GOODS_DETAIL'
const SEARCH_RESULT = 'SEARCH_RESULT'

export default {
  [RECOMMEND_GOODS](state, res){
    state.recommendData = {...res}
  },
  [OTHER_GOODS](state, res){
    state.otherData = {...res}
  },
  [GOODS_DETAIL](state, res){
    state.goodsDetailData = {...res}
  },
  [SEARCH_RESULT](state, res){
    state.searchResultData = {...res}
  }
}