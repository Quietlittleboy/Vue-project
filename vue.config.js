// vue.config.js修改配置
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
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
}