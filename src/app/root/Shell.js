import React from 'react'


export default function Shell(props) {
  return (
    <div>
      <p>this would be a navbar probs</p>
      { props.children }
      <p>This could be the footer</p>
    </div>
  )
}
