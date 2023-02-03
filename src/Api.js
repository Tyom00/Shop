import { URL_API } from "./config";

const getAllCategories = async() =>{
      const response = await fetch(URL_API + 'categories.php');
      return response.json()
}

const getFilteredCategory = async(category) =>{
    const response = await fetch(URL_API + 'filter.php?c='+category);
    return response.json()
}

const getMealById = async(id) =>{
    const response = await fetch(URL_API + 'lookup.php?i='+id);
    return response.json()
}


export {getAllCategories,getFilteredCategory,getMealById}