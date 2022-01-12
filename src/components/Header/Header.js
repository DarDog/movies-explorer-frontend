import React from 'react';
import Navigation from "../Navigation/Navigation";
import './Header.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return(
    <header className='header page__header'>
      <Navigation isLoggedIn={props.isLoggedIn} />
      {props.isLoggedIn
        ? <NavLink to='/profile' className='header__account-link'>Аккаунт</NavLink>
        :
        <div className='header__container'>
          <NavLink to='/signup' className='header__link'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__link header__link_type_button'>Войти</NavLink>
        </div>
      }
    </header>
  );
}

export default Header;
