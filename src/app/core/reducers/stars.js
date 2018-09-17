// import { schema } from 'normalizr'
import DISCOVER_STAR from '../actions/DISCOVER_STAR'
import DISCOVER_STARS from '../actions/DISCOVER_STARS'
import { reducer } from 'ocean-utils'

// const stars = new schema.Entity('stars')

const initialState = 0

// Reducer
// @state <number> "count"
// all of these should be considered /individual reducers/.
// As such, they can have different initial states!!
// ...?
// jk, that was wrong. they're not individual, it's /one reducer/.
export default reducer(Number, {

  // Increment counter when user finds a star
  [DISCOVER_STAR]: (count) => count + 1

  // Increment counter n when user finds n stars
, [DISCOVER_STARS]: (count, n) => count + n

})
