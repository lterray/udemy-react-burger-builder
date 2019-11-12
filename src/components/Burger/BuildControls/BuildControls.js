import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <h2>The current price is: {props.price.toFixed(2)}</h2>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        type={control.type}
        addIngredient={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
        disabled={!props.currentIngredients[control.type]}>
      </BuildControl>
    ))}
    <button
      onClick={props.orderButtonHandler}
      disabled={props.ingredientsNum < 1}
      className={classes.OrderButton}>
        ORDER NOW
    </button>
  </div>
);

export default buildControls;