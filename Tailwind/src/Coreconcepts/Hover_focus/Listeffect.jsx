import React from 'react'

function Listeffect() {
  return (
    <div>
      <ul className='[&>*:last-child]:text-blue-600 [&>*:last-child]:font-bold'>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
        <li>six</li>
        <li>seven</li>
      </ul >
    </div>
  )
}

export default Listeffect
