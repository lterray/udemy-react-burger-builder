import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer, props.shown ? classes.Open : classes.Close];

  return (
    <Fragment>
      <BackDrop shown={props.shown} click={props.close} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
}

export default sideDrawer;