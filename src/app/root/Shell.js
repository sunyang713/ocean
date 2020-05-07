import React from 'react'

export default function Shell({ children }) {
  return (
    <>
      <nav>
        <ol>
          <li><a href="#">First</a></li>
          <li><a href="#">Second</a></li>
          <li>Third</li>
        </ol>
      </nav>
      { children }
      <footer>
        <p>© 2020 Jonathan Sun. All rights reserved.</p>
      </footer>
    </>
  )
}
