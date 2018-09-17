// this file should be _everything_ ignorant. doesn't know what anything is except webpack maybe.

// webpack in here only

import Application from './Application'
// import polyfill from './polyfill'

// possibly webpack the HMR process
(function main() {

  // polyfill()

  // Instantiate an Application.
  // const application = new Application(process.env.SOURCE) // webpack injected
  const application = new Application()

  // Activate/Execute/Render/initiate/begin/start the Application.
  application.start()

  // Activate Hot Module Replacement in development mode.
  if (module.hot)
    module.hot.accept(application.source, application.restart) // config 'app'? 

})()
