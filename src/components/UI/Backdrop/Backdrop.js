import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (
  props.shown ? <div className={classes.Backdrop} onClick={props.click}></div> : null
);

export default backdrop;