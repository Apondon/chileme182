const Koa = require('koa')
const app = new Koa()
const cfg = require('./config') // 引入配置文件
const mongoose = require('mongoose') //引入mongoose
const KoaBody = require('koa-body') //解析post请求

// 配置数据库链接
mongoose.connect(cfg.path)
mongoose.connection.on('error',()=>{
    console.log('数据库链接错误')
})
mongoose.connection.once('open',() => {
    console.log('数据库已连接')
})





app.use(async ctx=>{
    ctx.body = 'hellooooooooooo'
})
app.use(KoaBody()) // 配置koa-body

// const Router = require('koa-router')
// const router = new Router()
// app
//   .use(router.routes())
//   .use(router.allowedMethods())

app.listen(cfg.port)
console.log(`server is running at http://127.0.0.1:${cfg.port}`)