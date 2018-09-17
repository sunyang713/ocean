

var config = require('../webpack.config')
var buildWebpack = require('./build-webpack')
var MemoryFS = require('memory-fs')

;(function build() {
  console.log('hello world')
  buildWebpack(config, new MemoryFS())
})()
