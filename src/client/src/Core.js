// import { fromJS } from 'immutable'
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import * as reducers from 'ocean-app/core/reducers'
import * as middleware from 'ocean-app/core/middleware'
// import DevTools from 'app/components/DevTools'
// import { getDebugSessionKey } from './getDebugSessionKey'
// import { persistState } from 'redux-devtools'
import { compose } from 'ocean-utils'


/**
 * Construct the application store.
 */
export default function Core() {

  // Get the application store reducer.
  const reducer = combineReducers(reducers)

  // Get the preloaded application state.
  const preloadedState = undefined
  // const preloadedState = fromJS(window.__PRELOADED_STATE__)
  // delete window.__PRELOADED_STATE__

  // Get the application store enhancer.
  const enhancer = compose(
    applyMiddleware(...Object.values(middleware))
  // , DevTools.instrument(), // impure, implicitly couples 'react' tech with this store.
    // persistState(getDebugSessionKey())
  )

  // Initialize a hydrated Redux store.
  const store = createStore(
    reducer,
    preloadedState,
    enhancer
  )

  // rxjs?

  // Initialize the peristent state storage.
  // const StateStorage = new StateStorage(store)

  // Persist state to localStorage
  // make store observable?
  // store.subscribe(StateStorage.saveState) // should throttle.
  /* store config ... */
  /* local storage stuff w/ throttle */

  // Activate Hot Module Replacement - replace reducers.
  if (module.hot) {
    module.hot.accept('ocean-app/core/reducers', () => store.replaceReducer(reducer)) // probably won't work
  }

  return store
}


// function getDebugSessionKey() {
//   // You can write custom logic here!
//   // By default we try to read the key from ?debug_session=<key> in the address bar
//   const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
//   return (matches && matches.length > 0) ?
//     matches[1]
//   : null
// }

// // persist if user opts-in


// const REDUX_STATE_KEY = 'state'

// class Storage() {

//   constructor(store) {
//     this.storage = window.localStorage
//     this.store = store
//   }

//   saveState() {
//     try {
//       const serializedState = JSON.stringify(store.getState());
//       this.storage.setItem(REDUX_STATE_KEY, serializedState);
//       return Promise.resolve(null)
//     } catch (error) {
//       console.error(error)
//       return Promise.reject(error)
//     }
//   }

//   loadState() {
//     try {
//       const serializedState = this.storage.getItem(REDUX_STATE_KEY)
//       const state = serializedState ? JSON.parse(serializedState) : null
//       return Promise.resolve(state)
//     } catch (error) {
//       console.error(error)
//       return Promise.reject(null)
//     }
//   }

// }

