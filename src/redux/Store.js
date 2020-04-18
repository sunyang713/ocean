import $$observable from 'symbol-observable'

import * as actions from './actions'

export default function createStore(_reducer) {

  if (typeof _reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }

  let reducer = _reducer
  let state = preloadedState
  const action$ = new Observable()
  const state$ = actions$.map(action => (state = reducer(state, action)))

  function dispatch(action) {
    // is plain obj
    if (typeof action !== 'object') {
      throw new Error('Actions must be strings. Attach a payload as a second argument to dispatch.')
    }
    action$.next(action)
    return action
  }

  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.')
    }
    reducer = nextReducer
    dispatch(actions.REPLACE)
  }

  dispatch(actions.INIT)

  return {
    state$,
    action$,
    dispatch,
    replaceReducer
  }
}
