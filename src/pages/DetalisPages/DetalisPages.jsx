import { useState,useEffect } from "react";
import {getMealById} from "../../Api"
import DetalisList from "./DetalisList";
import { useParams } from "react-router-dom";

const DetalisPages = () => {
  
    const [detalis,setDetalis] = useState([])
   const {id} = useParams()
  
    useEffect(()=>{
        getMealById(id).then(data=>
            setDetalis(data.meals)
          
        )
    },[])
  return (
   
    <div>
        
       <DetalisList detalis={detalis}  />
    </div>
  )
}

export default DetalisPages