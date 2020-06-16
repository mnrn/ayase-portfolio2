module.exports = {
  chainWebpack: (config) => {
    config.plugin('prefetch').delete()
    config.plugin('preload').tap(args => {
      args[0].include = 'allChunks'
      return args
    })
  }
}
