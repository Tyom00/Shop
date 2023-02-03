import "./Categori.css"
import "./CategoriMobile.css"

import CategoriItem from './CategoriItem'

const CategoriList = ({categories}) => {

  return (
    <div className='CategoriList'>
        {
            categories.map(item => <CategoriItem key={item.idCategory} {...item} />)
        }
    </div>
  )
}

export default CategoriList