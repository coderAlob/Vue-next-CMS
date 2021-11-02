// eslint-disable-next-line @typescript-eslint/no-unused-vars
const path = require("path")

module.exports = {
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views"
      }
    }
  }
}
