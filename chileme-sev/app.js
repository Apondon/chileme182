const Koa = require('koa')
const app = new Koa()

const KoaBody = require('koa-body')

app.use(async ctx=>{
    ctx.body = 'hellooooooooooo'
})
app.use(KoaBody())

// const Router = require('koa-router')
// const router = new Router()
// app
//   .use(router.routes())
//   .use(router.allowedMethods())

app.listen(3000)
console.log(`server is running at http://127.0.0.1:3000`)