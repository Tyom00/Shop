import "./Meals.css"
import MealsItem from './MealsItem'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import  FavoritPages  from "../FavoritPages/FavoritPages"
import DetalisPages from "../DetalisPages/DetalisPages"
const MealsList = ({meals}) => {

 
  const [showFavorit,setShowFavorit] = useState(false)
  const [favorit,setFavorit] = useState([])
  const [icon,setIcon] = useState(false)
  const  navigate = useNavigate()
  
 const handleSubmit = ()=>{
  setShowFavorit(!showFavorit)
  
 }

 const favoritItem = (item)=>{
  
  console.log(favorit)
     const index = favorit.findIndex(el => el.id === item.id)
 
     if(index === -1){
        const newItem ={
         ...item,
         qauntity:1
        }
        setFavorit([newItem,...favorit])
     }else{
      const newItem = favorit.filter(el => item.id !== el.id);
           setFavorit(newItem)
         
      }
 }
 
 
 const removeFavorit = id =>{
  const newFavorit = favorit.filter(el => el.id !== id);
  setFavorit(newFavorit)
  setIcon(!icon)
}
 
const qauntity = favorit.reduce((sum,el)=> sum + el.qauntity,0)

  return (
    <>
    <div className="sectionbutton">
      <div><button className="mealsBack" onClick={()=> navigate(-1)}>Go Back </button></div>
      <div><button className="favorit" onClick={handleSubmit}>Favorit Detalis {qauntity}</button></div>
    </div>
    
    <div >
         <div className="as">   {showFavorit && <FavoritPages  favorit={favorit} removeFavorit={removeFavorit} qauntity={qauntity}/>}</div>
         
          <div className='MealsList'>{ meals.map(item => <MealsItem key={item.idMeal} {...item} favoritItem={favoritItem} setIcon={setIcon} favorit={favorit}/>)}</div> 
         
    </div>
    
      </>)
}

export default MealsList