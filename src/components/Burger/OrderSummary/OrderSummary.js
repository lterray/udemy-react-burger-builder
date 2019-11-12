import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => (
    <li key={ingredient}>
      <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:
      {props.ingredients[ingredient]}
    </li>
  ));

  return (
    <Fragment>
      <h3>Your order:</h3>
      <p>Delicious burger with these ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" click={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" click={props.purchaseContinue}>CONTINUE</Button>
    </Fragment>
  );
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.purchasingModalShown != nextProps.purchasingModalShown;
}

export default React.memo(orderSummary, areEqual);