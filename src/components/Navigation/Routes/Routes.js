import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from "../../UI/Spinner/Spinner";
import ErrorPage from "../../ErrorPage/ErrorPage";

const BurgerBuilder  = React.lazy(() => import("../../../containers/BurgerBuilder/BurgerBuilder"));
const Checkout  = React.lazy(() => import("../../../containers/Checkout/Checkout"));

const Routes = (props) => (
  <Switch>
    <Route exact path="/burger" render={() => <Suspense fallback={<Spinner/>}><BurgerBuilder/></Suspense>} />
    <Route exact path="/checkout" render={() => <Suspense fallback={<Spinner/>}><Checkout/></Suspense>} />

    <Route exact path="/checkout" component={Checkout} />
    {/* or if // import { withRouter } from 'react-router-dom'; */}
    {/* then "this.props.history.replace('/...')" redirects too */}
    <Redirect exact from="/" to="burger" />
    <Route component={ErrorPage}></Route>
  </Switch>
);

export default Routes;