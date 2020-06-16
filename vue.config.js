module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugin('preload').tap(include => {
      return [include, 'asyncChunks']
    })
  }
}
