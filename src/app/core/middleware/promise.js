
import { isPromise } from 'ocean-utils'

// I disagree with promise middleware concept.
// using promise in the totally wrong way...?
// well maybe. it's a good way to /catch/ incorrect actions (that have been promisified somehow)

export default function promiseMiddleware(store) {
  return next => action => isPromise(action) ?
    action.then(store.dispatch) // catch?
  : next(action)
}
