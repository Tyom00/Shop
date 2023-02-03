import "./Detalis.css"
import { useState } from "react";

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
 const DetalisItem = ({
  strMeal, strMealThumb, strArea,
  strIngredient1, strIngredient2,
  strIngredient3, strIngredient4,
  strIngredient5, strIngredient6,
  strIngredient7, strIngredient8,
  strIngredient9 , strMeasure1,
  strMeasure2, strMeasure3,
  strMeasure4, strMeasure5,
  strMeasure6, strMeasure7,
  strMeasure8, strMeasure9,
  strYoutube,favoritItem,idMeal

}) => {
  const [icon,setIcon] = useState(false)
  return (
    
   
    <div className="DetalisItem">
        <img src={strMealThumb}/>
        <h3>{strMeal}</h3>
        <h3>{strArea}</h3>
        <AiFillStar className={icon ? "icon" : "iconStart"} onClick={()=>{setIcon(!icon); favoritItem( 
          {          
           name:strMeal,
           id:idMeal
         })}}/>
        <div className="composition">
           <h2> Composition</h2>
           <p  className="compositionHide">
           {strIngredient1} - {strMeasure1 + ", "} 
           {strIngredient2} - {strMeasure2+ ", "}
           {strIngredient3} - {strMeasure3 + ", "}
           {strIngredient4} - {strMeasure4 + ", "}
           {strIngredient5} - {strMeasure5 + ", "}
           {strIngredient6} - {strMeasure6 + ", "}
           {strIngredient7} - {strMeasure7 + ", "}
           {strIngredient8} - {strMeasure8 + ", "}
           {strIngredient9} - {strMeasure9 }</p>
        </div>
        <a href={strYoutube}>See cooking method</a>
        
    </div>
   
  )
}

export default DetalisItem
