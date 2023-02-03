import { useState,useEffect } from "react"
import MealsList from "./MealsList"
import {getFilteredCategory} from "../../Api"
import { useParams } from "react-router-dom"
import Pages from "../PaginetionPages/Pages"

const MealsPages = () => {
   const[meals,setMeals] = useState([])
   const {name} = useParams()
   const [curentPage,setCurenpage]= useState(1)
   const [categoriPage,setcategoriPage] = useState(4)
  
useEffect(()=>{
  getFilteredCategory(name).then(data =>{
    setMeals(data.meals)
    })
},[])

const lastMealIndex = curentPage * categoriPage
const firstMealsIndex = lastMealIndex -  categoriPage
const qauntriItem = meals.slice(firstMealsIndex,lastMealIndex)


const pagines = pageNumbers => setCurenpage(pageNumbers)
const prevPages = () => setCurenpage(prev => pagines > 0 ? prev - 1 : 1) 
const nextPages = () => setCurenpage(prev => prev < categoriPage ? prev + 1 : 1)

const sortAZ = ()=>{
  const newCategories = qauntriItem.sort((a, b) => {
    const nameA = a.strMeal.toUpperCase(); 
    const nameB = b.strMeal.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
   
   
  
  });
  setMeals([...meals.slice(0,firstMealsIndex),...newCategories,...meals.slice(lastMealIndex,meals.length)])

 
}

const sortZA = ()=>{
  
  const newCategories = qauntriItem.sort((a, b) => {
    const nameA = a.strMeal.toUpperCase(); 
    const nameB = b.strMeal.toUpperCase(); 
    if (nameA > nameB) {
       return -1
    }
  
  });
  setMeals([...meals.slice(0,firstMealsIndex),...newCategories,...meals.slice(lastMealIndex,meals.length)])

   

  console.log(qauntriItem);
}
  return (
    <div>  <MealsList meals={qauntriItem}/>
    <Pages       
      categoriPage={categoriPage} 
      totalItem = {meals.length}
      pagines={pagines}
      curentPage={curentPage}
      nextPages={nextPages}
      prevPages={prevPages}
      sortAZ={ sortAZ}
      sortZA ={sortZA }
      setcategoriPage={setcategoriPage}
       /> 
     </div>
  )
}

export default MealsPages