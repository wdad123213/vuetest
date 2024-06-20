const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//    transpileDependencies: true,

// })


module.exports = {
   // 基本路径
   publicPath: process.env.NODE_ENV === 'production' ? '/vuetestnode/' : '/',

   // 输出文件目录
   outputDir: 'dist',

   // 静态资源目录
   assetsDir: 'static',

   // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
   lintOnSave: process.env.NODE_ENV !== 'production',

   // 是否使用包含运行时编译器的 Vue 构建版本
   runtimeCompiler: false,

   // 生产环境的 source map
   productionSourceMap: true,

   // webpack相关配置
   configureWebpack: {
      entry: {
         app: './src/main.js'
      },
      // plugins: [ // 配置插件
      //    new HtmlWebpackPlugin({ // 复制 html 文件，自动把生成的 js 引入到 html
      //       template: './public/index.html',
      //       filename: 'index.html',
      //       chunks: ['app'] // 设置引入的js文件
      //    }),
      //    // 配置抽离css文件
      //    new MiniCssExtractPlugin({
      //       filename: 'css/[name].[hash:8].css'
      //    })
      // ],
   },

   // 开发服务器配置
   devServer: {
      // 端口号
      port: 8080,

      // 启用 https
      https: false,

      // 自动打开浏览器
      open: true,

      // 代理配置
      // proxy: {
      //    '/api': {
      //       target: 'http://localhost:3000',
      //       ws: true,
      //       changeOrigin: true,
      //    },
      // },
   },

   // 第三方插件配置
   pluginOptions: {
      // ...
   },
};