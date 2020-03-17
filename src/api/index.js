// 引入axios
import ajax from './ajax.js'
// 定义首页的接口
export const reqProductsShow = () =>ajax.get(`/api/index`)
//定义首页居家生活的接口
export const reqLivingAt =() =>ajax.get('/api/indexCateModule')
//定义分类导航的接口
export const reqClassNav =() =>ajax.get('/api/classNav')
//定义分类列表的接口
export const reqClassLists =() =>ajax.get('/api/classLists')
// 定义值得买轮播图接口
export const reqPurchaseNav = ()=>ajax.get('/ips/topic/v1/know/navWap.json')
//定义值得买商品列表
export const reqPurchaseList =()=>ajax.get('/ips/topic/v1/find/recManual.json')
