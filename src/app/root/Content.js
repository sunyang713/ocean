import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router'

// this should probably be a better name
export default function Content(props) {
  return (
    <main>
      <p>this would be the contasent based on the router</p>
    </main>
  )
}

  // <Switch>
  //   <Route exact path="/">
  //     <Home />
  //   </Route>
  //   <Route path="/about">
  //     <About />
  //   </Route>
  //   <Route path="/:user">
  //     <User />
  //   </Route>
  //   <Route>
  //     <NoMatch />
  //   </Route>
  // </Switch>
