import React from 'react'
import { useState } from 'react'
import RecipeMeals from './RecipeMeals'
export const useMeals = () => {
    const [recipes, setRecipes] = useState([])

    const displayRecipe=recipes.map(recipe=>{
        return <RecipeMeals {...recipe} key={recipe.idCategory} />
      })

      return {setRecipes, displayRecipe}

}
