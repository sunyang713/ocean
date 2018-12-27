// this file should be _everything_ ignorant. doesn't know what anything is except webpack maybe.
// eh.

// webpack in here only

// import Application from './Application'
// import polyfill from './polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import Core from './Core'

// possibly webpack the HMR process
(function main() {

  // polyfill()

  // Instantiate an Application.
  // const application = new Application(process.env.SOURCE) // webpack injected
  // const application = new Application()
  const core = new Core()
  const render = ReactDOM.render(<Root core={ core } />, document.getElementById('root')) // config this

  // Activate/Execute/Render/initiate/begin/start the Application.
  // application.start()
  render()

  // Activate Hot Module Replacement in development mode.
  if (module.hot)
    module.hot.accept(undefined, render) // config 'app'? 

})()
