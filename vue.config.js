const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  devServer:{
    proxy:{
      ["/"]:{
        target:'http://localhost:8080',
        changeOrigin:true,
        ws: false,
        pathRewrite:{
          '^/': ''
        }
      }
    }

  }
})
