var webpack = require('./build-webpack')

export default function webpackStream(config, fs = require('fs')) {
  return through.obj((file, enc, next) =>
    webpack(config, memfs).then(stat => Object.entries(stat.toJson().compilation.forEach(
      ([ assetName, asset ]) => asset.emitted && next({
        base: compiler.outputPath,
        path: resolve(compiler.outputPath, assetName),
        contents: fs.readFileSync(resolve(compiler.outputPath, assetName))
      })
    )))
  )
}
