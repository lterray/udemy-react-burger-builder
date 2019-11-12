import React, { useState, useEffect, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axiosFirebase from '../../axios-burger-firebase';
import Spinner from '../../components/UI/Spinner/Spinner'


const BASE_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const BurgerBuilder = () => {

  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(BASE_PRICE);
  const [purchasingModalShown, setPurchasingModalShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const ingredientsNum = Object.values(ingredients).reduce(
    (numOfAll, numOfCurrent) => numOfAll + numOfCurrent, 0);

  useEffect(() => {
    axiosFirebase.get('/ingredients.json')
      .then(response => { setIngredients(response.data); });
  }, []);

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
    setLoading(true);
    const order = {
      ingredients: ingredients,
      price: price,
      customer: {
        name: 'Laszlo Terray',
        address: {
          street: 'Test Street',
          zip: 2000,
          country: 'Hungary'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axiosFirebase.post('/orders.json', order)
      .then(response => {
        setLoading(false);
        setPurchasingModalShown(false);
        console.log(response);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });

  };

  let orderSummary = <OrderSummary
    price={price}
    purchasingModalShown={purchasingModalShown}
    purchaseCancel={purchaseCanceledHandler}
    purchaseContinue={purchaseContinueHandler}
    ingredients={ingredients} />;

  if (loading) {
    orderSummary = <Spinner />;
  }

  return <Fragment>
    <Modal shown={purchasingModalShown} backdropClickHandler={purchaseCanceledHandler}>
      {orderSummary}
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