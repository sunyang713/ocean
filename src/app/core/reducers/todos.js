import ADD_TODO from '../actions/ADD_TODO'
import TOGGLE_TODO from '../actions/TOGGLE_TODO'
import REMOVE_TODO from '../actions/REMOVE_TODO'
import { reducer } from 'ocean-utils'


// example will only work well if I can demonstrate that 'todos' state is used in multiple,
// far reaching parts of the application that are unrelated.

// Map because it's a list, but also want to maintain that items have unique ID.
// Use the right core data structure. redux example here is to normalize to compensate for todo ids
// and a todo list (put the ids in its own map, put the list separate). that's garbage.

// learn your javascript data structures & types. use the simplest, most effective one.

// lol then immutable js.
function Todos() {
  return {
    // "byId?"
    all: new Map([
      [1, {
        message: 'make boilerplate'
      , completed: false
      , userId: 'sunyang713'
      }]
    , [2, {
        message: 'figure out website'
      , completed: false
      }]
    , [3, {
        message: 'lol idk'
      , completed: true
      }]
    ])
    // computed properties
    // todo make pattern to use reselect with this...
    // also cases where derived data somehow relies on some outside state slice (user)
  , get completed() { return this.all.filter(t => t.completed) }
  , get incomplete() { return this.all.filter(t => !t.completed) }
  }
}

// memoizing a selector?
// Object.defineProperty(Todos, 'completed', { get: createSelector(
//   () => this.all // will "this" work????
// , todos => todos.filter(t => t.completed)
// )})


export default reducer(Todos, {
  // Add a todo item
  [ADD_TODO]: (todos, todo) => todos.all.concat([ todo ])
  // Toggle a todo item
, [TOGGLE_TODO]: (todos, id) => todos.all.map(([key, todo]) => key === id ?
    [key, { ...todo, completed: !todo.completed }]
  : [key, todo]
  )
  // Remove a todo item
, [REMOVE_TODO]: (todos, id) => todos.all.filter(([key,]) => key !== id)
})



/*

a state 'domain' can have /modified/ versions of its state per selector logic.

visibleTodos
todos

export both. parent reducer will handle how to store them (hint: will be stored in a flattened manner)

data is "duplicated," but not actually because the 'computed/modified' state is just a /computation,/
not actually a new instance using ES6 getters! and memoized!!

don't export selector as a "selector (function)"."



maybe... just maybe.... if you have a lot of different ways to 'select' (derive) data,
that group of derived variations can go in its own reducer (domain, folder).

*/

// Records are the way to go
// class Todos extends Immutable.Record(initialState) {
//   get visible
// }


// class Cart extends Immutable.Record({ itemA: 1, itemB: 2 }) {
//   get sum() {
//     return this.itemA + this.itemB
//   }
// }





