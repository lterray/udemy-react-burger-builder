import React, { Fragment } from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Fragment>
      <Backdrop shown={props.shown} click={props.backdropClickHandler}></Backdrop>
      <div
        className={classes.Modal}
        style={{
          transform: props.shown ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.shown ? '1': '0'
        }}>
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;