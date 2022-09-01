const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //用代理服务器解决跨域问题：
  devServer:{proxy:"http://localhost:3000"}
})

