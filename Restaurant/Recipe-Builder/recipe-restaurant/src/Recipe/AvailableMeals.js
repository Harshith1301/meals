import React from 'react'
import { useEffect} from 'react';
import {links} from './constants'
import { useMeals } from './useMeals';

const AvailableMeals = () => {
  const{displayRecipe, setRecipes} = useMeals();
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
     <div className='header'>   <h1>Available Meals </h1></div>
 <div className='recipe_list'>{displayRecipe} </div>
  </>
  )
}

export default AvailableMeals