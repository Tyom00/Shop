import { useState } from "react"
import "./Search.css"
const Search2 = ({search2,clearSerch}) => {

    const [input, setInput] = useState('');
     
  return (
    <div className='Search'>
        <input type='text' placeholder='Search Category...' value={input} onChange={e=> setInput(e.target.value)} />
        <button className='btn' onClick={()=> search2(input, 'strCategory')}>Search By Categories</button>
        <button className='btn' onClick={()=> search2(input, 'strCategoryDescription' )}>Search By Descr</button>
        <button className='btn' onClick={()=> clearSerch(setInput)}>Clear</button>
    </div>
  )
}

export default Search2