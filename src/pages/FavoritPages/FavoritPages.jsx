
import "./favoritDetalis.css"
import { useState,useEffect } from 'react';
import DetalisList from '../DetalisPages/DetalisList';
 const FavoritPages = ({favorit,removeFavorit}) => {
 

  return (
    <div className="favoritsection">
   
      { 
      
            favorit.map(item => <div className='favoritDetalis'>
                <h3>Id : {item.id}</h3>
                <h3>Name : {item.name}</h3>
                <span className="close" onClick={()=>removeFavorit(item.id)}>X</span>
                </div>)
       }
         
    </div>
  )
}
export default FavoritPages
