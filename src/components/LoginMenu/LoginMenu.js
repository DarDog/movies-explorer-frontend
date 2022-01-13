import React from 'react';
import { NavLink } from "react-router-dom";

const LoginMenu = () => {
  return(
    <div className='header__container'>
      <NavLink to='/signup' className='header__link'>Регистрация</NavLink>
      <NavLink to='/signin' className='header__link header__link_type_button'>Войти</NavLink>
    </div>
  );
}

export default LoginMenu;
