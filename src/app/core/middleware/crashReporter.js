/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export default function crashReporter(store) {
  return next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState()
        }
      })
      throw err
    }
  }
}
