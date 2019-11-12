import React, {Fragment, useState} from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


const Layout = props => {
  const [showSideBar, setShowSideBar] = useState(false);

  const sideDrawerCloseHandle = () => {
    setShowSideBar(false);
  }

  const menuButtonClickHandler = () => {
    setShowSideBar(true);
  };

  return <Fragment>
    <Toolbar menuButtonClick={menuButtonClickHandler} />
    <SideDrawer close={sideDrawerCloseHandle} shown={showSideBar}/>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>
};

export default Layout;