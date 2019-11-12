import React, { useState, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const BASE_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {

  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  const [price, setPrice] = useState(BASE_PRICE);
  const [purchasingModalShown, setPurchasingModalShown] = useState(false);
  const ingredientsNum = Object.values(ingredients).reduce(
    (numOfAll, numOfCurrent) => numOfAll + numOfCurrent, 0);

  const addIngredient = (type) => {
    const newNum = ingredients[type] + 1;
    const newIngredients = {...ingredients};
    newIngredients[type] = newNum;
    setIngredients(newIngredients);

    setPrice(price + INGREDIENT_PRICES[type]);
  };

  const removeIngredient = (type) => {
    const ingredientExists = ingredients[type];
    if (ingredientExists) {
      const newNum = ingredients[type] - 1;
      const newIngredients = {...ingredients};
      newIngredients[type] = newNum;
      setIngredients(newIngredients);

      setPrice(price - INGREDIENT_PRICES[type]);
    }
  };

  const orderButtonHandler = () => {
    setPurchasingModalShown(true);
  };

  const purchaseCanceledHandler = () => {
    setPurchasingModalShown(false);
  };

  const purchaseContinueHandler = () => {
    alert('continue');
  };

  return <Fragment>
    <Modal shown={purchasingModalShown} backdropClickHandler={purchaseCanceledHandler}>
      <OrderSummary
        price={price}
        purchasingModalShown={purchasingModalShown}
        purchaseCancel={purchaseCanceledHandler}
        purchaseContinue={purchaseContinueHandler}
        ingredients={ingredients} />
    </Modal>
    <Burger ingredients={ingredients} ingredientsNum={ingredientsNum}></Burger>
    <BuildControls
      ingredientsNum={ingredientsNum}
      price={price}
      currentIngredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      orderButtonHandler={orderButtonHandler} />
  </Fragment>

};

export default BurgerBuilder;