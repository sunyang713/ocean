/*
 * for streams/observables
 */
export default function pipe(...ops) {
  return stream => ops.reduce((s, o) => o(s), stream)
}
