import axios from 'axios'

/*首页推荐*/
export const recommendData = () => axios.get('../src/json/goods.json').then((res) => {
  return res.data.recommend
})

/*首页居家/配件/服饰等*/
export const commonData = (name) => axios.get('../src/json/goods.json').then((res) => {
  return res.data[name]
})

/*商品详情*/
export const goodsDetailData = (id) => axios.get('../src/json/goodsDetail.json').then((res) => {
  return res.data[id]
})