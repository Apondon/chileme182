// 1.引入koa-router 及 controller中定义好的中间件
// 2.对koa-router 进行实例化
// 3.定义接口
// 4.暴露接口
const Router = require('koa-router') // 引入koa-router
const router = new Router()  // 对路由进行实例化
// 接口
// test
router.get('/',async ctx => {
    ctx.body = 'hello'
})
router.get('/test',async ctx => {
    ctx.body = 'test'
})

// 用户接口


// 商品接口


// 订单接口



module.exports = router