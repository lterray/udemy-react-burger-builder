import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
// import { withRouter } from 'react-router-dom';

const navigationItems = (props) => {
  //console.log(props);

  const links = [
    { path: "/burger", label: "Burger Builder" },
    { path: "/checkout", label: "Checkout" }
  ];

  const navigationItems = links.map(link => (
    <NavigationItem
      key={link.path}
      link={link.path}>
      {link.label}
    </NavigationItem>
  ));

  return <ul className={classes.NavigationItems}>
    {navigationItems}
  </ul>
};

export default navigationItems;