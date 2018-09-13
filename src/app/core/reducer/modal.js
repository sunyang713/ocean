import SHOW_MODAL from 'core/actions/SHOW_MODAL'
import HIDE_MODAL from 'core/actions/HIDE_MODAL'
import { reducer } from 'utils/redux'

// theoretically, 'render' is framework agnostic. so if it's react or vue, this design should still work.
function Modal() {
  return {
    show: false
  , render: () => null
  }
}

const reducer = reducer(Modal, {
  // Show modal and render the desired stuff
  [SHOW_MODAL]: (render) => { show: true, render }
  // Hide modal and clear contents
, [HIDE_MODAL]: () => new Modal()
})
