import React from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";
import Ul from "../Ul/Ul";

const Navigation = (props) => {
  return (
    <nav className={ `navigation ${props.isMobile && 'navigation_type_mobile'}` }>
      <Ul anotherClass='navigation__list'>
        <li>
          <NavLink
            to="/"
            className={ ({ isActive }) =>
              'navigation__link navigation__link_type_main' + ( isActive ? ' navigation__link_active' : '' )
            }
          >Главная</NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={ ({ isActive }) =>
              'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
            }
          >Фильмы</NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-movies"
            className={ ({ isActive }) =>
              'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
            }
          >Сохранённые фильмы</NavLink>
        </li>
      </Ul>
      <NavLink to='/profile' className='navigation__account-link'>Аккаунт</NavLink>
    </nav>
  );
}

export default Navigation;
