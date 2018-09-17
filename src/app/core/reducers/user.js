import DISCOVER_STAR from '../actions/DISCOVER_STAR'
import RETRIEVE_USER from '../actions/RETRIEVE_USER'
import RECEIVE_USER from '../actions/RECEIVE_USER'
import { reducer } from 'ocean-utils'

/*
 * User data model
 */
function User() {
  return {
    // base properties
    firstName: null
  , lastName: null
  , userName: null
  , color: null
    // computed/derived properties
  , get name() { return `${ this.firstName } ${ this.lastName }` }
  , get invertedName() { return `${ this.lastName } ${ this.firstName }` }
  , get message() { return `${ this.name }'s favorite color is ${ this.color }` }
  , get professionalName() { return `Dr. ${ this.lastName }` }
  }
}

// Reducer
// @state <object> "user"
export default reducer(User, {
  // When app retrieves new user, clean out old data immediately.
  // Maybe you want this pattern, maybe you don't.
  [RETRIEVE_USER]: () => new User()
  // Return new user data
, [RECEIVE_USER]: (user, newUser) => newUser
  // Change user color to 'gold' when a star is found
, [DISCOVER_STAR]: (user) => ({ ...user, color: 'gold' })
})
