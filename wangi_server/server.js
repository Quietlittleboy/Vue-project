// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router');

// 实例化Koa
const app = new Koa();
// 实例化KoaRouter
const router = new KoaRouter();

// 引入首页数据
let datasIndex = require('./datas/index.json')
//引入首页的居家生活数据
let datasLivingAt =require('./datas/indexCateModule.json')
// 引入分类左侧导航
let datasNavs = require('./datas/cateNavDatas.json')
// 引入分类列表导航
let datasLists = require('./datas/cateLists.json')


// let demoData = require('./datas/demo');//???

// 首页的数据
router.get('/index', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = datasIndex
});
//引入首页的居家生活数据
router.get('/indexCateModule', (ctx, next) => {
  ctx.body = datasLivingAt
});
//引入分类左侧导航
router.get('/classNav', (ctx, next) => {
  ctx.body = datasNavs
});
//引入分类右侧列表
router.get('/classLists', (ctx, next) => {
  ctx.body = datasLists
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
