import DetalisItem from "./DetalisItem"
import "./Detalis.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import FavoritPages from "../FavoritPages/FavoritPages"

 const DetalisList = ({detalis}) => {
 
  const [showFavorit,setShowFavorit] = useState(false)
  const [favorit,setFavorit] = useState([])
  
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
     }
     else{
      const newItem = favorit.filter(el => item.id !== el.id);
           setFavorit(newItem)
         
      }
 }
 
 const removeFavorit = id =>{
  const newFavorit = favorit.filter(el => el.id !== id);
  setFavorit(newFavorit)
}
const qauntity = favorit.reduce((sum,el)=> sum + el.qauntity,0)
  return (
    <>
    <button className="detalisBack" onClick={()=> navigate(-1)}>Go Back</button>
    <button className="favorit1" onClick={handleSubmit}>Favorit Detalis {qauntity} </button>
    <div className="DetalisList">
        
         {showFavorit && <FavoritPages favorit={favorit} removeFavorit={removeFavorit}/>}
            {detalis.map(item => <DetalisItem key = {item.idMeal} {...item} favoritItem={favoritItem} />)}
        
    </div>
    
    </>
  )
}

export default DetalisList
