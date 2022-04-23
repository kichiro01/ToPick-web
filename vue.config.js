const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/ToPick-web',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
})
