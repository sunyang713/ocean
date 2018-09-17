// Receives an object mapping a 'slice' to a reducer and selectors.
// Returns a rootReducer and hoisted selectors.
// Need Immutable.js version of this too.
// export default function reducer(handlers) {
//   return initialState => {
//     return (state = initialState, action) =>
//       handlers.hasOwnProperty(action.type) ?
//         handlers[action.type](state, ...action.payload)
//       : state
//   }
// }
// Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });


//imutabel version? maybe this is immutable agnostic
// model, schema, shape, Record?
export default function reducer(Model, handlers) {
  // slick as shit
  // set function name?
  // reducer.name = `${Model.name}reducer`
  return (state = new Model(), action) =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, ...action.payload)
    : state
}
