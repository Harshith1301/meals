import React from 'react'
import { useEffect} from 'react';
import {links} from './constants'
import { useMeals } from './useMeals';
const CategoriesList = () => {
   const{setRecipes, displayRecipe} =useMeals()
  useEffect(()=>{
    const fetchData= async ()=>{
    const data=await fetch(links.mealsLink);
    const json=await data.json();
    setRecipes(json.categories);
    }
    fetchData()
  }, []);


  return (
    <>
 <div className='header'>   <h1>List of the categories of meals </h1></div>
 <div className='recipe_list'> {displayRecipe}</div>

    </>
  )
}

export default CategoriesList