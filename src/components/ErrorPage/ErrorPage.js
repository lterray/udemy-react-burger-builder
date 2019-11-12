import React from 'react';
import Button from "../UI/Button/Button";
import { withRouter } from 'react-router-dom';


const ErrorPage = (props) => {

  const goBackHandler = () => {
    console.log(props.history);
    props.history.goBack();
  };

  return <div style={{ textAlign: 'center' }}>
    <h1>Unknown page</h1>
    <Button btnType="Danger" click={goBackHandler}>GOOO BACK</Button>
  </div>
};

export default withRouter(ErrorPage);