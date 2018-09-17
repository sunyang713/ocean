import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import SpecialContainer from './SpecialContainer'

// Shoud the folder be 'view' instead, and then view/Root? symmetrical to idea of 'core'?
// yea, but root is still a good name
import Shell from 'ocean-app/root/Shell'
import Content from 'ocean-app/root/Content'

/*
 * Assembly of the Root component.
 * should/can the core be instantiated here?
 */
export default function Root(props) {
  return (
    <Provider store={ props.core }>
      <BrowserRouter>
        <Shell>
          <Content />
        </Shell>
      </BrowserRouter>
    </Provider>
  )
}

// function enhancer(Wrapper, ...props) {
//   return Component => ps => (
//     <Wrapper { ...props }>
//       <Component />
//     </Wrapper>
//   )
// }


// /*
//  * @Enhancement is just a React component.
//  */
// export function createEnhancer(Enhancement, ...enhancementProps) {

//   const enhance = Component => {
//     const EnhancedComponent = props => (
//       <Enhancement { ...enhancementProps }>
//         <Component { ...props } />
//       </Enhancement>
//     )
//     EnhancedComponent.displayName = `${ Enhancement.name }(${ WrappedComponent.displayName || WrappedComponent.name || 'Component' })`
//   }

//   return enhance
// }
