#!/usr/bin/env node

'use strict'

var webpack = require('webpack')

// this came out of cra build & webpack-cli, cleaned up.
// pretty agnostic. takes in a filesystem and a callback, that's it.
// executes callback on file(s)
// stream or nah?
module.exports = function build(config, fs = require('fs')) {
  let compiler = webpack(config)
  // compiler.outputFileSystem = fs
  compiler.hooks.beforeCompile.tap('WebpackInfo', compilation => console.log('Compilation starting…'))
  compiler.hooks.afterCompile.tap('WebpackInfo', compilation => console.log('Compilation finished.'))
  return new Promise(
    (resolve, reject) => compiler.run((error, stats) => error ? reject(error) : resolve(stats))
  ).then(stats => {
    console.log(stats.toString({ colors: true }))
    const info = stats.toJson({ colors: true }) // config???
    // if (stats.hasErrors()) {
    //   console.error('Compiled with errors.')
    //   console.error(info.errors[0])
    //   process.exitCode = 2
    // }
    // if (stats.hasWarnings()) {
    //   console.warn('Compiled with warnings.')
    //   console.warn(info.warnings[0])
    // }
    if (!stats.hasErrors() && !stats.hasWarnings()) {
      console.info('Compiled successfully.')
    }
    return stats
  }).catch(error => {
    compiler.purgeInputFileSystem()
    console.error('Failed to compile.')
    console.error(error.stack || error)
    console.error(error.details || 'No error details.')
    return error
    // process.exit(1)
    // process.exitCode = 1
  })
}


// compiler.plugin('done', stats => {
//     const mainAssetName = stats.toJson().assetsByChunkName.main
//     const integrity = stats.compilation.assets[mainAssetName].integrity
// })

// if (argv.progress) {
//   const ProgressPlugin = require('webpack').ProgressPlugin
//   new ProgressPlugin({
//     profile: argv.profile
//   }).apply(compiler)
// }
