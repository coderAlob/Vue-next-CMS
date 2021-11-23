// eslint-disable-next-line @typescript-eslint/no-unused-vars
const path = require("path")

module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }

  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views"
      }
    }
  }
}
