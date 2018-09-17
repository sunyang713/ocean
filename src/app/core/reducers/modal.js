import SHOW_MODAL from '../actions/SHOW_MODAL'
import HIDE_MODAL from '../actions/HIDE_MODAL'
import { reducer } from 'ocean-utils'

// theoretically, 'render' is framework agnostic. so if it's react or vue, this design should still work.
function Modal() {
  return {
    show: false
  , render: () => null
  }
}

export default reducer(Modal, {
  // Show modal and render the desired stuff
  [SHOW_MODAL]: (render) => { show: true, render }
  // Hide modal and clear contents
, [HIDE_MODAL]: () => new Modal()
})
