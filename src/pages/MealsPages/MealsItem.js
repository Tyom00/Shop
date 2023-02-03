import {Link} from "react-router-dom"
import "./Meals.css"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { useState } from "react";

const MealsItem = ({ strMealThumb,strMeal,idMeal,favoritItem,favorit}) => {


 
  const index =  favorit.findIndex((el) =>{
    console.log(idMeal);
    return el.id === idMeal
  })
  console.log(index);
   

  return (
    <div className=' MealsItem'>
        <img src={strMealThumb}/>
        <h3>{strMeal}</h3>
        <h3>{idMeal} </h3>
      
  
        <AiFillStar className={index >= 0 ? "icon" : "iconStart"} onClick={()=>{ favoritItem( 
         
        {          
          name:strMeal,
          id:idMeal
        })}}></AiFillStar>
        <Link to={'/meals/'+ idMeal} >Show {strMeal} ...</Link>
    </div>
  )
}

export default MealsItem