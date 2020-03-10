// 引入首页数据
let datasIndex = require('./datas/index.json')
// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router');

// 实例化Koa
const app = new Koa();
// 实例化KoaRouter
const router = new KoaRouter();


let demoData = require('./datas/demo');//???

router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

// 首页的数据
router.get('/index', (ctx, next) => {
  // 1. 获取路由参数： query对象
  
  // 2. 返回路由数据
  ctx.body = datasIndex
});


router.post('/test2', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = 'post请求的测试数据'
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器启动了')
  console.log('服务器地址: http://localhost:3001');
})
