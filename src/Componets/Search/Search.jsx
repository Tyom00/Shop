import React from 'react'
import "./Search.css"

const Search = ({search}) => {
  return (
    <div className='Search'>
      <input type='text' placeholder='Search Category...' onChange={e=> search(e.target.value)} />
    </div>
  )
}

export default Search