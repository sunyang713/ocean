import { merge } from 'rxjs'

/**
  Merges all epics into a single one.
 */
export const combineEpics = (...epics) => {
  const merger = (...args) => merge(
    ...epics.map(epic => epic(...args) || fail('hi'))
  )

  // Technically the `name` property on Function's are supposed to be read-only.
  // While some JS runtimes allow it anyway (so this is useful in debugging)
  // some actually throw an exception when you attempt to do so.
  try {
    Object.defineProperty(merger, 'name', {
      value: `combineEpics(${epics.map(epic => epic.name || '<anonymous>').join(', ')})`,
    })
  } catch (e) {}

  return merger
}
