import {Link} from "react-router-dom"
import "./Categori.css"
const CategoriItem = ({strCategory,strCategoryThumb,strCategoryDescription}) => {
  return (
    <div className='CategoriItem'>
        <img src={strCategoryThumb}/>
        <h3>{strCategory}</h3>
        <p className="ShowAndHide">{strCategoryDescription}</p>
        {strCategoryDescription && <Link to={'/category/'+ strCategory} >Show {strCategory} ...</Link> }
    </div>
  )
}

export default CategoriItem