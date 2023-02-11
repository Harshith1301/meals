import React from 'react'

const RecipeMeals = ({strCategory, strCategoryThumb, strCategoryDescription}) => {
  return (
    <div className='meals_card'>
    <img src={strCategoryThumb} alt="meals"/>
        <h2>{strCategory}</h2>
      <h6>{strCategoryDescription}</h6>
    </div>
  )
}

export default RecipeMeals