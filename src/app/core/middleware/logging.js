/**
 * Logs all actions and states after they are dispatched.
 */
export default function logger(store) {
  return next => action => {
    // console.log('%c prev state', 'color: gray', store.getState());
    console.group(action.type)
    console.info('%c dispatching', 'color: blue', action)
    let result = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd()
    return result
  }
}
