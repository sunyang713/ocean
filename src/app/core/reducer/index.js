import { combineReducers } from 'redux'
import stars from './stars'
import todos from './todos'
import user from './user'
import modal from './modal'
// import numbers from './numbers'


export default combineReducers({
  stars
, todos
, user
, modal
})
