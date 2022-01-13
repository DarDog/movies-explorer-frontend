import React from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { Link } from "react-router-dom";
import LoginMenu from "../LoginMenu/LoginMenu";

const Header = (props) => {
  return (
    <header className='header page__header'>
      <Link to='/' className='logo'/>
      {props.isLoggedIn && <Navigation/>}
      {!props.isLoggedIn && <LoginMenu/>}
      {props.isLoggedIn && <button onClick={props.handleClick} type='button' className='header__burger-menu'/>}
    </header>
  );
}

export default Header;
