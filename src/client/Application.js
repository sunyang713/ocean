// import ReactDOM { render, hydrate } from 'react-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'
import Core from './Core'

/**
 * Wrapper for the app
 * Not really right, but w/e.
maybe one day Application handles the cycle.js gluing?
should this be "configurable?" give it a 'path' to the Root and Store?
nah, I think  Igot it. looks pretty good.
 */
// export default class Application {

//   constructor() {
//     this.core = new Core()
//     this.root = <Root core={ this.core } />
//   }

//   // Just a semantic helper. unnecessary.
//   start() {
//     this.render()
//   }

//   // Rerender, but keep the same core
//   restart() {
//     this.root = <Root core={ this.core }/>
//     this.render()
//   }

//   render() {
//     // element, container
//     ReactDOM.render(this.root, document.getElementById('root')) // config this
//   }

// }

export default class Application {

  constructor() {
    this.core = new Core()
  }

  render() {
    // element, container
    ReactDOM.render(<Root core={ this.core } />, document.getElementById('root')) // config this
  }

}