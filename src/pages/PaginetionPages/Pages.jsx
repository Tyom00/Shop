import "./Pages.css"

const Pages = ({categoriPage,totalItem,pagines,prevPages,nextPages, sortAZ,sortZA,setcategoriPage,setMeals }) => {
const pageNumbers = []
for (let i = 1; i <= Math.ceil(totalItem / categoriPage); i++) {
    pageNumbers.push(i)
    
}



  return (
    <>
    <div className="PagesBox">
    <ul className='pages'>
      <button className="sortButton" onClick={()=>sortAZ()}>A-Z</button>
      <button onClick={prevPages} className="prev">Prev</button>

        {
          pageNumbers.map(number =>(
             <input type="submit" className="pagesItem" key={number} onClick={()=>pagines(number)}
                value={number} />
          ))  
        }
      <button onClick={nextPages} className="next">Next</button>
      <button className="sortButton" button onClick={()=>sortZA()}>Z-A</button>
    </ul>
  
    <select className="select" onChange={(e)=> setcategoriPage(e.target.value)}>
      <option value="">Select Quantity</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    </div>
    
    </>
  )
}

export default Pages