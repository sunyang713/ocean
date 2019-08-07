import React from 'react'
import Ayo from './Ayo'

// this should probably be a better name
export default function Content(props) {
  return (
    <div>
      <p>this would be the contasent based on the router</p>
      <Ayo
        thingA={1}
        thingB="lol"
        thingC={this.state.something}/>
      <Connector component={Ayo}
        thingA={1}
        thingB="lol"
        thingC={this.state.something}/>
    </div>
  )
}


