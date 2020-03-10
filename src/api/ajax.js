// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use(config =>{
  // 获取method,及data对象
  const {method, data}=config
  if(method.toUpperCase()==='POST'&& data instanceof Object){
    // 把data对象转urlEncoding的形式
    config.data = qs.stringify(data)
  }
  return config
})
// 添加向应拦截器
axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  // 弹出错误
  alert(error)
  // 中断错误信息
  return new Promise(()=>{})
})
// 向外暴露axiso
export default axios