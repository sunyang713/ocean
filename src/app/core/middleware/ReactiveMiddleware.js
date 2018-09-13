import { fail, pipe } from 'belt'

export default function ReactiveMiddleware(Stream, subscribe) {
  const epic$ = new Stream()
  const reactiveMiddleware = store => {
    const inputAction$ = new Stream()
    const epic$ToAction$ = pipe(
      map(epic => epic(inputAction$) || fail('hi'))
    , merge
    )
    const outputAction$ = epic$ToAction$(epic$)
    outputAction$[subscribe](store.dispatch)
    return next => action => inputAction$.next(action) || next(action)
  }
  reactiveMiddleware.run = rootEpic => epic$.next(rootEpic)
  return reactiveMiddleware
}

// export const rxEpicMiddleware = createReactiveMiddleware(Subject, 'subscribe')
// export const xsEpicMiddleware = createReactiveMiddleware(Producer, 'addListener')
