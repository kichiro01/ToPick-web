const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
})
