const Goods = require('../model/goods_schema')


// 添加商品
const addGoods = async ctx => {
    console.log(ctx.request.body)
    ctx.body = 'add'
} 
// 查询商品列表
const getGoodsList = async ctx => {
    ctx.body = 'goodsList'
} 
// 查询商品详情
const getGoodsItem = async ctx => {
    ctx.body = 'goodsItem'
} 

module.exports = {
    addGoods,
    getGoodsList,
    getGoodsItem
}