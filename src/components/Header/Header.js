import React from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
    <header className='header page__header'>
      <Navigation />
      <NavLink to='/profile' className='header__account-link'>Аккаунт</NavLink>
    </header>
  );
}

export default Header;
