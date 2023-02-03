import "./HomePages.css"
import { useState,useEffect } from "react"
import { getAllCategories } from "../../Api"
import CategorisList from "../CategoriPages/CategoriList" 
import Search from "../../Componets/Search"
import Search2 from "../../Componets/Search/Search2"
import Pages from "../PaginetionPages/Pages"

const HomePages = () => {
  const [categories, setCategories] = useState([])
  const [filteredCategory, setFiltereCategory] = useState([]);
  const [notItem,setnotItem] = useState([])
  const [curentPage,setCurenpage]= useState(1)
  const [categoriPage,setcategoriPage] = useState(4)


  useEffect(() => {
    getAllCategories().then(data => {
      setCategories(data.categories);
      
    }).catch(error => { console.log(error); });
 
 }, [])
  

  // const search = (value)=>{                     
  //   //const newCategories = categories.filter(el => el.strCategory.toLowerCase().indexOf(value.toLowerCase()) !== -1 );
  //   const newCategories = categories.filter(el => el.strCategory.toLowerCase().includes(value.toLowerCase()) );
  //   setFiltereCategory(newCategories);
  //   console.log(value.length)
  //   if(value.length > 0 && filteredCategory.length === 0){
  //     console.log("gfg");
  //        notResult(value)
  //   }
  // }
  
  const notResult = (value)=>{
    
      setnotItem([{
        strCategory:value +" no Result",
        strCategoryThumb:"https://visityerevan.am/media/images/bKtur_03.jpg",
        strCategoryDescription:false
  }])
      
 
  }
  const search2 = (input, searchBy)=>{
     //const newCategories = categories.filter(el => el[searchBy].toLowerCase().indexOf(input.toLowerCase()) !== -1 );
     const newCategories = categories.filter(el => el[searchBy].toLowerCase().includes(input.toLowerCase()) );
     setFiltereCategory(newCategories);
     if(input.length > 0 && filteredCategory.length === 0){
          console.log("gfg");
             notResult(input)
        }
  }
const clearSerch = (setInput)=>{
  setInput('') 
  setFiltereCategory([])
  setnotItem([])

}
const lastMealIndex = curentPage * categoriPage
const firstMealsIndex = lastMealIndex -  categoriPage
const qauntriItem = categories.slice(firstMealsIndex,lastMealIndex)


const pagines = pageNumbers => setCurenpage(pageNumbers)
const prevPages = () => setCurenpage(prev => pagines > 0 ? prev - 1 : 1) 
const nextPages = () => setCurenpage(prev => prev < categoriPage ? prev + 1 : 1) 

const sortAZ = ()=>{
  const newCategories = qauntriItem.sort((a, b) => {
    const nameA = a.strCategory.toUpperCase(); 
    const nameB = b.strCategory.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
   
   
  
  });
  setCategories([...categories.slice(0,firstMealsIndex),...newCategories,...categories.slice(lastMealIndex,categories.length)])

 
}

const sortZA = ()=>{
  
  const newCategories = qauntriItem.sort((a, b) => {
    const nameA = a.strCategory.toUpperCase(); 
    const nameB = b.strCategory.toUpperCase(); 
    if (nameA > nameB) {
       return -1
    }
  
  });
  setCategories([...categories.slice(0,firstMealsIndex),...newCategories,...categories.slice(lastMealIndex,categories.length)])

   

  console.log(qauntriItem);
}

  return (
    <div className="HomePages">
      {/* <Search search={search} /> */}
      <Search2 search2={search2} clearSerch={clearSerch} />
      <CategorisList categories={filteredCategory.length > 0 ?  filteredCategory : notItem.length > 0 ? notItem :  qauntriItem }/> 
      <Pages       
      categoriPage={categoriPage} 
      totalItem = {categories.length}
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

export default HomePages