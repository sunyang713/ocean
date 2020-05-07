// this file should be _everything_ ignorant. doesn't know what anything is except webpack maybe.
// eh.
// webpack in here only ideally.

// import polyfill from './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import Core from './Core'
// import * as serviceWorker from './serviceWorker';

// possibly webpack the HMR process
;(function main(mountNodeId = 'root') {

  // polyfill()

  const core = new Core()
  const render = () => ReactDOM.render(<Root core={core} />, document.getElementById(mountNodeId))

  render()

  // Activate Hot Module Replacement in development mode.
  if (module.hot)
    module.hot.accept('./Root', render) // config 'app'? 
    // module.hot.accept(undefined, render)

  // serviceWorker.register();
})()
