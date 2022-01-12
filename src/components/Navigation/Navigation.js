import React from 'react';
import './Navigation.css'
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className='navigation'>
      <NavLink to="/" className="logo"/>
      { props.isLoggedIn
        ? <NavLink
          to="/movies"
          className={ ({ isActive }) =>
            'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
          }
        >Фильмы</NavLink>
        : ''
      }
      { props.isLoggedIn
        ? <NavLink
          to="/saved-movies"
          className={ ({ isActive }) =>
            'navigation__link' + ( isActive ? ' navigation__link_active' : '' )
          }
        >Сохранённые фильмы</NavLink>
        : ''
      }
    </nav>
  );
}

export default Navigation;
