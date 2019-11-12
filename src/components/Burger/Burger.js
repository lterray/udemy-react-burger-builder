import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
  let transformedIngredients = 'Please start to add ingredients!';
  if (props.ingredientsNum) {
    transformedIngredients = Object.keys(props.ingredients).map(ingredientType => {
      return [...Array(props.ingredients[ingredientType])].map((_, i) => {
        return <BurgerIngredient type={ingredientType} key={ingredientType + i}></BurgerIngredient>
      })
    });
  }

  return (<div className={classes.Burger}>
    <BurgerIngredient type="bread-top"></BurgerIngredient>
    {transformedIngredients}
    <BurgerIngredient type="bread-bottom"></BurgerIngredient>
  </div>)
};

export default burger;