import axios from 'axios'

/*首页推荐*/
export const recommendData = () => axios.get('../src/json/recommendGoods.json').then((res) => {
  return res.data.recommend
})

/*首页其他商品等*/
export const otherData = (name) => axios.get('../src/json/otherGoods.json').then((res) => {
  return res.data[name]
})

/*搜索结果*/
export const searchResultData = () => axios.get('../src/json/searchResult.json').then((res) => {
  return res.data
})

/*商品详情*/
export const goodsDetailData = (id) => axios.get('../src/json/goodsDetail.json').then((res) => {
  return res.data[id]
})