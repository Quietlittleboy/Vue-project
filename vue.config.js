// vue.config.js修改配置
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  //配置脚手架2到脚手架3的main.js文件,实例化vue的问题
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 配置main文件可以使用脚手架2
        'vue$': 'vue/dist/vue.esm.js',
        //路径简写
        '@': resolve('src')
      }
    },
  },
  //配置跨域问题
  devServer: {
    proxy: {
      '/api': {
        // 要请求数据的目标地址
        target: 'http://localhost:3001',
        // 是否跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // /api设置为空
        }
      }
    }
  }
}