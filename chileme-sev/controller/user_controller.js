// 1.引入model文件夹中定义好的Schema
const User = require('../model/user_schema')
// 2.构造中间件

/* async/await 
    async 异步  放在function关键字之前，声明该函数为一个异步函数   返回一个promise对象
    async function fn(){}
    await 同步 必须和async搭配使用不能单独出现  等待上一个async函数完成之后再执行后面的代码
    async function fn(){
        await .......
    }

*/ 


// 注册
const register = async ctx => {
    let data = ctx.request.body
    // 1.验证数据是否合法    账号，密码，手机号（格式/手机号唯一性）
    // 2.注册成功
    ctx.body = 'register!'
}
/*
const register = async (ctx) => {}
const register = async function(ctx){}
async function register(ctx){}
*/ 
// 登录
const login = async ctx => {
    let data = ctx.request.body
    // 1.验证登录信息是否合法  能否再库中查到该账号，账号信息和密码是否匹配
    // 2.登录成功
    ctx.body = 'login!'
}

// 3.暴露中间件
module.exports = {
    register,
    login
}